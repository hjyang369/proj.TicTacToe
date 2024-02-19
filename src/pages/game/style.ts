import { styled } from "styled-components";

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  `,

  Title: styled.h1`
    font-weight: 700;
    font-size: 40px;
    color: ${props => props.theme.mainColor};
    margin: 150px 0 70px 0;
  `,

  BoardContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
  `,

  Settings: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  `,

  Players: styled.div`
    display: flex;
  `,

  Player: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  `,

  PlayerName: styled.span`
    font-size: 20px;
  `,

  Plate: styled.div`
    background-color: #ffaa4066;
    border-radius: 5px;
    padding: 7px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  `,
};
