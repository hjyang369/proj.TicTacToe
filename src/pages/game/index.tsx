import { useAtomValue } from "jotai";
import Board from "../../components/board";
import Button from "../../components/common/button";
import { S } from "./style";
import { settingAtom } from "../../store/atom";
import Player from "./player";
import { useState } from "react";
import { calculateWinner } from "../../modules/fuction";

export default function Game(): JSX.Element {
  const setting = useAtomValue(settingAtom);
  const [history, setHistory] = useState([Array(9).fill("")]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  const [remainingTime, setRemainingTime] = useState({
    player1: 3,
    player2: 3,
  });

  console.log(currentSquares);
  console.log(setting.startPlayer);

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

  const winner = calculateWinner(currentSquares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "현재 마크 놓을 플레이어 : " + (xIsNext ? "X" : "O");
  }
  const minusMove = (player, time) => {
    if (currentMove === 0) {
      return alert("게임 시작 전입니다. 게임 시작 후 무르기를 해주세요.");
    }
    if (time === 0) {
      return alert("무르기 횟수를 모두 사용하셨습니다.");
    }
    setCurrentMove(prev => prev - 1);
    setRemainingTime(prevState => ({
      ...prevState,
      [player]: prevState[player] - 1,
    }));
  };

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
              playerName="player1"
              number={remainingTime.player1}
              minusMove={minusMove}
            />
            <Player
              playerName="player2"
              number={remainingTime.player2}
              minusMove={minusMove}
            />
          </S.Players>

          <Button text="게임 다시 시작하기" path="/" width="299px" />
          {/* <Button text="게임 저장하기" path="/result" width="282px" /> */}
        </S.Settings>
      </S.BoardContainer>
    </S.Container>
  );
}
