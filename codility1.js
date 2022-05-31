function solution(A) {
  let hillsCastle = 0;
  let valleysCastle = 0;
  let Q = 0;
  for (let i = 0; i < A.length; i++) {
    Q = i + 1;
    if (i === 0) {
      if (0 > A[i]) {
        valleysCastle++;
        continue;
      } else if (0 < A[i]) {
        hillsCastle++;
        continue;
      }
    }
    if (Q === A.length - 1) {
      if (A[Q - 1] > 0) {
        hillsCastle++;
        continue;
      } else if (A[Q - 1] < 0) {
        valleysCastle++;
        continue;
      }
    }
    if (i > 0 && Q < A.length - 1) {
      if (A[i - 1] < A[i] && A[Q + 1] < A[Q]) {
        hillsCastle++;
      } else if (A[i - 1] > A[i] && A[Q + 1] > A[Q]) {
        valleysCastle++;
      }
    }
  }
  return hillsCastle + valleysCastle;
}

const A1 = [2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5];
const A2 = [-3, -3];

console.log(solution(A1));
console.log(solution(A2));
