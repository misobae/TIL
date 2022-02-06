// never 타입은 모든 타입의 subtype이며, 모든 값에 할당 할 수 있다.
// 허지만 never에는 어떤 것도 할당 할 수 없다.
// 이런 점을 활용해 잘못된 타입을 넣는 실수를 막고자 할 때 사용된다.
let a: string = 'hello';

if(typeof a !== 'string') {
  a; // never
}

// never는 일반적으로 리턴에 사용된다.
// throw 하는 경우에 한해 어떠한 경우도 return되지 않는다.
function error(msg: string): never {
  throw new Error(msg);
}

function fail() {
  return error('failed');
}

function infiniteLoop(): never {
  while(true) {}
}