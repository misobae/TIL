// unknown 타입은 자기 자신과 any 타입을 제외한 다른 타입에 할당할 수 없다.
// unknown 타입으로 선언된 변수는 프로퍼티에 접근할 수 없으며, 인스턴스를 생성할수도 없다.
// 다만, 명시적으로 type assertion이 있거나 타입 체킹을 하면 다른 타입에 할당하거나 프로퍼티 접근이 가능
// unknown 타입으로 지정된 값은 타입을 먼저 확인한 후에 무언가를 할 수 있으므로 any보다 unknown 을 사용하는 것이 보다 안전


declare const maybe: unknown;

// const aNumber: number = maybe; // Error

if(maybe === true) {
  // 타입 가드: 런타임에 검사를 수행해 타입이 한정된다.
  const aBoolean: boolean = maybe;
}

if (typeof maybe === 'string') {
  const aString: string = maybe;
}