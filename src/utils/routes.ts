interface RouteData {
  /**
   * Path used in definition of routes.
   * Only contains the delta part of this route.
   */
  path: string;
  /**
   * Path used when navigating to this route.
   * Contains the full path to the route.
   */
  navigatePath: string;
}

const dashboardRoutes = {
  DASHBOARD: {
    path: "/*",
    navigatePath: "/",
  },
  DASHBOARD_ADMIN: {
    path: "/admin/*",
    navigatePath: "/admin",
  },
  DASHBOARD_ADMIN_PROFILES: {
    path: "/admin/profiles",
    navigatePath: "/admin/profiles",
  },
  DASHBOARD_ADMIN_EMPLOYEES: {
    path: "/admin/employees",
    navigatePath: "/admin/employees",
  },
  DASHBOARD_ADMIN_TEMPLATES: {
    path: "/admin/templates",
    navigatePath: "/admin/templates",
  },
} satisfies Record<string, RouteData>;

export const routes = {
  ...dashboardRoutes,
  AUTH: {
    path: "/auth/*",
    navigatePath: "/auth",
  },
  FALLBACK: {
    path: "/*",
    navigatePath: "/*",
  },
  NOT_FOUND: {
    path: "/notfound",
    navigatePath: "/notfound",
  },
} satisfies Record<string, RouteData>;
