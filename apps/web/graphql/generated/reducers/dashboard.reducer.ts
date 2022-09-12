/* Do not edit this file. It was generated programmatically. */
// import Dashboard from "@web/graphql/generated/types/Dashboard";
import { DashboardCreationInput } from "@web/graphql/generated/inputs/dashboard.inputs";
import { ID } from "@web/graphql/schema/types";
import { Payload, ArrayAction, arrayReducer } from "@web/utils/data/reduction";
import { DashboardFragment } from "@web/graphql/generated/fragments/dashboard.fragment";
import { UserFragment } from "@web/graphql/generated/fragments/user.fragment";

export type DashboardData = Partial<DashboardCreationInput> & { id?: ID };
// export type DashboardData = InputData<Dashboard>;
// export type InitialDashboardData = InitialData<Dashboard, "rank" | "userId">;

export function initializeDashboardData(
  data: Partial<DashboardData>,
  user?: UserFragment | null | undefined
): Partial<DashboardData> {
  if (!user) return data;
  return {
    userId: user.id,
    name: "",
    ...Object.fromEntries(Object.entries(data).filter(([, value]) => value !== undefined)), // TODO: make this unnecessary
  };
}

export function dashboardReducer(state: DashboardData, payload: Payload<DashboardData>) {
  if (payload.field === "init")
    return initializeDashboardData(payload.value as Partial<DashboardData>);
  return { ...state, [payload.field]: payload.value };
}

export function dashboardsReducer(
  state: DashboardFragment[],
  action: ArrayAction<DashboardFragment>
) {
  return arrayReducer<DashboardFragment>(state, action);
}
