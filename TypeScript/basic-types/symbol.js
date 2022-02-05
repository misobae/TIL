"use strict";
// new Symbol 사용 불가
// Symbol을 함수로 사용해 symbol 타입을 만들어낼 수 있다.
console.log(Symbol('foo') === Symbol('foo'));
const sym = Symbol();
const obj = {
    [sym]: "value",
};
obj[sym];
