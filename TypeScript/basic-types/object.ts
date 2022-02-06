// object 타입은 "primitive type이 아닌 것"을 나타내고 싶을 때 사용하는 타입

let objects: object = {};

objects = {name: 'Miso'};
objects = [{name: 'Miso'}];


// Error
// objects = 27;
// objects = 'Miso';
// objects = true;
// objects = 100n;
// objects = Symbol();
// objects = null;
// objects = undefined;