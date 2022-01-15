import DashboardViewer, {
  DashboardData,
  fragment as dashboardDataFragment,
} from "@/components/dashboard/Dashboard";
import { DashboardLayouts } from "@/components/dashboard/types";
import Layout from "@/components/Layout";
import { dashboardFragment } from "@/graphql/fragments";
import { Dashboard } from "@/graphql/schema";
import { addApolloState, initializeApollo } from "@/lib/apollo/apolloClient";
import { gql, useMutation, useQuery } from "@apollo/client";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NativeSelect from "@mui/material/NativeSelect";
import Select from "@mui/material/Select";
import useMediaQuery from "@mui/material/useMediaQuery";
import { isEmpty } from "lodash";
import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useEffect, useState } from "react";

const DEFAULT_LAYOUTS: DashboardLayouts = {
  xs: [
    { i: "calendar", x: 0, y: 0, w: 4, h: 6, minW: 2, minH: 4, resizeHandles: ["se", "sw"] },
    { i: "habits", x: 0, y: 1, w: 4, h: 3, minH: 2, resizeHandles: ["se", "sw"] },
    { i: "identities", x: 0, y: 2, w: 4, h: 1, minH: 2, resizeHandles: ["se", "sw"] },
    { i: "values", x: 0, y: 3, w: 4, h: 2, minH: 2, resizeHandles: ["se", "sw"] },
    { i: "topics", x: 0, y: 4, w: 4, h: 2, minH: 2, resizeHandles: ["se", "sw"] },
  ],
  sm: [
    { i: "calendar", x: 0, y: 0, w: 4, h: 10, minW: 2, minH: 4, resizeHandles: ["se", "sw"] },
    { i: "habits", x: 6, y: 3, w: 2, h: 6, minH: 2, resizeHandles: ["se", "sw"] },
    { i: "identities", x: 9, y: 4, w: 2, h: 2, minH: 2, resizeHandles: ["se", "sw"] },
    { i: "values", x: 6, y: 5, w: 2, h: 2, minH: 2, resizeHandles: ["se", "sw"] },
    { i: "topics", x: 9, y: 6, w: 2, h: 2, minH: 2, resizeHandles: ["se", "sw"] },
  ],
  md: [
    { i: "calendar", x: 0, y: 0, w: 6, h: 10, minW: 2, minH: 4, resizeHandles: ["se", "sw"] },
    { i: "habits", x: 6, y: 0, w: 3, h: 6, minH: 2, resizeHandles: ["se", "sw"] },
    { i: "identities", x: 9, y: 0, w: 3, h: 2, minH: 2, resizeHandles: ["se", "sw"] },
    { i: "values", x: 9, y: 2, w: 3, h: 2, minH: 2, resizeHandles: ["se", "sw"] },
    { i: "topics", x: 9, y: 2, w: 3, h: 2, minH: 2, resizeHandles: ["se", "sw"] },
  ],
  lg: [
    { i: "calendar", x: 1, y: 0, w: 8, h: 10, minW: 2, minH: 4, resizeHandles: ["se", "sw"] },
    { i: "habits", x: 9, y: 0, w: 4, h: 6, minH: 2, resizeHandles: ["se", "sw"] },
    { i: "identities", x: 13, y: 2, w: 4, h: 2, resizeHandles: ["se", "sw"] },
    { i: "values", x: 13, y: 3, w: 4, h: 2, minH: 2, resizeHandles: ["se", "sw"] },
    { i: "topics", x: 13, y: 4, w: 4, h: 2, minH: 2, resizeHandles: ["se", "sw"] },
  ],
  xl: [
    { i: "calendar", x: 1, y: 0, w: 8, h: 10, minW: 2, minH: 4, resizeHandles: ["se", "sw"] },
    { i: "habits", x: 9, y: 0, w: 4, h: 10, minH: 2, resizeHandles: ["se", "sw"] },
    { i: "identities", x: 13, y: 2, w: 4, h: 2, resizeHandles: ["se", "sw"] },
    { i: "values", x: 13, y: 3, w: 4, h: 2, minH: 2, resizeHandles: ["se", "sw"] },
    { i: "topics", x: 13, y: 4, w: 4, h: 2, minH: 2, resizeHandles: ["se", "sw"] },
  ],
};

interface DashboardPageProps {
  session: Session;
  layouts: DashboardLayouts;
}

const CREATE_DASHBOARD = gql`
  mutation CreateDashboard($data: DashboardCreateInput!) {
    createDashboard(data: $data) {
      ...DashboardFragment
    }
  }
  ${dashboardFragment}
`;

const QUERY = gql`
  query DashboardPage($userId: String!) {
    ...DashboardData
    dashboards(where: { userId: { equals: $userId } }) {
      ...DashboardFragment
    }
  }
  ${dashboardDataFragment}
  ${dashboardFragment}
`;

const TOP_BAR_HEIGHT = "3rem";

interface DashboardPageData extends DashboardData {
  dashboards: Dashboard[];
}

const DashboardPage: NextPage<DashboardPageProps> = (props: DashboardPageProps) => {
  const { data: session } = useSession();
  const {
    loading: loadingData,
    error,
    data,
  } = useQuery<DashboardPageData>(QUERY, {
    variables: {
      userId: session?.user?.id,
    },
  });
  const [createDashboard, { loading: loadingCreateDashboard }] = useMutation(CREATE_DASHBOARD, {
    update(cache, { data }) {
      const { createDashboard } = data || {};
      if (createDashboard) {
        cache.modify({
          fields: {
            dashboards(existingDashboards = []) {
              const newDashboardRef = cache.writeFragment({
                data: createDashboard,
                fragment: gql`
                  fragment NewDashboard on Dashboard {
                    ...DashboardFragment
                  }
                  ${dashboardFragment}
                `,
                fragmentName: "NewDashboard",
              });
              return [...existingDashboards, newDashboardRef];
            },
          },
        });
      }
    },
  });
  const loading = loadingData || loadingCreateDashboard;
  const { dashboards, ...dashboardData } = data || {};
  const defaultDashboard = dashboards?.find((dashboard) => dashboard.isDefault);
  const [selectedDashboard, setSelectedDashboard] = useState<Dashboard | null>(
    defaultDashboard || dashboards?.[0] || null
  );
  const layouts = selectedDashboard?.layouts ? JSON.parse(selectedDashboard.layouts) : undefined;
  const [editing, setEditing] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");
  useEffect(() => {
    if (data && session?.user?.id && !dashboards?.length) {
      createDashboard({
        variables: {
          data: {
            name: "Default Dashboard",
            isDefault: true,
            layouts: JSON.stringify(DEFAULT_LAYOUTS),
            user: { connect: { id: session.user.id } },
          },
        },
      });
      // .then((response) => {
      //   setSelectedDashboard(defaultDashboard || dashboards[0]);
      // });
    }
  }, [data, dashboards, createDashboard, session]);
  if (!data || isEmpty(dashboardData)) return null;
  // console.log(">>> layouts", typeof selectedDashboard?.layouts, selectedDashboard?.layouts);
  return (
    <Layout>
      <NextSeo
        title={"Dashboard"}
        canonical={"/app/dashboard"}
        description={"Be your best self."}
        noindex
        nofollow
      />
      {(!dashboards?.length && (
        <Box display="flex" justifyContent="center" alignItems="center" height="90%">
          <p>{"Initializing dashboard..."}</p>
        </Box>
      )) || (
        <Box display="flex" paddingTop="0.8rem" paddingX="0.75rem" height={TOP_BAR_HEIGHT}>
          <Box flexGrow={1} paddingX="0.75rem">
            {editing ? (
              <TextField
                variant="standard"
                value={"Default Dashboard"}
                onChange={() => {
                  console.log("onChange");
                }}
              />
            ) : isMobile ? (
              <NativeSelect
                defaultValue={"Default Dashboard"}
                inputProps={{
                  name: "dashboard",
                  id: "uncontrolled-dashboard",
                }}
              >
                <option value={"Default Dashboard"}>Default Dashboard</option>
              </NativeSelect>
            ) : (
              <Select
                value="Default Dashboard"
                SelectDisplayProps={{ style: { paddingTop: "0.4rem", paddingBottom: "0.4rem" } }}
              >
                <MenuItem value="Default Dashboard">Default Dashboard</MenuItem>
                <MenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("TODO: Add new dashboard");
                  }}
                >
                  <AddIcon /> New dashboard
                </MenuItem>
              </Select>
            )}
          </Box>
          {editing ? (
            <IconButton
              onClick={() => {
                setEditing(false);
              }}
            >
              <DoneIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setEditing(true);
              }}
            >
              <ModeEditIcon />
            </IconButton>
          )}
          <IconButton
            id="menu-button-x"
            onClick={(e) => {
              console.log(
                "Open dropdown for renaming, sharing, creating new dashboard, viewing all dashboards, etc."
              );
              setMenuAnchorEl(e.currentTarget);
              setMenuOpen(true);
            }}
          >
            <MoreHorizIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchorEl}
            open={menuOpen}
            onClose={() => {
              setMenuOpen(false);
            }}
            MenuListProps={{
              "aria-labelledby": "menu-button-x",
            }}
            keepMounted
          >
            <Link href="/app/routines">
              <a>
                <MenuItem>Routines</MenuItem>
              </a>
            </Link>
            <MenuItem
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Close
            </MenuItem>
          </Menu>
        </Box>
      )}
      {!!layouts && !isEmpty(dashboardData) && (
        <DashboardViewer
          data={dashboardData as DashboardData}
          loading={loading}
          error={error}
          layouts={layouts}
          setLayouts={(layouts) => {
            console.log("Modify dashboard layouts", layouts);
          }}
          editing={editing}
          session={session}
          height={`calc(100% - ${TOP_BAR_HEIGHT})`}
        />
      )}
    </Layout>
  );
};
export default DashboardPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const session = await getSession({ req: context.req });
  if (!session?.user?.id) {
    return {
      redirect: {
        destination: `/auth/signin?callbackUrl=/app/dashboard`,
        permanent: false,
      },
    };
  }
  await apolloClient
    .query({
      query: QUERY,
      variables: {
        userId: session?.user?.id,
        date: new Date().toISOString(),
      },
    })
    // .then((response) => {
    //   console.log("Dashboard page data:", response.data.dashboards);
    // })
    .catch((e) => {
      if (e.networkError?.result?.errors) {
        e.networkError.result.errors.forEach(
          (error: {
            message: string;
            extensions: { code: string; exception: { stacktrace: string[] } };
          }) => {
            console.error(error.message);
            console.log(error.extensions.exception.stacktrace.join("\n"), { depth: null });
          }
        );
      } else {
        console.error(e);
      }
    });
  const props: DashboardPageProps = {
    layouts: DEFAULT_LAYOUTS,
    session,
  };
  return addApolloState(apolloClient, { props });
};
