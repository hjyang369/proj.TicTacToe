import { styled } from "styled-components";

export const S = {
  Row: styled.div`
    &::after {
      clear: both;
      content: "";
      display: table;
    }
  `,
};
