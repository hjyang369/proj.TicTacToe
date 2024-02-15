import { S } from "./style";

type toggleProps = {
  text: string;
};
export default function Toggle({ text }: toggleProps) {
  return (
    <S.Container>
      <S.Button>{text}</S.Button>
    </S.Container>
  );
}
