import { S } from "./style";
import useMove from "../../../hooks/useMove";

type buttonProps = {
  text: string;
  path: string;
  width?: string;
};
export default function Button({ text, path, width }: buttonProps) {
  const { moveToPage } = useMove();
  return (
    <S.Container>
      <S.Button onClick={() => moveToPage(path)} $width={width}>
        {text}
      </S.Button>
    </S.Container>
  );
}
