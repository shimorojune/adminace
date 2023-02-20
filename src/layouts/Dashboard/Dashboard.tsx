/** @jsxImportSource @emotion/react */
import { Header } from "components/Custom/Header/Header";
import { SideNav } from "components/Custom/SideNav/SideNav";
import { BottomTabsLayout } from "layouts/common/BottomTabsLayout/BottomTabsLayout";
import { HeaderTableLayout } from "layouts/common/HeaderTableLayout/HeaderTableLayout";
import styles from "./Dashboard.styles";

export const Dashboard = () => {
  // DRAW
  return (
    <div css={styles.container}>
      <Header />
      <div css={styles.contentContainer}>
        <SideNav />
        <div css={styles.content}>
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
