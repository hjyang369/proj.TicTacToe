import { useNavigate } from "react-router";
import { S } from "./style";

type buttonProps = {
  text: string;
  width?: string;
  path?: string;
  startGame?: () => void;
};
export default function Button({ text, width, path, startGame }: buttonProps) {
  const navigate = useNavigate();

  const moveToPage = (path: string) => {
    navigate(path);
  };

  const onclick = () => {
    if (path) {
      moveToPage(path);
    } else {
      startGame && startGame();
    }
  };

  return (
    <S.Container>
      <S.Button onClick={onclick} $width={width}>
        {text}
      </S.Button>
    </S.Container>
  );
}
