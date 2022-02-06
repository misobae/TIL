
// null과 undefined는 각각 null, undefined의 값만 가질 수 있다.
// let s: string = null; -> 오류
// let u: undefined = null; -> 오류

// 유니언 타입(Union Type)은 자바스크립트의 OR 연산자(||)와 같이 'A' 이거나 'B'이다 라는 의미의 타입.
// 하나의 변수에 여러 타입을 지정할 수 있다.
let union: string | null = null;

union = 'Miso';