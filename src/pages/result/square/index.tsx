import { S } from "./style";
import { colorChip } from "../../../modules/constants";
import { TSelectValue } from "../../../types/type";

type squareProps = {
  value: string;
  setting: TSelectValue;
  moveNum: number;
  width: boolean;
};

export default function Square({
  value,
  setting,
  moveNum,
  width,
}: squareProps): JSX.Element {
  //동적으로 유저가 설정한 색깔 지정
  let color: string | undefined;
  if (value === setting.player1Pattern) {
    color = colorChip[setting.player1Color];
  } else if (value === setting.player2Pattern) {
    color = colorChip[setting.player2Color];
  }

  return (
    <S.Square $color={color} $width={width}>
      <span>{value}</span>
      <span>({moveNum}번째)</span>
    </S.Square>
  );
}
