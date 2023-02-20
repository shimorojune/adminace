import { css } from "@emotion/react";

export default {
  container: css`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr;
  `,
  headerContainer: css`
    width: 100%;
    height: 100%;
  `,
  contentContainer: css`
    width: 100%;
    height: 100%;
    margin: auto;
    height: 100%;
    overflow: hidden;
  `,
};
