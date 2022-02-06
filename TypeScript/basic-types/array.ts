let list: number[] = [1, 2, 3];

// 아래 방식도 사용 가능하지만 jsx나 tsx에서 충돌이 날 수 있으므로 사용 자제
// let list: Array<number> = [1, 2, 3];

let unionList: (number | string)[] = [1, 2, 3, '4'];