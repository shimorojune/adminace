import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

interface SideNavProps {}

export const SideNav = (props: SideNavProps) => {
  // PROPS
  const {} = props;

  // DRAW
  return (
    <Drawer variant="permanent" open={true}>
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: "initial",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 3,
                justifyContent: "center",
              }}
            >
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
            </ListItemIcon>
            <ListItemText primary={"Data"} sx={{ opacity: 1 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};
