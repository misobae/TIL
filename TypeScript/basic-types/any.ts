// any는 어떤 타입이어도 상관 없는 타입
// any를 사용하지 않는 것이 타입 시스템을 안전하게 유지할 수 있다. (컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문)
// 컴파일 옵션 중 noImplicitAny는 암묵적으로 any 타입을 가지는 것을 허락하지 않도록 한다.

function returnAny(msg: any): any {
  console.log(msg);
}

const any1 = returnAny('return anything');
any1.toString();

let looselyTyped: any = {};
const d = looselyTyped.a.b.c.d; // any는 계속해서 개체를 통해 전파됨

function leakingAny(obj: any) {
  const a = obj.num;
  const b = a + 1;
  return b;
}

const c = leakingAny({num: 0});
c.indexOf('0')