import { useNavigate } from "react-router";
import { S } from "./style";

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
