# Sass 란?
Sass(Syntactically Awesome Stylesheets)는 CSS로 컴파일된 스타일시트 언어.  
CSS와 호환되는 구문으로 변수(variables), 중첩규칙(nested rules), 재활용(mixins), 함수(functions) 등을 사용할 수 있어 길어지는 CSS 코드를 정리하고, 효율적으로 작성할 수 있도록 도와준다.



# SCSS란?
Sass의 3버전에서 만든 새로운 문법.  
CSS와 완전히 호환되며 Sass의 모든 기능을 지원하는 CSS의 상위집합.



# 문법 (Syntax)
## 주석 (Comment)
두개의 주석방식 제공.
```css
/* 컴파일되는 주석 */
// 컴파일되지 않는 주석
```

## 중첩(Nesting)
상위 선택자의 반복을 피하고, 복잡한 구조를 편리하게 작성.
```scss
// SCSS
.box {
  // font-, margin- 등과 같이 동일한 네임스페이스를 가지는 속성들은 아래와 같이 작성 가능.
    font: {
        weight: bold;
        size: 12px;
        family: sans-serif;
    };
    margin: {
        top: 10px;
        left: 20px;
    };
}


// CSS
.box {
  font-weight: bold;
  font-size: 12px;
  font-family: sans-serif;
  margin-top: 10px;
  margin-left: 20px;
}
```

## Ampersand (상위 선택자 참조)
중첩 안에서 `&` 키워드는 상위(부모) 선택자를 참조해 치환.
```scss
// SCSS
.btn {
  color: blue;
  &.active {
    color: pink;
  }
}
.fs {
    &-small {font-size: 12px;}
    &-mediun {font-size: 16px;}
    &-large {font-size: 22px;}
}


// CSS
.btn {
  color: blue;
}
.btn.active {
  color: pink;
}
.fs-small {
  font-size: 12px;
}
.fs-mediun {
  font-size: 16px;
}
.fs-large {
  font-size: 22px;
}
```


## 변수 (Variables)
반복적으로 사용되는 값을 변수로 지정해 사용.  
유효범위: 선언된 블록 {} 내에서 유효범위를 갖는다.
```scss
// SCSS
$color: tomato; // 전역변수

.container {
    $size: 200px; // .container 안에서만 사용 가능
    
    position: fixed;
    top: $size;
    .item {       
        $size: 50px; // js의 let키워드처럼 재할당 가능.
        
        width: $size;
        height: $size;
        transform: translateX($size);
        background-color: $color;
    }

    left: $size;
    // $size가 재할당 된 곳은 .item 범위 내부지만, 
    // 해당하는 변수의 값은 재할당되어 값이 바뀌었기 때문에 .container의 left 속성에는 재할당된 값이 출력됨.
}

// CSS
.container {
  position: fixed;
  top: 200px;
  left: 50px;
}
.container .item {
  width: 50px;
  height: 50px;
  transform: translateX(50px);
  background-color: tomato;
}
```


## 산술연산(Arithmetic Operators)
CSS는 단축속성 사용시 / 기호를 사용해 구분하므로 /가 나누기 연산으로 사용되지 않을 수 있다.
```scss
// SCSS
.box {
    $size: 30px;

    width:  20px + 20px;
    height: 40px - 10px;
    font-size: 10px * 2;
    padding: 10px % 3;   // 나머지값 구하기
    
    // 나누기 연산을 할 떄는 단축속성으로 해석될 것을 우려해 아래 3가지 방법을 사용.
    margin: (30px / 2);   // 1. 소괄호로 묶어서 나누기
    margin: (10px + 20px) / 2;   // 2. 다른 연산자와 같이 사용해 이 코드가 단축속성이 아닌 산술되어야 한다는 것을 명확하게 해줌.
    margin: $size / 2;   // 3. 변수 값을 할당해 나누기 연산자로 사용
    
    padding: calc(100% - 10px);   // 다른 단위의 산술연산은 불가능. calc함수를 통해 해당하는 결과를 만들자.
}


// CSS
.box {
  width: 40px;
  height: 30px;
  font-size: 20px;
  margin: 15px;
  margin: 15px;
  margin: 15px;
  padding: 1px;
  padding: calc(100% - 10px);
}
```


## 재활용(Mixnis)
스타일 시트 전체에서 재사용 할 CSS 선언 그룹을 정의.  
선언하기 @mixin  
포함하기 @include
```scss
// SCSS
@mixin center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    @include center;
}


// CSS
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
```
### 인수(Arguments)
Mixin은 함수(Functions)처럼 인수(Arguments)를 가질 수 있다.  
쉼표로 구분해 여러개의 매개변수를 넣을 수 있다.
```scss
// SCSS
// 콜론 기호를 사용해 기본값 지정 가능. ($width: 2px, $color: #fff)
@mixin dash-line($width, $color) {
  border: $width dashed $color;
}

.box1 { @include dash-line(1px, pink); }
.box2 { @include dash-line(5px, blue); }


// CSS
.box1 {
  border: 1px dashed pink;
}
.box2 {
  border: 5px dashed blue;
}
```
### 키워드 인수(Keyword Arguments)
인수를 입력할 때 명시적으로 키워드(변수)를 입력해 작성 가능.  
별도의 인수 입력 순서를 필요로 하지 않아, 해당하는 이름으로 매칭되어 정확하게 값이 들어갈 수 있다.  
단, 작성하지 않은 인수가 적용될 수 있도록 기본값 설정.
```scss
// SCSS
@mixin position(
  $p: absolute,
  $t: null,
  $b: null,
  $l: null,
  $r: null
) {
  position: $p;
  top: $t;
  bottom: $b;
  left: $l;
  right: $r;
}

.absolute {
  // 키워드 인수로 설정할 값만 전달
  @include position($b: 10px, $r: 20px);
}
.fixed {
  // 인수가 많아짐에 따라 가독성을 확보하기 위해 줄바꿈
  @include position(
    fixed,
    $t: 30px,
    $r: 40px
  );
}


// CSS
.absolute {
  position: absolute;
  bottom: 10px;
  right: 20px;
}
.fixed {
  position: fixed;
  top: 30px;
  right: 40px;
}
```
