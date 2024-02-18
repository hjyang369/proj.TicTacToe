import { S } from "./style";

type toggleProps = {
  text: string;
  width?: string;
  onclick?: () => void;
};
export default function Toggle({
  text,
  width,
  onclick,
}: toggleProps): JSX.Element {
  return (
    <S.Container>
      <S.Button onClick={onclick} $width={width}>
        {text}
      </S.Button>
    </S.Container>
  );
}
