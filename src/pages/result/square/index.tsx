import { TSelectValue } from "../../../types/type";
import { S } from "./style";

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
    color = setting.player1Color;
  } else if (value === setting.player2Pattern) {
    color = setting.player2Color;
  }

  return (
    <S.Square $color={color}>
      {value}
      <br />({moveNum}번째)
    </S.Square>
  );
}
