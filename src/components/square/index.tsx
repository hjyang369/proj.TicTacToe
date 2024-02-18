import { useAtomValue } from "jotai";
import { settingAtom } from "../../store/atom";
import { S } from "./style";
type squareProps = {
  value: string;
  handleClick: () => void;
};
export default function Square({
  value,
  handleClick,
}: squareProps): JSX.Element {
  const setting = useAtomValue(settingAtom);

  let color;
  if (value === setting.player1Pattern) {
    color = setting.player1Color;
  } else if (value === setting.player2Pattern) {
    color = setting.player2Color;
  }

  return (
    <S.Square onClick={handleClick} $color={color}>
      {value}
    </S.Square>
  );
}
