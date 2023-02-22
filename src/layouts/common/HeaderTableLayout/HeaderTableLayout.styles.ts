import { css } from "@emotion/react";
import { ComponentStyle } from "types/commonTypes";

export default {
  container: {
    style: css`
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-rows: 60px 1fr;
      grid-template-columns: 1fr;
    `,
    layoutHeaderContainer: {
      style: css`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          font-weight: 500;
          font-size: 20px;
        }
      `,
      buttonsContainer: {
        style: css`
          height: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 10px;
        `,
      },
    },
    createObjectDrawerContainer: {
      style: css`
        height: 100%;
        width: 400px;
        padding: 10px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 40px 1fr 40px;
        gap: 10px;
      `,
      drawerHeader: {
        style: css`
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-weight: 500;
          font-size: 20px;
        `,
      },
      drawerContent: {
        style: css`
          width: 100%;
          height: 100%;
          overflow: auto;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 10px;
        `,
      },
      drawerFooter: {
        style: css`
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 10px;
        `,
      },
    },
  },
} satisfies ComponentStyle;
