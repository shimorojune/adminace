import { css } from "@emotion/react";

export default {
  container: css`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr;
  `,
  contentContainer: css`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: 1fr;
  `,
  content: css`
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: auto;
    overflow: hidden;
    max-width: 1248px;
  `,
};
