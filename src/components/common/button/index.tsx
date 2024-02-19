// css, 컴포넌트, 상수, 타입
import { S } from "./style";
//
import { useNavigate } from "react-router";

type buttonProps = {
  text: string;
  width?: string;
  path: string;
  handelGame?: () => void; // 게임 설정 및 게임 결과 저장 함수
};

export default function Button({
  text,
  width,
  path,
  handelGame,
}: buttonProps): JSX.Element {
  const navigate = useNavigate();

  const moveToPage = (path: string) => {
    navigate(path);
  };

  // 게임 설정 및 게임 결과 저장 함수 있으면 실행 후 페이지 이동
  const onclick = () => {
    if (handelGame) {
      handelGame();
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
