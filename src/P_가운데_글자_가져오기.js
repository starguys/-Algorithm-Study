// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"

function solution(s) {
  const isEven = s.length % 2;
  const MilldeNum = parseInt(s.length / 2);
  if (isEven === 0) return s.slice(MilldeNum - 1, MilldeNum + 1);
  else return s.slice(MilldeNum, MilldeNum + 1);
}

const ex1 = "abcde";

const ex2 = "qwer";

console.log(solution(ex1));
console.log(solution(ex2));
