// css, 컴포넌트, 상수, 타입
import { S } from "./style";
import Toggle from "../../../components/common/toggle";
//
import { useAtomValue } from "jotai";
import { settingAtom } from "../../../store/atom";

type playerProps = {
  playerName: string;
  number: number;
  minusMove: (player: string, time: number) => void;
};

export default function Player({
  playerName,
  number,
  minusMove,
}: playerProps): JSX.Element {
  const setting = useAtomValue(settingAtom);
  const plateOption = [
    { text: "마크 모양 : ", id: 1, mark: setting[`${playerName}Pattern`] },
    { text: "마크 색깔 : ", id: 2, mark: setting[`${playerName}Color`] },
    { text: "남은 무르기 : ", id: 3, mark: `${number}회` },
  ];

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
                <S.MarkColor $color={setting[`${playerName}Color`]}>
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
        onclick={() => minusMove(playerName, number)}
      />
    </S.Container>
  );
}
