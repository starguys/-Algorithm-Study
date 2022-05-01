// 다트 게임
// 카카오톡에 뜬 네 번째 별! 심심할 땐? 카카오톡 게임별~

// Game Star

// 카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다. 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
// 갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다. 다트 게임의 점수 계산 로직은 아래와 같다.

// 다트 게임은 총 3번의 기회로 구성된다.
// 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
// 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
// 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
// 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
// Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
// 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
// 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.

// 입력 형식
// "점수|보너스|[옵션]"으로 이루어진 문자열 3세트.
// 예) 1S2D*3T

// 점수는 0에서 10 사이의 정수이다.
// 보너스는 S, D, T 중 하나이다.
// 옵선은 *이나 # 중 하나이며, 없을 수도 있다.
// 출력 형식
// 3번의 기회에서 얻은 점수 합계에 해당하는 정수값을 출력한다.
// 예) 37

// 입출력 예제
// 예제	dartResult	answer	설명
// 1	1S2D*3T	37	11 * 2 + 22 * 2 + 33
// 2	1D2S#10S	9	12 + 21 * (-1) + 101
// 3	1D2S0T	3	12 + 21 + 03
// 4	1S*2T*3S	23	11 * 2 * 2 + 23 * 2 + 31
// 5	1D#2S*3S	5	12 * (-1) * 2 + 21 * 2 + 31
// 6	1T2D3D#	-4	13 + 22 + 32 * (-1)
// 7	1D2S3T*	59	12 + 21 * 2 + 33 * 2

function solution(dartResult) {
  let answer;
  let result = [];

  let oops1 = false;
  let oops2 = false;
  let oops3 = false;

  let starshoot1 = false;
  let starshoot2 = false;
  let starshoot3 = false;
  answer = dartResult.split("");

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === "0" && answer[i - 1] === "1") answer[i] = "10";

    //star
    if (i === 2 && answer[i] === "*") starshoot1 = true;
    if (i > 2 && i <= 5 && answer[i] === "*") starshoot2 = true;
    if (i > 5 && answer[i] === "*") starshoot3 = true;

    //Oops
    if (i === 2 && answer[i] === "#") oops1 = true;
    if (i > 2 && i <= 5 && answer[i] === "#") oops2 = true;
    if (i > 5 && answer[i] === "#") oops3 = true;

    if (answer[i] === "S") result.push(Number(answer[i - 1]));
    if (answer[i] === "D")
      result.push(Number(answer[i - 1]) * Number(answer[i - 1]));
    if (answer[i] === "T")
      result.push(
        Number(answer[i - 1]) * Number(answer[i - 1]) * Number(answer[i - 1])
      );
  }
  if (starshoot1) result[0] = result[0] * 2;
  if (starshoot2) {
    result[0] = result[0] * 2;
    result[1] = result[1] * 2;
  }
  if (starshoot3) {
    result[1] = result[1] * 2;
    result[2] = result[2] * 2;
  }

  if (oops1) result[0] = result[0] * -1;
  if (oops2) result[1] = result[1] * -1;
  if (oops3) result[2] = result[2] * -1;
  return result.reduce((pre, cur) => pre + cur, 0);
}

const ex1 = "1S2D*3T";
const ex2 = "1D2S#10S";
const ex3 = "1D2S0T";
const ex4 = "1S*2T*3S";
const ex5 = "1D#2S*3S";
const ex6 = "1T2D3D#";
const ex7 = "1D2S3T*";

console.log(solution(ex1), "ex1");
console.log(solution(ex2), "ex2");
console.log(solution(ex3), "ex3");
console.log(solution(ex4), "ex4");
console.log(solution(ex5), "ex5");
console.log(solution(ex6), "ex6");
console.log(solution(ex7), "ex7");

// *위치
// *1 3
// *2 5,6
// *3 7이상
