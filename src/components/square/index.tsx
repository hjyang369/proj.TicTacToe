import { S } from "./style";
type squareProps = {
  value: string | number;
};
export default function Square({ value }: squareProps) {
  return <S.Square>{value}</S.Square>;
}
