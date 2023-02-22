import { css } from "@emotion/react";
import { ComponentStyle } from "types/commonTypes";

export default {
  container: {
    style: css`
      width: 100%;
      height: 100%;
      padding: 0px 10px;
      display: grid;
      grid-template-columns: 150px 1fr;
      grid-template-rows: 1fr;
    `,
    logoSpan: {
      style: css`
        font-family: "Poiret One";
        font-size: 36px; // matches the 150px grid column size
      `,
    },
    actionsContainer: {
      style: css`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      `,
      languageSelectorContainer: {
        style: css`
          height: 100%;
          width: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
        `,
      },
    },
  },
} satisfies ComponentStyle;
