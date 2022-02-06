// 값을 반환하지 않는 undefined를 리턴 할 때 사용

function returnVoid(msg: string) {
  console.log(msg);

  return;
}

returnVoid('no return');