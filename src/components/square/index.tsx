// css, 컴포넌트, 상수, 타입
import { S } from "./style";
import { colorChip } from "../../modules/constants";
//
import { useAtomValue } from "jotai";
import { settingAtom } from "../../store/atom";

type squareProps = {
  value: string;
  handleClick: () => void;
  width: boolean;
};

export default function Square({
  value,
  handleClick,
  width,
}: squareProps): JSX.Element {
  const setting = useAtomValue(settingAtom);

  let color;
  if (value === setting.player1Pattern) {
    color = colorChip[setting.player1Color];
  } else if (value === setting.player2Pattern) {
    color = colorChip[setting.player2Color];
  }

  return (
    <S.Square onClick={handleClick} $color={color} $width={width}>
      {value}
    </S.Square>
  );
}
