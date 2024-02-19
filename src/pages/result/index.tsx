// css, 컴포넌트, 상수, 타입
import { S } from "./style";
import Board from "./board/index";
import Button from "../../components/common/button";
import Toggle from "../../components/common/toggle";
import { TBooleanObj } from "../../types/type";
//
import { useState } from "react";

export default function Result(): JSX.Element {
  const [toggle, setToggle] = useState<TBooleanObj>({});
  const history = JSON.parse(localStorage.getItem("history")) || [];
  const handleToggle = (id: string) => {
    setToggle(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <S.Container>
      <S.Title>게임 결과</S.Title>
      <S.Result>
        {history.map(content => {
          return (
            <S.BoardContainer key={content.id}>
              <Toggle
                text={content.time}
                onclick={() => handleToggle(content.id)}
              />
              {toggle[content.id] && (
                <div>
                  <S.Winner>{content.winner}</S.Winner>
                  <Board
                    squares={content.history}
                    boardSize={content.boardSize}
                    setting={content.setting}
                    moveNum={content.moveNum}
                  />
                </div>
              )}
            </S.BoardContainer>
          );
        })}
      </S.Result>
      <Button text="게임 다시 시작하기" path="/" />
    </S.Container>
  );
}
