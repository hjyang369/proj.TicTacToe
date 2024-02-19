import { S } from "./style";

type titleProps = {
  value: string;
  isMain?: boolean;
};

export default function Title({ value, isMain }: titleProps): JSX.Element {
  return <S.Title $isMain={isMain}>{value}</S.Title>;
}
