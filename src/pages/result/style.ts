import { styled } from "styled-components";

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Title: styled.h1`
    font-weight: 700;
    font-size: 40px;
    color: ${props => props.theme.mainColor};
    margin: 150px 0 70px 0;
  `,
  BoardContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};
