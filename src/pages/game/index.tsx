import { useAtomValue } from "jotai";
import Board from "../../components/board";
import Button from "../../components/common/button";
import { S } from "./style";
import { settingAtom } from "../../store/atom";
import Player from "./player";
import { useState } from "react";
import { calculateWinner } from "../../modules/fuction";

export default function Game() {
  const setting = useAtomValue(settingAtom);
  const [history, setHistory] = useState([Array(9).fill("")]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  const handleHistory = nextSquares => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const handlePlay = (i: number) => {
    if (currentSquares[i] || calculateWinner(currentSquares)) {
      return;
    }
    const nextSquares = currentSquares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    handleHistory(nextSquares);
  };
  const cancelNum = 3;

  const winner = calculateWinner(currentSquares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "현재 마크 놓을 플레이어 : " + (xIsNext ? "X" : "O");
  }

  return (
    <S.Container>
      <S.Title>{status}</S.Title>
      <S.BoardContainer>
        <div>
          <Board squares={currentSquares} handlePlay={handlePlay} />
        </div>
        <S.Settings>
          <S.Players>
            <Player
              playerName="player 1"
              color={setting.player1Color}
              pattern={setting.player1Pattern}
              number={cancelNum}
            />
            <Player
              playerName="player 2"
              color={setting.player2Color}
              pattern={setting.player2Pattern}
              number={cancelNum}
            />
          </S.Players>
          <Button text="게임 다시 시작하기" path="/" width="299px" />
          {/* <Button text="게임 저장하기" path="/result" width="282px" /> */}
        </S.Settings>
      </S.BoardContainer>
    </S.Container>
  );
}
