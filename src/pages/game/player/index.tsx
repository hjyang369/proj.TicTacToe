// css, 컴포넌트, 상수, 타입
import { S } from "./style";
import Toggle from "../../../components/common/toggle";
import { alertMessage, colorChip } from "../../../modules/constants";
import { TNumberObj, TPlateOption } from "../../../types/type";
//
import { useState } from "react";
import { useAtomValue } from "jotai";
import { settingAtom } from "../../../store/atom";

type playerProps = {
  playerName: string;
  currentMove: number;
  winner: string | null;
  setCurrentMove: React.Dispatch<React.SetStateAction<number>>;
};

export default function Player({
  playerName,
  currentMove,
  winner,
  setCurrentMove,
}: playerProps): JSX.Element {
  const setting = useAtomValue(settingAtom);
  const { beforeStartAlert, runOutAlert, finishedAlert } = alertMessage;
  const [remainingTime, setRemainingTime] = useState<TNumberObj>({
    player1: 3,
    player2: 3,
  });

  const plateOption: TPlateOption[] = [
    {
      text: "마크 모양 : ",
      id: 1,
      mark: setting[`${playerName}Pattern`].toString(),
    },
    {
      text: "마크 색깔 : ",
      id: 2,
      mark: setting[`${playerName}Color`].toString(),
    },
    { text: "남은 무르기 : ", id: 3, mark: `${remainingTime[playerName]}회` },
  ];

  const minusMove = (player: string, time: number) => {
    if (currentMove === 0) {
      return alert(beforeStartAlert);
    }
    if (time === 0) {
      return alert(runOutAlert);
    }
    if (winner) {
      return alert(finishedAlert);
    }
    setCurrentMove(prev => prev - 1);
    setRemainingTime(prevState => ({
      ...prevState,
      [player]: prevState[player] - 1,
    }));
  };

  return (
    <S.Container>
      <S.PlayerName>{playerName}</S.PlayerName>
      <S.Plate>
        {plateOption.map(option => {
          return (
            <div key={option.id}>
              <span>{option.text}</span>
              {option.id === 3 ? (
                <span>{option.mark}</span>
              ) : (
                <S.MarkColor $color={colorChip[setting[`${playerName}Color`]]}>
                  {option.mark}
                </S.MarkColor>
              )}
            </div>
          );
        })}
      </S.Plate>
      <Toggle
        text={`${playerName} 무르기`}
        width="135px"
        onclick={() => minusMove(playerName, remainingTime[playerName])}
      />
    </S.Container>
  );
}
