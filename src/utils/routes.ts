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

const authRoutes = {
  AUTH: {
    path: "/auth/*",
    navigatePath: "/auth",
  } as RouteData,
};

const adminRoutes = {
  DASHBOARD: {
    path: "/auth/*",
    navigatePath: "/auth",
  } as RouteData,
};

export const routes = {
  ...authRoutes,
  FALLBACK: {
    path: "/*",
    navigatePath: "/*",
  } as RouteData,
  NOT_FOUND: {
    path: "/notfound",
    navigatePath: "/notfound",
  } as RouteData,
};
