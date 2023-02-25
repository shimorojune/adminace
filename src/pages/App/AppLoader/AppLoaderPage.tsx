import { CircularProgress } from "@mui/material";
import styles from "./AppLoaderPage.styles";

export const AppLoaderPage = () => {
  // DRAW
  return (
    <div css={styles.container.style}>
      <div css={styles.container.loaderContainer.style}>
        <CircularProgress />
      </div>
    </div>
  );
};
