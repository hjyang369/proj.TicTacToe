import { styled } from "styled-components";

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
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

  Result: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  `,

  Winner: styled.span`
    display: block;
    font-size: 15px;
    text-align: center;
    font-weight: 700;
    margin: 10px 0;
  `,
};
