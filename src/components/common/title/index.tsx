import { S } from "./style";

type titleProps = {
  value: string;
  margin: string;
  isMain?: string;
};

export default function Title({
  value,
  margin,
  isMain,
}: titleProps): JSX.Element {
  return (
    <S.Title $margin={margin} $isMain={isMain}>
      {value}
    </S.Title>
  );
}
