/** @jsxImportSource @emotion/react */
import { Header } from "../../components/Header/Header";
import styles from "./Dashboard.styles";

export const DashboardLayout = () => {
  // DRAW
  return (
    <div css={styles.container}>
      <Header />
      <div css={styles.contentContainer}></div>
    </div>
  );
};
