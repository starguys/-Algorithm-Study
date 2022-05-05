function solution(n, arr1, arr2) {
  const index = Array.from(Array(n), () => Array(n).fill(0));
  const answer = [n, arr1, arr2];
  const arr1Binary = arr1.map((el) => el.toString(2).split(""));
  const arr2Binary = arr2.map((el) => el.toString(2).split(""));
  for (let i = 0; i < arr1Binary.length; i++) {
    //   arr1Binary[i].push(0);
    for (let j = n; j < arr1Binary[i].length; j++) {
      console.log(n, j);
    }

    console.log(arr1Binary[i].length);
  }

  return null;
  //   return [arr1Binary, arr2Binary];
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
// console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 10]));
