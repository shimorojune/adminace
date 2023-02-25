import { BottomTabsLayout } from "layouts/common/BottomTabsLayout/BottomTabsLayout";
import { HeaderTableLayout } from "layouts/common/HeaderTableLayout/HeaderTableLayout";
import { Header } from "layouts/Dashboard/components/Header/Header";
import { SideNav } from "layouts/Dashboard/components/SideNav/SideNav";
import styles from "./Dashboard.styles";

export const Dashboard = () => {
  // DRAW
  return (
    <div css={styles.container.style}>
      <Header />
      <div css={styles.container.contentContainer.style}>
        <SideNav />
        <div css={styles.container.contentContainer.content.style}>
          <BottomTabsLayout
            tabs={[
              {
                title: {
                  i8nKey: "I18N_INVENTORY",
                },
                content: (
                  <HeaderTableLayout
                    createButtonProps={{
                      title: { i8nKey: "I18N_ADD_SNACK" },
                      onClick: () => null,
                    }}
                    title={{
                      i8nKey: "I18N_SNACKS",
                    }}
                  />
                ),
              },
              {
                title: {
                  i8nKey: "I18N_DISTRIBUTION",
                },
                content: <span>Hi there</span>,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
