import { S } from "./style";

type selectProps = {
  title?: string;
  name: string;
  value: string;
  options: string[];
  handleInput: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Select({
  title,
  name,
  value,
  handleInput,
  options,
}: selectProps): JSX.Element {
  return (
    <S.Container>
      {title && <span>{title}</span>}
      <select name={name} onChange={e => handleInput(e)} value={value}>
        {options.map((text, idx) => {
          return <option key={idx}>{text}</option>;
        })}
      </select>
    </S.Container>
  );
}
