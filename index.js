function solution(B) {
  let index = B.map((el) => el.split(""));
  for (let i = 0; i < index.length; i++) {
    for (let j = 0; j < index[i].length; j++) {
      if (index[i][j] === ">") {
        for (let k = j + 1; k < index[i].length; k++) {
          if (index[i][k] !== "." && index[i][k] !== "W") {
            break;
          }
          index[i][k] = "W";
        }
      }
      if (index[i][j] === "<") {
        for (let k = j - 1; k >= 0; k--) {
          if (index[i][k] !== "." && index[i][k] !== "W") {
            break;
          }
          index[i][k] = "W";
        }
      }
      if (index[i][j] === "^") {
        for (let k = i - 1; k >= 0; k--) {
          if (index[k][j] !== "." && index[k][j] !== "W") {
            break;
          }
          index[k][j] = "W";
        }
      }
      if (index[i][j] === "v") {
        for (let k = i + 1; k < index.length; k++) {
          if (index[k][j] !== "." && index[i][k] !== "W") {
            break;
          }
          index[k][j] = "W";
        }
      }
    }
  }

  for (let i = 0; i < index.length; i++) {
    for (let j = 0; j < index[i].length; j++) {
      if (index[i][j] === ".") {
        index[i][j] = 0;
      } else {
        index[i][j] = -1;
      }
    }
  }
  if (isPath(index)) return true;
  else return false;
}

function isPath(arr) {
  let row = arr.length;
  let col = arr[0].length;
  let dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let q = [];

  q.push([0, 0]);

  while (q.length > 0) {
    let p = q[0];
    q.shift();
    arr[p[0]][p[1]] = -1;
    if (p[0] == row - 1 && p[1] == col - 1) return true;

    for (let i = 0; i < 4; i++) {
      let a = p[0] + dir[i][0];
      let b = p[1] + dir[i][1];
      if (a >= 0 && b >= 0 && a < row && b < col && arr[a][b] != -1) {
        if (a == row - 1 && b == col - 1) return true;
        q.push([a, b]);
      }
    }
  }
  return false;
}
