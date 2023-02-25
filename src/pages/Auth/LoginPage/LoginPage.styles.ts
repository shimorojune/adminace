import { css } from "@emotion/react";
import { ComponentStyle } from "types/commonTypes";

export default {
  container: {
    style: css`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    contentContainer: {
      style: css`
        width: 400px;
        height: fit-content;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 80px 1fr;
        gap: 35px;
      `,
      logoContainer: {
        style: css`
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
        `,
      },
      formContainer: {
        style: css`
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;

          button {
            margin-top: 5px;
          }
        `,
      },
    },
  },
} satisfies ComponentStyle;
