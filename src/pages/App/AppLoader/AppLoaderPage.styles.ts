import { css } from "@emotion/react";
import { ComponentStyle } from "types/commonTypes";

export default {
  container: {
    style: css`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-self: center;
    `,
    loaderContainer: {
      style: css`
        margin-top: auto;
        margin-bottom: auto;
      `,
    },
  },
} satisfies ComponentStyle;
