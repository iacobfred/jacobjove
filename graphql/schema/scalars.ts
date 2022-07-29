import { Timestamp } from "firebase/firestore";
import { GraphQLScalarType, Kind } from "graphql";

interface TimestampConstructor {
  seconds: number;
  nanoseconds: number;
}

export const DateTimeScalar = new GraphQLScalarType({
  name: "DateTimeISO",
  description:
    "The javascript `Date` as string. Type represents date and time as the ISO Date string.",
  serialize: (value: unknown): string => {
    // Return an ISO string.
    try {
      if (value instanceof Date) return value.toISOString();
      if (typeof value === "string") return new Date(value).toISOString();
      const timestamp = Object.prototype.hasOwnProperty.call(value, "toDate")
        ? (value as Timestamp)
        : new Timestamp(
            (value as TimestampConstructor).seconds,
            (value as TimestampConstructor).nanoseconds
          );
      return timestamp.toDate().toISOString();
    } catch (err) {
      throw new Error(
        `Failed to serialize time value: ${JSON.stringify(value)} (${typeof value}); ${err}`
      );
    }
  },
  parseValue: (value: unknown): Date => {
    // Return a Date instance.
    try {
      return value instanceof Date ? value : new Date(value as string);
    } catch (err) {
      throw new Error(`Failed to parse time value: ${JSON.stringify(value)} (${typeof value})`);
    }
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) return new Date(ast.value);
    throw new Error("Invalid date value");
  },
});
