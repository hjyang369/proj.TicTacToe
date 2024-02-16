import Toggle from "../../../components/common/toggle";
import { S } from "./style";

type playerProps = {
  playerName: string;
  color: string;
  pattern: string;
  number: number;
};

export default function Player({
  playerName,
  color,
  pattern,
  number,
}: playerProps) {
  const plateOption = [
    { text: "마크 모양 : ", id: 1, mark: pattern },
    { text: "마크 색깔 : ", id: 2, mark: color },
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
              <span>{option.mark}</span>
            </div>
          );
        })}
      </S.Plate>
      <Toggle text={`${playerName} 무르기`} width="130px" />
    </S.Container>
  );
}
