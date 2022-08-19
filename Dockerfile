##################################
# BUILDER
##################################

FROM node:16 AS builder

ENV PORT 3000

ARG NODE_ENV=development

ENV NODE_OPTIONS --max_old_space_size=4096

# # Create app directory.
# RUN mkdir -p /app

# Define the working directory of the container.
WORKDIR /app

# Copy package.json and package-lock.json to the container.
COPY package*.json /app/

# Install all dependencies, including dev dependencies so the project can be built.
RUN NODE_ENV=development npm ci

# Build app.
COPY . .
RUN NODE_ENV=${NODE_ENV} npm run build

##################################
# RUNNER
##################################

FROM node:16 as runner

LABEL org.opencontainers.image.source https://github.com/iacobfred/SelfBuilder

# Copy NODE_ENV from the previous stage.
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}

# Define the working directory of the container.
WORKDIR /app

# Copy compiled JavaScript from the builder stage.
# TODO: https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Copy package.json and package-lock.json to the container; remove unnecessary dependencies.
COPY package*.json .
RUN npm ci

# Make the build directory writable in dev mode.
RUN if [ "$NODE_ENV" = "development" ]; then chmod g+w -R "/app/.next/"; fi

# Expose Next.js web application port.
EXPOSE 3000

# Switch to non-root user.
USER www-data

# Define health check.
HEALTHCHECK --interval=30s --timeout=7s --start-period=60s --retries=3 \
  CMD curl --fail http://localhost:3000/ || exit 1

# Start the app.
# CMD ["npm", "run", "start:migrate"]
CMD ["npm", "run", "start"]
