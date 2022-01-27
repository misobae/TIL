# Property Attribute
## 내부 슬롯과 내부 메서드
프로퍼티 어트리뷰트를 이해하기 위해 먼저 내부 슬롯(internal slot)과 내부 메서드(internal method) 개념에 대해 알아야한다.

내부 슬롯과 내부 메서드는 자바스크립트 엔진의 구현 알고리즘을 설명하기 위해 ECMA Script 사양에서 사용하는 의사 프로퍼티(pseudo property)와 의사 메서드(pseudo method)다. [[...]] 이중 대괄호로 감싸진다.

`모든 객체는 [[Prototype]]이라는 내부 슬롯을 갖는다.
내부 슬롯과 내부 메서드는 자바스크립트 엔진의 내부 로직이므로 직접 접근하여 호출할 수 없지만,
[[Prototype]] 내부 슬롯의 경우, __proto__를 통해 간접적으로 접근할 수 있다.`

```javascript
const o = {};

// 내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근할 수 없다.
o.[[Prototype]] // >> Uncaught SyntaxError: Unexpected token '['

// __proto__를 통한 간접 접근
o.__proto__ // >> Object.prototype
```

## 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.
### 프로퍼티의 상태
- 프로퍼티의 값 (value)
- 값의 갱신 가능 여부 (writable)
- 열거 가능 여부 (enumerable)
- 재정의 가능 여부 (configurable)

프로퍼티 어트리뷰트는 자바스크립트 엔진이 관리하는 내부 상태 값(meta-property)인 내부 슬롯
[[Value]], [[Writable]], [[Enumerable]], [[Configurable]]이다.
따라서 프로퍼티 어트리뷰트에 직접 접근할 수 없지만 Object.getOwnPropertyDescriptor 메서드를 통해 간접적으로 확인할 수 있다.
```javascript
const person = {
	name: 'Bae'
};

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
// Object.getOwnPropertyDescriptor(객체의 참조, '프로퍼티 키')
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// >> {value: "Bae", writable: true, enumerable: true, configurable: true}
```

## 데이터 프로퍼티와 접근자 프로퍼티
프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있다.
### 데이터 프로퍼티(data property)
- 키와 값으로 구성된 일반적인 프로퍼티
- [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]

### 접근자 프로퍼티(accessor property)
- 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수(accessor function)로 구성된 프로퍼티

프로퍼티 어트리뷰트 | 설명
--|--
[[Get]] | 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수.접근자 프로퍼티 키로 프로퍼티 값에 접근하면 프로퍼티 어티리뷰트 [[Get]]의 값, 즉 getter 함수가 호출되고 그 결과가 프로퍼티 값으로 반환된다.
[[Set]] | 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수. 접근자 프로퍼티 키로 프로퍼티 값에 접근하면 프로퍼티 어티리뷰트 [[Set]]의 값, 즉 setter 함수가 호출되고 그 결과가 프로퍼티 값으로 반환된다.
[[Enumerable]] | 프로퍼티의 열거 가능 여부를 나타내며 Boolean 값을 갖는다.
[[Configurable]] | 프로퍼티의 재정의 가능 여부를 나타내며 Boolean 값을 갖는다.

## 프로퍼티 정의
새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나 기존 프로퍼티의 프로퍼티 어트리뷰트를 재정의하는 것을 말하고 Object.defineProperty 메서드를 사용해 프로퍼티의 어트리뷰트를 정의할 수 있다.  
`Object.defineProperty는 한번에 하나의 프로퍼티 정의, Object.defineProperties는 여러 개의 프로퍼티 정의`
```javascript
const person = {};

// [데이터 프로퍼티의 정의]
Object.defineProperty(person, 'firstName', {
	value: 'Miso',
	writable: true,
	enumerable: true,
	configurable: true
});

Object.defineProperty(person, 'lastName', {
	value: 'Bae'
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor);
// >> firstName {value: "Miso", writable: true, enumerable: true, configurable: true}

// 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값이다.
descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);
// >> firstName {value: "Bae", writable: false, enumerable: false, configurable: false}



// [접근자 프로퍼티의 정의]
Object.defineProperty(person, 'fullName', {
	// getter 함수
	get() {
		return `${this.firstName} ${this.lastName}`;
	},

	// setter 함수
	get(name) {
		[this.firstName, this.lastName] = name.split(' ');
	},
	enumerable: true,
	configurable: true
});

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);
// >> fullName {get: f, set: f, enumerable: true, configurable: true}

person.fullName = 'Miso Bae'
console.log(person);
// >> {firstName: "Miso", lastName: "Bae"}
```

## 객체 변경 방지
객체는 변경 가능한 값이므로 재할당 없이 직접 변경할 수 있다.  
자바스크립트는 객체의 변경을 방지하는 다양한 메서드를 제공한다. 객체 방지 메서드들은 객체의 변경을 금지하는 강도가 다르다.
구분 | 메서드 | 프로퍼티 추가 | 프로퍼티 삭제 | 프로퍼티 값 읽기 | 프로퍼티 값 쓰기 | 프로퍼티 어트리뷰트 재정의
--|--|:--:|:--:|:--:|:--:|:--:
객체 확장 금지 | Object.preventExtensions | X | O | O | O | O
객체 밀봉 | Object.seal | X | X | O | O | X
객체 동결 | Object.freeze | X | X | O | X | X
### 불변 객체
위 메서드들은 얕은 변경 방지로 직속 프로퍼티만 변경이 방지되고 중첩 객체까지는 영향을 주지 못한다.
객체의 중첩 객체까지 동결하여 변경이 불가능한 읽기 전용의 불변 객체를 구현하려면 객체를 값으로 갖는 모든 프로퍼티에 대해 재귀적으로 Object.freeze 메서드를 호출해야 한다.