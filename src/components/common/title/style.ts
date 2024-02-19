import { styled } from "styled-components";

export const S = {
  Title: styled.h1<{
    $margin: string;
    $isMain?: string;
  }>`
    font-weight: 700;
    font-size: 40px;
    color: ${props => props.theme.mainColor};
    margin-top: 150px;
    margin-bottom: ${props => props.$margin};
    @media (max-width: 430px) {
      margin-top: 80px;
      margin-bottom: ${props => (props.$isMain ? props.$isMain : "50px")};
    }
  `,
};
