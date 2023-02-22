import { css } from "@emotion/react";
import { ComponentStyle } from "types/commonTypes";

export default {
  container: {
    style: css`
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 50px;
      gap: 10px;
    `,
    tabsContainer: {
      style: css`
        width: 100%;
        height: 100%;
      `,
    },
  },
} satisfies ComponentStyle;
