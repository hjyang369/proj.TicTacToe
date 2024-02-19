//플레이어가 이길 수 있는 경우의 수 계산하는 함수 (size: 보드판 크기, winCondition: 승리조건)
const calculateWinCondition = (size: number, winCondition: number) => {
  //모든 경우의 수를 넣어줄 배열
  const lines: number[][] = [];

  // 가로 라인
  //보드판 크기 * 보드판의 크기-승리조건 * 승리 조건만큼 for문 순회
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= size - winCondition; j++) {
      const line: number[] = [];
      for (let k = 0; k < winCondition; k++) {
        //0부터 시작해 승리 조건만큼 배열에 넣어줌 //예시: [0,1,2], [1,2,3] ...
        line.push(i * size + j + k);
      }
      //최종 가로 라인 경우의 수를 모든 경우의 수 배열에 넣어줌
      lines.push(line);
    }
  }
  // 세로 라인
  //보드판 크기 * 보드판의 크기-승리조건 * 승리 조건만큼 for문 순회
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= size - winCondition; j++) {
      const line: number[] = [];
      for (let k = 0; k < winCondition; k++) {
        //0부터 시작해 보드판의 크기를 곱한 후 승리 조건만큼 배열에 넣어줌 //예시: [0,3,6], [1,4,7] ...
        line.push((j + k) * size + i);
      }
      lines.push(line);
    }
  }
  // 대각선 라인
  //보드판의 크기-승리조건 * 승리 조건만큼 for문 순회
  for (let i = 0; i <= size - winCondition; i++) {
    for (let j = 0; j <= size - winCondition; j++) {
      const line1: number[] = []; // 왼쪽 상단 대각선 라인
      const line2: number[] = []; // 오른쪽 상단 대각선 라인

      for (let k = 0; k < winCondition; k++) {
        //왼쪽 꼭짓점부터 시작해 승리 조건만큼 배열에 넣어줌 //예시: [0, 4, 8]
        line1.push((i + k) * size + j + k);
        //오른쪽 꼭짓점부터 시작해 승리 조건만큼 배열에 넣어줌 //예시: [2, 4, 6]
        line2.push((i + k) * size + j + (winCondition - 1 - k));
      }
      lines.push(line1);
      lines.push(line2);
    }
  }
  return lines;
};

export const calculateWinner = (
  squares: Array<string>, // 현재 보드판의 배열
  boardSize: number, // 유저가 설정한 보드판의 크기
  winCondition: number, // 유저가 설정한 승리 조건
) => {
  //승리할 수 있는 경우의 수
  const lines = calculateWinCondition(boardSize, winCondition);
  //승리할 수 있는 경우의 수만큼 for문 순회
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]; // 예시 3*3, 승리조건 3인경우 === [0,1,2]
    const lineSize = line.length;
    let winner = squares[line[0]]; //line[0]=== 0 일때 받아온 현재 보드판의 0번째 요소
    let isWinner = true;
    //승리 조건만큼 for문 순회
    for (let j = 1; j < lineSize; j++) {
      //받아온 현재 보드판의 2번째 요소가 현재 보드판의 0번째 요소와 다르거나 현재 보드판의 0번째 배열에 값이 없다면
      if (squares[line[j]] !== winner || !winner) {
        //승리자가 없다고 하며 for문 순회 중단
        isWinner = false;
        break;
      }
    }
    if (isWinner) {
      //이긴 사람 있으면 return
      return winner;
    }
  }
  return null;
};

// 먼저 마크를 놓는 플레이어를 랜덤으로 추출하는 함수
export const chooseRandomPlayer = (players: string[]) => {
  const randomIndex = Math.floor(Math.random() * players.length);
  return players[randomIndex];
};

//현재 시간 계산하는 함수
export const currentTime: string = new Date().toLocaleString("ko-KR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});
