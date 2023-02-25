import { Icon } from "@iconify/react";
import {
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  PaperProps,
  SxProps,
  Theme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { I8nAndMessageProps } from "types/commonTypes";
import { useTranslatedString } from "utils/hooks/useTranslatedString";
import { routes } from "utils/routes";

interface SideNavDataItem {
  id: string;
  title: I8nAndMessageProps;
  selected: boolean;
  iconKey?: string;
  path: string;
  children?: (Omit<SideNavDataItem, "children" | "iconKey"> &
    Required<Pick<SideNavDataItem, "iconKey">>)[];
}

const sideNavData: SideNavDataItem[] = [
  {
    id: "admin-panel",
    title: {
      i8nKey: "I18N_ADMIN_PANEL",
    },
    selected: false,
    path: routes.DASHBOARD_ADMIN_PROFILES.navigatePath,
    iconKey: "material-symbols:admin-panel-settings",
    children: [
      {
        id: "profiles",
        title: {
          i8nKey: "I18N_PROFILES",
        },
        selected: false,
        path: routes.DASHBOARD_ADMIN_PROFILES.navigatePath,
        iconKey: "fluent:folder-people-20-filled",
      },
      {
        id: "employees",
        title: {
          i8nKey: "I18N_EMPLOYEES",
        },
        selected: false,
        path: routes.DASHBOARD_ADMIN_EMPLOYEES.navigatePath,
        iconKey: "mdi:users-group",
      },
      {
        id: "templates",
        title: {
          i8nKey: "I18N_TEMPLATES",
        },
        selected: false,
        path: routes.DASHBOARD_ADMIN_TEMPLATES.navigatePath,
        iconKey: "tabler:template",
      },
    ],
  },
];

const SideNavList = () => {
  // HOOKS
  const navigate = useNavigate();

  // HANDLERS
  const onClickHandler = (path: string) => {
    navigate(path);
  };

  // DRAW
  return (
    <List>
      {sideNavData.map((sideNavDataItem) => {
        // DATA
        const { id, title, selected, children, path } = sideNavDataItem;

        // VARIABLES
        const titleString = useTranslatedString(title);

        // HANDLERS

        // DRAW
        return (
          <>
            <ListItem key={id} disablePadding>
              <ListItemButton
                component="a"
                href="/dashboard"
                onClick={() => onClickHandler(path)}
                selected={selected}
              >
                <ListItemText primary={titleString} />
              </ListItemButton>
            </ListItem>
            {!!children ? (
              <Collapse in={true} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {children.map((childItem) => {
                    // DATA
                    const {
                      iconKey: childIconKey,
                      id: childId,
                      selected: childSelected,
                      title: childTitle,
                      path: childPath,
                    } = childItem;

                    // VARIABLES
                    const childTitleString = useTranslatedString(childTitle);

                    // DRAW
                    return (
                      <ListItemButton
                        key={childId}
                        sx={{ pl: 4 }}
                        onClick={() => onClickHandler(childPath)}
                        selected={childSelected}
                      >
                        <ListItemIcon>
                          <Icon icon={childIconKey} height={30} />
                        </ListItemIcon>
                        <ListItemText primary={childTitleString} />
                      </ListItemButton>
                    );
                  })}
                </List>
              </Collapse>
            ) : null}
          </>
        );
      })}
    </List>
  );
};

export const SideNav = () => {
  // COMPONENT PROPS
  const drawerSX: SxProps<Theme> = {
    width: "100%",
    height: "100%",
  };
  const paperProps: Partial<PaperProps<"div", {}>> = {
    style: {
      position: "static",
    },
  };

  // DRAW
  return (
    <Drawer variant="permanent" PaperProps={paperProps} sx={drawerSX}>
      <SideNavList />
    </Drawer>
  );
};
