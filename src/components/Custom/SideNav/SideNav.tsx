import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
  SxProps,
  Theme,
  PaperProps,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { I8nAndMessageProps } from "types/commonTypes";
import { useTranslatedString } from "utils/hooks/useTranslatedString";

interface SideNavProps {}

interface SideNavDataItem {
  id: string;
  title: I8nAndMessageProps;
  selected: boolean;
  iconKey: string;
}

const sideNavData: SideNavDataItem[] = [
  {
    id: "snacks",
    title: {
      i8nKey: "I18N_SNACKS",
    },
    selected: true,
    iconKey: "material-symbols:food-bank-rounded",
  },
  {
    id: "stationary",
    title: {
      i8nKey: "I18N_STATIONARY",
    },
    selected: false,
    iconKey: "mdi:pencil-ruler",
  },
  {
    id: "admin-panel",
    title: {
      i8nKey: "I18N_ADMIN_PANEL",
    },
    selected: false,
    iconKey: "material-symbols:admin-panel-settings",
  },
];

interface SideNavListProps {}

const SideNavList = (props: SideNavListProps) => {
  // PROPS
  const {} = props;

  // DRAW
  return (
    <List>
      {sideNavData.map((sideNavDataItem) => {
        // DATA
        const { id, title, iconKey, selected } = sideNavDataItem;

        // VARIABLES
        const titleString = useTranslatedString(title);

        // DRAW
        return (
          <ListItem key={id} disablePadding>
            <ListItemButton
              component="a"
              href="/dashboard"
              onClick={(e) => {
                e.preventDefault();
              }}
              selected={selected}
            >
              <ListItemIcon>
                <Icon icon={iconKey} height={30} />
              </ListItemIcon>
              <ListItemText primary={titleString} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export const SideNav = (props: SideNavProps) => {
  // PROPS
  const {} = props;

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
