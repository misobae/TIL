'use strict';
// class는 서로 연관있는 fields와 methods를 묶어놓은 것
// class에 안에서도 내부적으로 보여지는 변수와 밖에서 보일 수 있는 변수를 나누어 캡슐화(encapsulation)시킴


// 1. Class declarations
class Person {
    // constructor 생성자를 이용해 Object를 만들 때 필요한 데이터를 전달
    constructor(name, age) {
        // 전달받은 데이터(name, age)를 fields에 할당
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`Hello! ${this.name}`);
    }
}
const miso = new Person('Miso', 20);
console.log(miso);
miso.speak();



// 2. Getter and Setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // 값 return
    get age() {
        return this._age;
    }

    // 값 setting. 값을 설정하기 때문에 value를 받아와야 함
    set age(value) {
        this._age = value < 0 ? 1 : value;
    }
}

const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age)



// 3. Fields (public, private)
class Experiment {
    // constructor 생성자를 사용하지 않고 field를 추가할 수 있음
    publicField = 'Public Field'; // 외부 접근 가능
    #privateField = 'Private Field'; // class 내부에서만 값 보기, 접근, 변경 가능
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);



// 4. Static properties and methods
class Article {
    // 데이터에 상관 없이 공통적으로 사용되는 값과 메소드를 static키워드를 이용해 작성하면 메모리의 사용을 줄일 수 있음
    static publisher = 'Miso';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // publisher는 Article이라는 class 자체에 붙어있기 때문에 Miso를 출력할 수 있음
Article.printPublisher();



// 5. Inheritance
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`Drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

// Shape에서 정의한 fields와 methods가 포함됨
class Rectangle extends Shape {}
class Triangle extends Shape {
    // 필요한 함수만 재정의 가능(Overwriting)
    draw() {
        super.draw(); // 부모 method 호출
        console.log('🔺');
    }

    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());



// 6. Class checking: instanceOf
// 왼쪽 object가 오른쪽 class의 instance인지 확인
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true