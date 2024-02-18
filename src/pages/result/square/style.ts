import { styled } from "styled-components";

export const S = {
  Square: styled.div<{
    $color?: string;
  }>`
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 15px;
    font-weight: bold;
    line-height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    text-align: center;
    width: 65px;
    height: 65px;
    color: ${props => (props.$color ? props.$color : "#fff")};
  `,
};
