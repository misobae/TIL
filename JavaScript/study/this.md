# this
- this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수(self-referencing variable)
- this를 통해 **자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드**를 참조할 수 있다.
- 클래스 기반 언어(Java, C++)에서 this는 언제나 클래스가 생성하는 인스턴스를 가리키지만,
JavaScript의 this는 함수가 호출되는 방식에 따라 this 바인딩(식별자와 값을 연결하는 과정)이 동적으로 결정된다.
- this는 코드 어디에서든 참조 가능하다.

## 함수 호출 방식과 this 바인딩

1. 일반 함수 호출
2. 메서드 호출
3. 생성자 함수 호출
4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출

### 1. 일반 함수 호출

```jsx
function foo() {
	console.log("foo's this: ", this); // window
	function bar() {
		console.log("bar's this: ", this); // window	
	}
	bar();
}
foo();
```

- 일반 함수로 호출된 모든 함수(중첩, 콜백 포함) 내부의 this에는 전역 객체가 바인딩된다.
- this는 객체의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수이므로 객체를 생성하지 않는 일반 함수에서 this는 의미가 없다.
- strict mode가 적용된 일반 함수 내부의 this에는 undefinde가 바인딩된다.

### 2. 메서드 호출

메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다.

```jsx
const person = {
	name: 'Lee',
	getName() {
		// 메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다.
		return this.name;
	}
}

// 메서드 getName을 호출한 객체는 person
console.log(person.getName()); // Lee
```

### 3. 생성자 함수 호출

생성자 함수. 내부의 this는 생성자 함수가 생성할 인스턴스가 바인딩된다.

```jsx
function Circle(radius) {
	this.radius = radius;
	this.getDiameter = function() {
		return 2 * this.radius;	
	};
}

// 반지름이 5인 Circle 객체 생성
const circle1 = new Circle(5);
// 반지름이 10인 Circle 객체 생성
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20
```

### 4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출

apply/call/bind 메서드는 Function.prototype의 메서드다. **(모든 함수가 상속받아 사용 할 수 있음)**

apply와 call 메서드는 함수를 호출하면서 첫 번째 인수로 전달한 특정 객체를 호출한 함수의 this에 바인딩한다.

```jsx
function getThisBinding() {
	console.log(arguments);
	return this;
}

// this로 사용할 객체
const thisArg = {a: 1};

// getThisBinding 함수를 호출하면서 인수로 전달할 객체를 해당 함수의 this에 바인딩한다.
// apply 메서드는 호출할 함수의 인수를 배열로 묶어 전달한다.
console.log(getThisBinding.apply(thisArg, [1, 2, 3]));
// Arguments(3) [1, 2, 3, callee: f, Symbol(Symbol.interator): f]
// {a: 1}

// call 메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다.
console.log(getThisBinding.call(thisArg, 1, 2, 3));
// Arguments(3) [1, 2, 3, callee: f, Symbol(Symbol.interator): f]
// {a: 1}
```

bind 메서드는 메서드의 this와 메서드 내부의 중첩 함수 또는 콜백 함수의 this가 불일치하는 문제를 해결하기 위해 유용하게 사용된다.

```jsx
const person = {
	name: 'Lee',
	foo(callback) {
		// bind 메서드로 callback 함수 내부의 this 바인딩을 전달
		setTimeout(callback.bind(this), 100);
	}
};

person.foo(function() {
	console.log(`Hi! my name is ${this.name}.`); // Hi! my name is Lee.
})
```