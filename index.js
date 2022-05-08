function solution(n) {
  let divN = Math.floor(n / 2);
  let result = 1;
  let Num = 0;
  for (let i = 1; i < divN + 1; i++) {
    Num = i;
    for (let j = i + 1; Num < n + 1; j++) {
      console.log(j, "j", i, "i");
      Num = Num + j;
      console.log(Num, "Num");
      if (Num === n) {
        result++;
        console.log(result, "result");
      }
    }
  }
  return result;
}

console.log(solution(15));

//4
//22 4

//15
//12345
//

//7+8 T
//6+7+8 F
//5+6+7 F
//4+5+6 T
//3+4+5+6 F
//2+3+4+5+6 F
//1+2+3+4+5 T

//16
//1+2+3+4+5+6

//시간초과
