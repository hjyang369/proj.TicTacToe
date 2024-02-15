import { styled } from "styled-components";

export const S = {
  Button: styled.button`
    border: 1px solid ${props => props.theme.mainColor};
    background-color: ${props => props.theme.mainColor};
    font-size: 23px;
    box-shadow: 0px 5px 0px 0px #a66615;
    display: block;
    position: relative;
    float: left;
    width: 120px;
    padding: 0;
    margin: 10px 20px 10px 0;
    font-weight: 600;
    text-align: center;
    line-height: 50px;
    color: #fff;
    border-radius: 5px;
    transition: all 0.2s;
    width: 100%;
    &:hover {
      color: #fff;
      box-shadow: 0px 0px 0px 0px #a66615;
      margin-top: 15px;
      margin-bottom: 5px;
    }
  `,
};
