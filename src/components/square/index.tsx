// css, 컴포넌트, 상수, 타입
import { S } from "./style";
//
import { useAtomValue } from "jotai";
import { settingAtom } from "../../store/atom";

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
