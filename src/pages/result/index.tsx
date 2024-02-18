import { useState } from "react";
import Board from "../../components/board";
import Button from "../../components/common/button";
import Toggle from "../../components/common/toggle";
import { S } from "./style";
import { TBooleanObj } from "../../types/type";

export default function Result(): JSX.Element {
  const [toggle, setToggle] = useState<TBooleanObj>({});
  const history = JSON.parse(localStorage.getItem("history")) || [];

  const handleToggle = (id: string) => {
    setToggle(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <S.Container>
      <S.Title>게임 결과</S.Title>
      {history.map(content => {
        return (
          <S.BoardContainer key={content.id}>
            <Toggle
              text={content.time}
              onclick={() => handleToggle(content.id)}
            />
            {toggle[content.id] && (
              <Board
                squares={content.history}
                handlePlay={null}
                boardSize={content.boardSize}
              />
            )}
          </S.BoardContainer>
        );
      })}

      <Button text="게임 다시 시작하기" path="/" />
    </S.Container>
  );
}
