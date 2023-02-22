import { Box, Tab, Tabs } from "@mui/material";
import { ReactElement } from "react";
import { I8nAndMessageProps } from "types/commonTypes";
import { useTranslatedString } from "utils/hooks/useTranslatedString";
import styles from "./BottomTabsLayout.styles";

interface Tab {
  title: I8nAndMessageProps;
  content: ReactElement;
}

interface BottomTabsLayoutProps {
  tabs: Tab[];
}

export const BottomTabsLayout = (props: BottomTabsLayoutProps) => {
  // PROPS
  const { tabs } = props;

  // DRAW
  return (
    <div css={styles.container.style}>
      {tabs.map((tabData, index) => {
        // DATA
        const { content } = tabData;

        // DRAW
        return (
          <div
            key={index}
            role="tabpanel"
            hidden={0 !== index}
            id={`full-width-tabpanel-${index}`}
          >
            {0 === index ? content : null}
          </div>
        );
      })}
      <div css={styles.container.tabsContainer.style}>
        <Tabs
          value={0}
          onChange={() => null}
          sx={{
            ".MuiTabs-indicator": {
              top: 0,
            },
          }}
        >
          {tabs.map((tabData) => {
            // DATA
            const { title } = tabData;

            // VARIABLES
            const tabTitleString = useTranslatedString(title);

            // DRAW
            return (
              <Tab
                key={tabTitleString}
                component="a"
                href="/dashboard"
                onClick={(
                  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ) => {
                  event.preventDefault();
                }}
                label={tabTitleString}
              />
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};
