import { S } from "./style";
import { colorChip } from "../../../modules/constants";
import { TSelectValue } from "../../../types/type";

type squareProps = {
  value: string;
  setting: TSelectValue;
  moveNum: number;
};

export default function Square({
  value,
  setting,
  moveNum,
}: squareProps): JSX.Element {
  let color;
  if (value === setting.player1Pattern) {
    color = colorChip[setting.player1Color];
  } else if (value === setting.player2Pattern) {
    color = colorChip[setting.player2Color];
  }

  return (
    <S.Square $color={color}>
      {value}
      <br />({moveNum}번째)
    </S.Square>
  );
}
