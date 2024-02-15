import { S } from "./style";
import useMove from "../../../hooks/useMove";

type buttonProps = {
  text: string;
  path: string;
};
export default function Button({ text, path }: buttonProps) {
  const { moveToPage } = useMove();
  return <S.Button onClick={() => moveToPage(path)}>{text}</S.Button>;
}
