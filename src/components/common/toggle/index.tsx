import { S } from "./style";

type toggleProps = {
  text: string;
  width?: string;
};
export default function Toggle({ text, width }: toggleProps) {
  return (
    <S.Container>
      <S.Button $width={width}>{text}</S.Button>
    </S.Container>
  );
}
