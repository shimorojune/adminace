import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { I8nAndMessageProps } from "types/commonTypes";
import { useTranslatedString } from "utils/hooks/useTranslatedString";

interface SideNavProps {}

interface SideNavDataItem {
  id: string;
  title: I8nAndMessageProps;
  iconKey: string;
}

const sideNavData: SideNavDataItem[] = [
  {
    id: "snacks",
    title: {
      i8nKey: "I18N_SNACKS",
    },
    iconKey: "material-symbols:food-bank-rounded",
  },
  {
    id: "stationary",
    title: {
      i8nKey: "I18N_STATIONARY",
    },
    iconKey: "mdi:pencil-ruler",
  },
];

export const SideNav = (props: SideNavProps) => {
  // PROPS
  const {} = props;

  // DRAW
  return (
    <Drawer
      variant="permanent"
      PaperProps={{
        style: {
          position: "static",
        },
      }}
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <List>
        {sideNavData.map((sideNavDataItem) => {
          // DATA
          const { id, title, iconKey } = sideNavDataItem;

          // VARIABLES
          const titleString = useTranslatedString(title);

          // DRAW
          return (
            <ListItem key={id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Icon icon={iconKey} height={30} />
                </ListItemIcon>
                <ListItemText primary={titleString} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};
