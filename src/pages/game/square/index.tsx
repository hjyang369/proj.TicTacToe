// css, 컴포넌트, 상수, 타입
import { S } from "./style";
import { colorChip } from "../../../modules/constants";
//
import { useAtomValue } from "jotai";
import { settingAtom } from "../../../store/atom";

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
  const setting = useAtomValue(settingAtom); //유저가 설정한 조건이 저장된 전역 상태

  //동적으로 유저가 설정한 색깔 지정
  let color: string | undefined;
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
