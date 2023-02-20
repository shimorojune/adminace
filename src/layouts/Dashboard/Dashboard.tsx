/** @jsxImportSource @emotion/react */
import { Header } from "components/Custom/Header/Header";
import { SideNav } from "components/Custom/SideNav/SideNav";
import styles from "./Dashboard.styles";

export const DashboardLayout = () => {
  // DRAW
  return (
    <div css={styles.container}>
      <Header />
      <div css={styles.contentContainer}>
        <SideNav />
        <div css={styles.content}>Hi htere</div>
      </div>
    </div>
  );
};
