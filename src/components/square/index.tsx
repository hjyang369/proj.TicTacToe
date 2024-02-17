import { S } from "./style";
type squareProps = {
  value: string | number;
  handleClick: () => void;
};
export default function Square({ value, handleClick }: squareProps) {
  return <S.Square onClick={handleClick}>{value}</S.Square>;
}
