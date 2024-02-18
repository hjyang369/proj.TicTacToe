const calculateWinCondition = size => {
  // 가로 라인
  const lines = [];
  for (let i = 0; i < size; i++) {
    const line = [];
    for (let j = 0; j < size; j++) {
      line.push(i * size + j);
    }
    lines.push(line);
  }
  // 세로 라인
  for (let i = 0; i < size; i++) {
    const line = [];
    for (let j = 0; j < size; j++) {
      line.push(j * size + i);
    }
    lines.push(line);
  }
  // 대각선 라인
  const diagonal1 = [];
  const diagonal2 = [];
  for (let i = 0; i < size; i++) {
    diagonal1.push(i * size + i);
    diagonal2.push(i * size + (size - 1 - i));
  }
  lines.push(diagonal1);
  lines.push(diagonal2);

  return lines;
};

export const calculateWinner = (squares: Array<string>, boardSize: number) => {
  const lines = calculateWinCondition(boardSize);
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
