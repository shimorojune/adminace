import { css } from "@emotion/react";

export default {
  container: css`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 60px 1fr;
    grid-template-columns: 1fr;
  `,
  layoutHeaderContainer: css`
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
  layoutHeaderButtonsContainer: css`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
  `,
};
