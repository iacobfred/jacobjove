module.exports = {
  extends: [
    "plugin:@nrwl/nx/react-typescript",
    "next",
    "next/core-web-vitals",
    "../../.eslintrc.js",
  ],
  ignorePatterns: ["!**/*", ".next/**/*"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        "@next/next/no-html-link-for-pages": ["error", "apps/web/pages"],
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      rules: {},
    },
    {
      files: ["*.js", "*.jsx"],
      rules: {},
    },
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
  env: {
    jest: true,
  },
};
