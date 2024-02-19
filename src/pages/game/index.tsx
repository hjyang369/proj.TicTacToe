// css, 컴포넌트, 상수, 타입
import { S } from "./style";
import Board from "./board";
import Button from "../../components/common/button";
import Player from "./player";
import Title from "../../components/common/title";
import { THistory } from "../../types/type";
//
import { useState } from "react";
import { useAtomValue } from "jotai";
import { playerOrderAtom, settingAtom } from "../../store/atom";
import { calculateWinner, currentTime } from "../../modules/function";

export default function Game(): JSX.Element {
  const setting = useAtomValue(settingAtom);
  const playerOrder = useAtomValue(playerOrderAtom);
  const boardSize: number = Number(setting.boardSize.slice(0, 1));
  const rowOfRows: number = boardSize * boardSize;
  const [history, setHistory] = useState<string[][]>([
    Array(rowOfRows).fill(""),
  ]);
  const [moveNum, setMoveNum] = useState<number[]>(
    Array(rowOfRows).fill(undefined),
  );
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares: string[] = history[currentMove];
  const isNext: boolean = currentMove % 2 === 0;

  const winner: string | null = calculateWinner(
    currentSquares,
    boardSize,
    setting.winCondition,
  );

  const isFull: boolean =
    currentSquares.filter(mark => mark === "").length === 0;
  const isFinished: boolean = !!winner || (isFull && currentMove > 0);

  const handleHistory = (nextSquares: string[]) => {
    const nextHistory: string[][] = [
      ...history.slice(0, currentMove + 1),
      nextSquares,
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  let status: string;
  if (winner) {
    status = "Winner: " + winner;
  } else if (isFull && currentMove > 0) {
    status = "무승부";
  } else {
    status =
      "현재 마크 놓을 플레이어 : " +
      (isNext ? playerOrder.first : playerOrder.second);
  }

  const saveGame = () => {
    const historyString = localStorage.getItem("history");
    const prev: THistory[] = historyString ? JSON.parse(historyString) : [];
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
      <Title value={status} margin="70px" />
      <S.BoardContainer>
        <div>
          <Board
            squares={currentSquares}
            handleHistory={handleHistory}
            boardSize={boardSize}
            moveNum={moveNum}
            setMoveNum={setMoveNum}
            isNext={isNext}
            currentMove={currentMove}
          />
        </div>
        <S.Settings>
          <S.Players>
            <Player
              playerName="player1"
              currentMove={currentMove}
              winner={winner}
              setCurrentMove={setCurrentMove}
            />
            <Player
              playerName="player2"
              currentMove={currentMove}
              winner={winner}
              setCurrentMove={setCurrentMove}
            />
          </S.Players>
          {isFinished ? (
            <Button
              text="게임 저장하기"
              handelGame={saveGame}
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
