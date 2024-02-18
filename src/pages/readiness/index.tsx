import { S } from "./style";
//
import Button from "../../components/common/button";
import useInputValue from "../../hooks/useInputValue";
import { useSetAtom } from "jotai";
import { settingAtom } from "../../store/atom";
import { useNavigate } from "react-router";
import Select from "../../components/common/select";

export default function Readiness(): JSX.Element {
  const { inputValue, handleInput } = useInputValue(initValue);
  const setSetting = useSetAtom(settingAtom);
  const navigate = useNavigate();
  const winScore = inputValue.boardSize.slice(0, 1);

  const startGame = (path: string) => {
    setSetting(inputValue);
    navigate(path);
  };

  return (
    <S.Container>
      <S.Title>게임 설정</S.Title>
      <S.SettingContainer>
        <S.Space>
          <S.Subject>게임판의 크기</S.Subject>
          <Select
            name="boardSize"
            handleInput={handleInput}
            value={inputValue.boardSize}
            options={boardSizeOption}
          />
        </S.Space>
        <S.Space>
          <S.Subject>플레이어1</S.Subject>
          <S.Selects>
            <Select
              title="색깔"
              name="player1Color"
              handleInput={handleInput}
              value={inputValue.player1Color}
              options={colorOption}
            />
            <Select
              title="모양"
              name="player1Pattern"
              handleInput={handleInput}
              value={inputValue.player1Pattern}
              options={shapeOption}
            />
          </S.Selects>
        </S.Space>
        <S.Space>
          <S.Subject>플레이어2</S.Subject>
          <S.Selects>
            <Select
              title="색깔"
              name="player2Color"
              handleInput={handleInput}
              value={inputValue.player2Color}
              options={colorOption}
            />
            <Select
              title="모양"
              name="player2Pattern"
              handleInput={handleInput}
              value={inputValue.player2Pattern}
              options={shapeOption}
            />
          </S.Selects>
        </S.Space>
        <S.Space>
          <S.Subject>먼저 진행할 사람</S.Subject>
          <S.Selects>
            <Select
              name="startPlayer"
              handleInput={handleInput}
              value={inputValue.startPlayer}
              options={startPlayerOption}
            />
          </S.Selects>
        </S.Space>
        <S.Space>
          <S.Caution>
            * 본인의 마크 {winScore}개를 가로, 세로, 혹은 대각선 상에 놓인
            사람이 승리합니다.
          </S.Caution>
        </S.Space>
      </S.SettingContainer>
      <Button text="게임 시작" startGame={() => startGame("/game")} />
    </S.Container>
  );
}

const initValue = {
  boardSize: "3 X 3",
  player1Color: "파랑색",
  player2Color: "빨강색",
  player1Pattern: "X",
  player2Pattern: "O",
  startPlayer: "random",
};

const boardSizeOption = [
  "3 X 3",
  "4 X 4",
  "5 X 5",
  "6 X 6",
  "7 X 7",
  "8 X 8",
  "9 X 9",
];

const colorOption = [
  "빨강색",
  "주황색",
  "노랑색",
  "초록색",
  "파랑색",
  "남색",
  "보라색",
  "핑크색",
];
const shapeOption = ["X", "O", "♢", "♡", "♧", "♤", "▵", "◻︎"];

const startPlayerOption = ["랜덤", "플레이어1", "플레이어2"];
