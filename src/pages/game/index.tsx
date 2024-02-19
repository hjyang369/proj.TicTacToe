// css, 컴포넌트, 상수, 타입
import { S } from "./style";
import Board from "../../components/board";
import Button from "../../components/common/button";
import Player from "./player";
//
import { useState } from "react";
import { useAtomValue } from "jotai";
import { playerOrderAtom, settingAtom } from "../../store/atom";
import { calculateWinner, currentTime } from "../../modules/function";

export default function Game(): JSX.Element {
  const setting = useAtomValue(settingAtom);
  const boardSize = Number(setting.boardSize.slice(0, 1));
  const rowOfRows = boardSize * boardSize;
  const playerOrder = useAtomValue(playerOrderAtom);
  const [history, setHistory] = useState([Array(rowOfRows).fill("")]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  const [remainingTime, setRemainingTime] = useState({
    player1: 3,
    player2: 3,
  });
  const winner = calculateWinner(
    currentSquares,
    boardSize,
    setting.winCondition,
  );
  const isFull = currentSquares.filter(mark => mark === "").length === 0;
  const isFinished = !!winner || (isFull && currentMove > 0);
  const [moveNum, setMoveNum] = useState(Array(rowOfRows).fill(undefined));

  const handleHistory = nextSquares => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const handlePlay = (i: number) => {
    if (
      currentSquares[i] ||
      calculateWinner(currentSquares, boardSize, setting.winCondition)
    ) {
      return;
    }
    const nextSquares = currentSquares.slice();
    const moveSquares = moveNum.slice();
    if (xIsNext) {
      nextSquares[i] = setting[`${playerOrder.first}Pattern`];
    } else {
      nextSquares[i] = setting[`${playerOrder.second}Pattern`];
    }
    moveSquares[i] = currentMove + 1;
    handleHistory(nextSquares);
    setMoveNum(moveSquares);
  };

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (isFull && currentMove > 0) {
    status = "무승부";
  } else {
    status =
      "현재 마크 놓을 플레이어 : " +
      (xIsNext ? playerOrder.first : playerOrder.second);
  }

  const minusMove = (player, time) => {
    if (currentMove === 0) {
      return alert("게임 시작 전입니다. 게임 시작 후 무르기를 해주세요.");
    }
    if (time === 0) {
      return alert("무르기 횟수를 모두 사용하셨습니다.");
    }
    if (winner) {
      return alert("이미 게임이 끝나서 무르기를 할 수 없습니다.");
    }
    setCurrentMove(prev => prev - 1);
    setRemainingTime(prevState => ({
      ...prevState,
      [player]: prevState[player] - 1,
    }));
  };

  const saveGame = () => {
    const prev = JSON.parse(localStorage.getItem("history")) || [];
    const newHistory = [
      ...prev,
      {
        id: new Date(),
        history: history,
        time: currentTime,
        boardSize: boardSize,
        moveNum: moveNum,
        setting: setting,
        winner: status,
      },
    ];
    localStorage.setItem("history", JSON.stringify(newHistory));
  };

  return (
    <S.Container>
      <S.Title>{status}</S.Title>
      <S.BoardContainer>
        <div>
          <Board
            squares={currentSquares}
            handlePlay={handlePlay}
            boardSize={boardSize}
          />
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
          {isFinished ? (
            <Button
              text="게임 저장하기"
              saveGame={saveGame}
              path="/result"
              width="309px"
            />
          ) : (
            <Button text="게임 다시 시작하기" path="/" width="309px" />
          )}
        </S.Settings>
      </S.BoardContainer>
    </S.Container>
  );
}
