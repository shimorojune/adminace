/** @jsxImportSource @emotion/react */
import { Header } from "../../components/Header/Header";
import "../../utils/i8next/i8next";
import styles from "./App.styles";

export const App = () => {
  // DRAW
  return (
    <div css={styles.container}>
      <Header />
    </div>
  );
};
