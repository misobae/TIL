# 변수
## 변수란?
값을 저장하기 위해 확보한 메모리 공간에 붙인 이름 또는 메모리 공간 자체.

## 변수 선언 키워드
### var
- ES6가 도입되기 전 유일한 변수 선언 키워드.
- 블록 레벨 스코프를 지원하지 않고 함수 레벨의 유효범위를 갖기 때문에 의도하지 않은 범위에서 변수가 사용되어 메모리 누수 등 부작용이 발생할 수 있으므로 사용하지 않는다.
- 함수 외부에서 선언한 변수는 모두 전역 변수가 된다.
- for문의 변수 선언문에서 선언한 변수도 전역 변수가 된다.

### let
- Mutable data type  
- 값을 재할당할 수 있다.
- 블록 레벨 스코프를 갖는다.
```javascript
let i = 1; // 전역 변수
{
  let i = 100; // 지약 변수
}
```
- 위 예제의 전역에서 선언된 i 변수와 코드 블록 내에서 선언된 i 변수는 다른 별개의 변수다.
- 런타임 이전에 자바스크립트 엔진에 의해 선언단계가 실행되고, 변수 선언문에서 초기화 단계 실행되고, 할당문에서 할당 단계가 실행된다. (아래 예제 참고)
```javascript
// 런타임 이전  선언 단계 실행.

console.log(i); // ReferenceError: i is not defined

let i; // 초기화 단계 실행
console.log(i); // undefined

i = 1; // 할당 단계 실행
console.log(i); // 1
```


### const
- Immutable data type
- 변수에 원시값을 할당한 경우 값을 변경할 수 없고, 재할당을 금지한다.
- 변수에 객체를 할당한 경우 값을 변경할 수 있다.
- 블록 레벨 스코프를 갖는다.
- 반드시 선언과 동시에 초기화해야 한다. (아래 예제 참고)
```javascript
const i = 1; // 선언과 동시에 초기화

const j; // SyntaxError: Missing initializer in const declaration
```


`재할당이 필요한 경우에 한정해 let 사용. (이때 변수의 스코프는 최대한 좁게 만든다.)`  
`재할당이 필요 없는 상수와 객체에는 const를 사용하는 것이 의도치 않은 재할당을 방지하기 때문에 안전하다.`

## 식별자
변수의 이름을 식별자라고 한다.  
식별자는 값을 구별해 식별할 수 있는 고유한 이름을 말한다.
### 식별자 네이밍 규칙
- 특수문자를 제외한 문자, 숫자, 언더스코어(_), 달러 기호($)를 포함할 수 있다.
- 식별자는 숫자로 시작할 수 없다.
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_keywords_as_of_ecmascript_2015" target="_blank" title="MDN 사이트로 이동">예약어</a>는 식별자로 사용할 수 없다.

#### 네이밍 컨벤션
식별자를 가독성 좋게 구분하기 위해 규정한 명명 규칙  
```javascript
// 카멜 케이스: 변수, 함수의 이름에 사용
var camelCase;

// 파스칼 케이스: 생성자 함수, 클래스 이름에 사용
var PascalCase;
```