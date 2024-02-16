import { styled } from "styled-components";

export const S = {
  Container: styled.div`
    margin-left: 18px;
  `,

  Button: styled.button<{
    $width?: string;
  }>`
    width: ${props => (props.$width ? props.$width : "200px")};
    border: 1px solid ${props => props.theme.subMainColor};
    background-color: ${props => props.theme.subMainColor};
    font-size: 15px;
    box-shadow: 0px 5px 0px 0px #b1810d;
    display: block;
    position: relative;
    float: left;
    padding: 0;
    margin: 10px 20px 10px 0;
    font-weight: 600;
    text-align: center;
    line-height: 50px;
    color: #fff;
    border-radius: 5px;
    transition: all 0.2s;
    &:hover {
      color: #fff;
      box-shadow: 0px 0px 0px 0px #b1810d;
      margin-top: 15px;
      margin-bottom: 5px;
    }
  `,
};
