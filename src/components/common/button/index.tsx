// css, 컴포넌트, 상수, 타입
import { S } from "./style";
//
import { useNavigate } from "react-router";

type buttonProps = {
  text: string;
  width?: string;
  path: string;
  startGame?: () => void;
  saveGame?: () => void;
};

export default function Button({
  text,
  width,
  path,
  startGame,
  saveGame,
}: buttonProps): JSX.Element {
  const navigate = useNavigate();

  const moveToPage = (path: string) => {
    navigate(path);
  };

  const onclick = () => {
    if (startGame) {
      startGame();
    } else if (saveGame) {
      saveGame();
    }
    moveToPage(path);
  };

  return (
    <S.Container>
      <S.Button onClick={onclick} $width={width}>
        {text}
      </S.Button>
    </S.Container>
  );
}
