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

export const routes = {
  AUTH: {
    path: "/auth/*",
    navigatePath: "/auth",
  },
  DASHBOARD: {
    path: "/dashboard/*",
    navigatePath: "/dashboard",
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
