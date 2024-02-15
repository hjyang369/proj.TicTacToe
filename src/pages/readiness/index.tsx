import { S } from "./style";

export default function Readiness() {
  return (
    <S.Container>
      <S.Title>Tic Tac Toe 게임 설정</S.Title>
      <div>
        <span>게임판의 크기</span>
        <input type="number" />
        <span> X </span>
        <input type="number" />
      </div>
      <div>
        <span>플레이어1 마크</span>
        <input type="radio" value="초록" />
        <input type="radio" />
      </div>
      <div>
        <span>플레이어2 마크</span>
        <select>
          <option>초록색</option>
        </select>
        <input type="radio" value="초록" />
        <input type="radio" />
      </div>
      <div>
        <span>먼저 진행할 사람</span>
        <input type="radio" value="초록" />
        <input type="radio" />
      </div>
    </S.Container>
  );
}
