import { styled } from "styled-components";

export const S = {
  Square: styled.div<{
    $color?: string;
    $width: boolean;
  }>`
    display: flex;
    flex-direction: column;
    background: #fff;
    border: 1px solid #999;
    float: left;
    line-height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    text-align: center;
    width: 65px;
    height: 65px;
    span {
      font-size: 15px;
      line-height: 31px;
      font-weight: bold;
      color: ${props => (props.$color ? props.$color : "#fff")};
    }
    @media (max-width: 430px) {
      width: ${props => (props.$width ? "41px" : "50px")};
      height: ${props => (props.$width ? "50px" : "50px")};
      span {
        line-height: 23px;
        font-size: 10.5px;
      }
    }
  `,
};
