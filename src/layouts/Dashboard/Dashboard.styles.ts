import { css } from "@emotion/react";
import { ComponentStyle } from "types/commonTypes";

export default {
  container: {
    style: css`
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 60px 1fr;
    `,
    contentContainer: {
      style: css`
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 240px 1fr;
        grid-template-rows: 1fr;
      `,
      content: {
        style: css`
          width: 100%;
          height: 100%;
          padding: 10px;
          margin: auto;
          overflow: hidden;
          max-width: 1248px;
        `,
      },
    },
  },
} satisfies ComponentStyle;
