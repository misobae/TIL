# 데이터 타입
자바스크립트의 모든 값은 데이터 타입을 갖는다.  
자바스크립트(ES6)는 7개의 데이터 타입을 제공하고, 원시타입과 객체타입으로 분류한다.

## Number 타입
- 자바스크립트는 정수만을 위한 타입이 없고 무든 수를 실수로 처리한다. (1 === 0.1)
- 추가적으로 세 가지 특별한 값도 표현할 수 있다.
```javascript
console.log(10 / 0); // 양의 무한대 (Infinity)
console.log(10 / -0); // 음의 무한대 (-Infinity)
console.log(1 * 'String'); // 산술 연산 불가 (NaN)
```

## String 타입
- 텍스트 데이터를 나타내는데 사용한다.
- 16비트 유니코드 문자(UTF-16)의 집합으로 전 세계 대부분의 문자 표현한다.
- 작은따옴표(''), 큰따옴표(""), 백틱(``)으로 텍스트를 묶어 사용한다.
- 문자열은 원시 타입이며, 변경 불가능한 값이다.
### 템플릿 리터럴
템플릿 리터럴이란 백틱 기호를 사용해 `멀티라인 문자열`, `표현식 삽입`, `태그드 템플릿` 등 편리한 문자열 처리 기능을 제공한다.
```javascript
// 멀티라인 문자열
console.log(`Hello
World.`);

// 표현식 삽입
const firstName = 'Miso';
const lastName = 'Bae';
console.log(`My name is ${firstName} ${lasttName}.`); // My name is Miso Bae.
``` 

## Boolean 타입
- 참과 거짓을 나타내는 true와 false.

## Undefinde 타입
- 자바스크립트 엔진이 변수를 초기화할 때 사용하는 값.

## Null 타입
- 변수에 값이 없다는 것을 의도적으로 명시.

## Symbol 타입
- Symbol 함수를 호출해 생성한다.
- 심벌 값은 객체의 유일한 프로퍼티 키를 만들기 위해 사용한다.