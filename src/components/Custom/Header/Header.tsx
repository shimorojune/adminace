/** @jsxImportSource @emotion/react */
import { AppBar } from "@mui/material";
import styles from "./Header.styles";

export const Header = () => {
  // DRAW
  return (
    <AppBar
      position="static"
      color="transparent"
      style={{
        zIndex: 100,
      }}
    >
      <div css={styles.container}>
        <span css={styles.logoSpan}>adminace</span>
      </div>
    </AppBar>
  );
};
