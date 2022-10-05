import Definition, { OPTIONAL_BOOLEAN, OPTIONAL_STRING, REQUIRED_STRING } from "@common/definition";
// import { Layout as LayoutItem } from "react-grid-layout";

// type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];

export type DashboardComponentKey =
  | "calendar"
  | "identities"
  | "tasks"
  | "values"
  | "topics"
  | "routines";

// https://github.com/react-grid-layout/react-grid-layout#grid-item-props
// export interface DashboardComponent extends LayoutItem {
//   i: DashboardComponentKey;
// }

// export type CompleteDashboardLayouts = Record<
//   "xxs" | "xs" | "sm" | "md" | "lg" | "xl",
//   DashboardComponent[]
// >;

// export type DashboardLayouts = AtLeastOne<CompleteDashboardLayouts>;

const dashboardFields = ["userId", "name", "description", "isDefault", "public"] as const;

type DashboardFields = typeof dashboardFields[number];

const definition: Definition<DashboardFields> = {
  name: "dashboard",
  fields: {
    userId: { required: true, type: "ID", ref: "User" },
    name: REQUIRED_STRING,
    description: OPTIONAL_STRING,
    // layouts: {
    //   required: true,
    //   type: "Map",
    //   typeCast: "JSON",
    //   shape: {
    //     xxs: { type: "Array", required: false },
    //     xs: { type: "Array", required: false },
    //     sm: { type: "Array", required: false },
    //     md: { type: "Array", required: false },
    //     lg: { type: "Array", required: false },
    //     xl: { type: "Array", required: false },
    //   }
    // },
    isDefault: OPTIONAL_BOOLEAN,
    public: OPTIONAL_BOOLEAN,
  },
};

export default definition;
