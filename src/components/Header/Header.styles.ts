import { css } from "@emotion/react";

export default {
  container: css`
    width: 100%;
    height: 60px;
    padding: 0px 10px;
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-template-rows: 1fr;
  `,
  logoSpan: css`
    font-family: "Poiret One";
    font-size: 36px; // matches the 150px grid column size
  `,
};
