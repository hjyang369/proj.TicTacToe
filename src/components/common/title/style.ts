import { styled } from "styled-components";

export const S = {
  Title: styled.h1<{
    $isMain?: boolean;
  }>`
    font-weight: 700;
    font-size: 40px;
    color: ${props => props.theme.mainColor};
    margin-top: 150px;
    margin-bottom: ${props => (props.$isMain ? "200px" : "70px")};
    @media (max-width: 430px) {
      font-size: 26px;
      font-weight: 800;
      margin-top: 80px;
      margin-bottom: ${props => (props.$isMain ? "250px" : "50px")};
    }
  `,
};
