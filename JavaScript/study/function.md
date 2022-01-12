# 함수
- 어떤 작업을 수행하는 코드를 블록으로 감싸 하나의 실행 단위로 정의한 것.
- 코드의 중복을 억제하고 재사용성을 높인다. (유지보수 편리, 코드 신뢰성 증가)



## 함수 정의
### 함수 선언문
```javascript
function add(a, b) {
  return a + b;
}
```

### 함수 표현식
함수 표현식은 변수에 할당되기 때문에 함수 호이스팅이 아닌 변수 호이스팅이 발생한다.  
그러므로 반드시 함수 표현식 이후에 호출한다.
```javascript
var add = function(a, b) {
  return a + b;
};
```

### Function 생성자 함수
```javascript
var add = new Function('a', 'b', 'return a + b');
```

### 화살표 함수
ES6에서 도입된 화살표 함수는 function키워드 대신 =>를 사용해 간략한 방법으로 함수를 선언할 수 있다.  
화살표 함수는 항상 익명 함수로 정의한다.
```javascript
var add = (a, b) => a + b;
```