function solution(A) {
  let resultNum = 0;
  A.sort(function (a, b) {
    return b - a;
  });

  if (A.indexOf(1) >= 0 && A.indexOf(2) >= 0) {
    for (let i = 0; i < A.length; i++) {
      if (A[i] === 2) {
        continue;
      }
      if (A[i] > 2) {
        resultNum = resultNum + (A[i] - 2);
      }
      if (A[i] < 2) {
        resultNum = resultNum + (2 - A[i]);
      }
    }
    return resultNum;
  }

  if (A.indexOf(3) >= 0 && A.indexOf(4) >= 0) {
    for (let i = 0; i < A.length; i++) {
      if (A[i] === 3) {
        continue;
      }
      if (A[i] > 3) {
        resultNum = resultNum + (A[i] - 3);
      }
      if (A[i] < 3) {
        resultNum = resultNum + (3 - A[i]);
      }
    }
    return resultNum;
  }

  for (let i = 0; i < A.length; i++) {
    if (A[0] === A[i]) {
      continue;
    } else {
      resultNum = resultNum + (A[0] - A[i]);
    }
  }
  return resultNum;
}

const A1 = [3, 2, 1, 1, 2, 3, 1];
const A2 = [4, 1, 4, 1];
const A3 = [3, 3, 3];
const A4 = [3, 4, 1, 1, 4, 3, 1];

console.log(solution(A1));
console.log(solution(A2));
console.log(solution(A3));
console.log(solution(A4));

// 1,2,3
// 2,3,4
// 1,2,3,4
//1,2,3,4,5
