function solution(n, arr1, arr2) {
  const arr1Binary = arr1.map((el) => el.toString(2).split(""));
  const arr2Binary = arr2.map((el) => el.toString(2).split(""));
  for (let i = 0; i < arr1Binary.length; i++) {
    for (let j = 0; j < arr1Binary[i].length; j++) {
      if (arr1Binary[i].length < n) {
        arr1Binary[i].unshift("0");
      }
    }
  }

  for (let i = 0; i < arr2Binary.length; i++) {
    for (let j = 0; j < arr2Binary[i].length; j++) {
      if (arr2Binary[i].length < n) {
        arr2Binary[i].unshift("0");
      }
    }
  }

  for (let i = 0; i < arr1Binary.length; i++) {
    for (let j = 0; j < arr1Binary[i].length; j++) {
      if (arr1Binary[i][j] !== "1") {
        arr1Binary[i][j] = arr2Binary[i][j];
      }
    }
  }

  for (let i = 0; i < arr1Binary.length; i++) {
    for (let j = 0; j < arr1Binary[i].length; j++) {
      if (arr1Binary[i][j] === "1") {
        arr1Binary[i][j] = "#";
      } else {
        arr1Binary[i][j] = " ";
      }
    }
  }

  return arr1Binary.map((el) => el.join(""));
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
// console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 10]));
