const calculateWinCondition = (size, winCondition) => {
  // 가로 라인
  const lines = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= size - winCondition; j++) {
      const line = [];
      for (let k = 0; k < winCondition; k++) {
        line.push(i * size + j + k);
      }
      lines.push(line);
    }
  }
  // 세로 라인
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= size - winCondition; j++) {
      const line = [];
      for (let k = 0; k < winCondition; k++) {
        line.push((j + k) * size + i);
      }
      lines.push(line);
    }
  }
  // 대각선 라인
  for (let i = 0; i <= size - winCondition; i++) {
    for (let j = 0; j <= size - winCondition; j++) {
      const line1 = [];
      const line2 = [];
      for (let k = 0; k < winCondition; k++) {
        line1.push((i + k) * size + j + k);
        line2.push((i + k) * size + j + (winCondition - 1 - k));
      }
      lines.push(line1);
      lines.push(line2);
    }
  }
  return lines;
};

export const calculateWinner = (
  squares: Array<string>,
  boardSize: number,
  winCondition: number,
) => {
  const lines = calculateWinCondition(boardSize, winCondition);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineSize = line.length;
    let winner = squares[line[0]];
    let isWinner = true;
    for (let j = 1; j < lineSize; j++) {
      if (squares[line[j]] !== winner || !winner) {
        isWinner = false;
        break;
      }
    }
    if (isWinner) {
      return winner;
    }
  }
  return null;
};

export const chooseRandomPlayer = players => {
  const randomIndex = Math.floor(Math.random() * players.length);
  return players[randomIndex];
};

export const currentTime = new Date().toLocaleString("ko-KR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});
