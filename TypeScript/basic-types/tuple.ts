// Tueple은 서로 다른 타입을 함께 가질 수 있는 배열. 요소의 타입과 개수가 고정된 배열을 표현할 수 있음.
let x: [string, number];

x = ['One', 1];

// x = [10, "Ten"]; // 선언한 순서대로 입력해야 됨

x[0] = 'Hello';

const person: [string, number] = ['Miso', 27];

const [first, second] = person;