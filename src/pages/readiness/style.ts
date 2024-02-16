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

  SettingContainer: styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 50px;
  `,
  Space: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  `,
  Subject: styled.span`
    font-size: 20px;
  `,
  NumberInput: styled.input`
    width: 50px;
    height: 30px;
  `,
  Selects: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  `,
  Caution: styled.span`
    font-size: 13.8px;
    color: #ff1516;
  `,
};
