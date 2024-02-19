import { styled } from "styled-components";

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding-bottom: 150px;
    @media (max-width: 430px) {
      padding-bottom: 80px;
    }
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
