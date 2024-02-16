import { styled } from "styled-components";

export const S = {
  Container: styled.div`
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
    width: 130px;
  `,
};
