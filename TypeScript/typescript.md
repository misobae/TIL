# TypeScript
- TypeScript는 JavaScript의 모든 기능을 담고 있으면서, Type이라는 시스템을 추가한 JavaScript의 Superset이다.
- JavaScript의 기본 자료형인 Boolean, Number, String, Null, Undefined, Symbol, Array를 포함하고 있으며 클래스, 인터페이스, 상속, 모듈 등과 같은 객체 지향 프로그래밍 패턴을 제공한다.
- JavaScript는 Dynamic Type의 인터프리터 언어로 런타임에서 타입을 체크하는 반면,
TypeScript는 Static Type의 컴파일 언어로 개발 단계에서 타입을 체크해 오류를 확인할 수 있다.

## Type Annotation
- 변수나 함수, 객체 속성의 데이터 타입을 지정
- 변수명, 함수명, 객체 속성명 뒤에 : **type** 을 입력해 데이터 타입을 지정
- Type annotation을 사용하여 type 검사를 수행

```tsx
let year: number = 2022;
```