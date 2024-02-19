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
  const setting = useAtomValue(settingAtom); //유저가 설정한 조건이 저장된 전역 상태
  const playerOrder = useAtomValue(playerOrderAtom); // 유저 순서가 저장된 전역 상태
  const boardSize: number = Number(setting.boardSize.slice(0, 1)); //보드 판의 크기
  const rowOfRows: number = boardSize * boardSize; //보드 판의 행, 열 곱한 것
  const [history, setHistory] = useState<string[][]>([
    // 보드판의 배열들을 저장할 history 배열
    Array(rowOfRows).fill(""),
  ]);
  const [moveNum, setMoveNum] = useState<number[]>( // mark가 놓인 숫자가 저장될 배열
    Array(rowOfRows).fill(undefined),
  );
  const [currentMove, setCurrentMove] = useState(0); // 현재 몇번째 마크인지 나타내는 상태
  const currentSquares: string[] = history[currentMove]; // 현재 보드판의 배열
  const isNext: boolean = currentMove % 2 === 0; // 첫번째 플레이어인지 나타내는 값

  const winner: string | null = calculateWinner(
    // 이긴 플레이어
    currentSquares,
    boardSize,
    setting.winCondition,
  );

  const isFull: boolean =
    currentSquares.filter(mark => mark === "").length === 0; // 보드판이 꽉 찼는지 나타내는 값
  const isFinished: boolean = !!winner || (isFull && currentMove > 0); // 만약 이긴 플레이어가 있거나 보드판이 꽉 찼을때는 경기 종료로 인식하는 값

  // 새로운 보드판의 배열을 저장하는 함수
  const handleHistory = (nextSquares: string[]) => {
    //새로운 보드판을 기존의 보드판 history 배열에 저장
    const nextHistory: string[][] = [
      ...history.slice(0, currentMove + 1),
      nextSquares,
    ];
    setHistory(nextHistory);
    // 현재 보드판을 새로운 보드판으로 갱신
    setCurrentMove(nextHistory.length - 1);
  };

  // 경기의 상황을 계산해 현재 마크 놓을 플레이어 및 무승부, 이긴 플레이어 안내 문구를 계산하는 로직
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

  // 게임 종료 시 게임 저장하는 함수
  const saveGame = () => {
    // 로컬스토리지에 저장된 history 배열을 가져와
    const historyString = localStorage.getItem("history");
    const prev: THistory[] = historyString ? JSON.parse(historyString) : [];
    // 새배열과 함께 넣어줌
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
      <Title value={status} />
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
          {/* 게임이 끝나면 저장 함수 호출하고, 게임 시작전 ~ 종료 전까지는 메인페이지로 이동하는 버튼 노출 */}
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
