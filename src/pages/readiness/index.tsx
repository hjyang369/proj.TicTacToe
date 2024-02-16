import Button from "../../components/common/button";
import { S } from "./style";

export default function Readiness() {
  return (
    <S.Container>
      <S.Title>게임 설정</S.Title>
      <S.SettingContainer>
        <S.InputContainer>
          <S.Subject>게임판의 크기</S.Subject>
          <S.SelectContainer>
            <S.NumberInput type="number" />
            <span> X </span>
            <S.NumberInput type="number" />
          </S.SelectContainer>
        </S.InputContainer>
        <S.InputContainer>
          <S.Subject>승리 조건</S.Subject>
          <S.SelectContainer>
            <S.NumberInput type="number" />
            <span> 이상 </span>
          </S.SelectContainer>
        </S.InputContainer>
        <S.InputContainer>
          <S.Subject>플레이어1</S.Subject>
          <S.SelectContainer>
            <S.SelectContainer>
              <span>색깔</span>
              <select>
                <option>빨간색</option>
                <option>주황색</option>
                <option>노랑색</option>
                <option>초록색</option>
                <option selected>파랑색</option>
                <option>남색</option>
                <option>보라색</option>
                <option>핑크색</option>
              </select>
            </S.SelectContainer>
            <S.SelectContainer>
              <span>모양</span>
              <select>
                <option selected>X</option>
                <option>O</option>
                <option>♢</option>
                <option>♡</option>
                <option>♧</option>
                <option>♤</option>
                <option>▵</option>
                <option>◻︎</option>
              </select>
            </S.SelectContainer>
          </S.SelectContainer>
        </S.InputContainer>
        <S.InputContainer>
          <S.Subject>플레이어2</S.Subject>
          <S.SelectContainer>
            <S.SelectContainer>
              <span>색깔</span>
              <select>
                <option selected>빨간색</option>
                <option>주황색</option>
                <option>노랑색</option>
                <option>초록색</option>
                <option>파랑색</option>
                <option>남색</option>
                <option>보라색</option>
                <option>핑크색</option>
              </select>
            </S.SelectContainer>
            <S.SelectContainer>
              <span>모양</span>
              <select>
                <option>X</option>
                <option selected>O</option>
                <option>♢</option>
                <option>♡</option>
                <option>♧</option>
                <option>♤</option>
                <option>▵</option>
                <option>◻︎</option>
              </select>
            </S.SelectContainer>
          </S.SelectContainer>
        </S.InputContainer>
        <S.InputContainer>
          <S.Subject>먼저 진행할 사람</S.Subject>
          <S.SelectContainer>
            <div>
              <label htmlFor="random">랜덤</label>
              <input type="radio" id="random" />
            </div>
            <div>
              <label htmlFor="player1">플레이어1</label>
              <input type="radio" id="player1" />
            </div>
            <div>
              <label htmlFor="player1">플레이어2</label>
              <input type="radio" id="player2" />
            </div>
          </S.SelectContainer>
        </S.InputContainer>
      </S.SettingContainer>
      <Button text="게임 시작" path="/game" />
    </S.Container>
  );
}
