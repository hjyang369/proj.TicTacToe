import { styled } from "styled-components";

export const S = {
  Square: styled.button<{
    $color?: string;
    $width: boolean;
  }>`
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 30px;
    font-weight: bold;
    line-height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 50px;
    height: 50px;
    color: ${props => (props.$color ? props.$color : "#fff")};
    @media (max-width: 430px) {
      width: ${props => (props.$width ? "40px" : "50px")};
      height: ${props => (props.$width ? "40px" : "50px")};
    }
  `,
};
