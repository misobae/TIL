# 개요
<a href="https://nomadcoders.co/javascript-for-beginners-2" target="_blank">노마드 코더</a> 바닐라 JS로 그림판 만들기 강의를 통해 만든 그림판입니다.

# Canvas API
`JavaScript`와 `HTML <canvas> 엘리먼트`를 통해 그래픽을 그리기위한 수단을 제공합니다.  
`<canvas> 엘리먼트`는 고정 크기의 드로잉 영역을 생성하고 하나 이상의 렌더링 컨텍스(rendering contexts)를 노출하여, 출력할 컨텐츠를 생성하고 다루게 됩니다.


# 경로를 그리는 단계
1. 경로를 생성합니다. (경로는 도형을 이루는 하위경로(선, 아치 등)들의 집합으로 이루어져있습니다.)
2. 그리기 명령어를 사용하여 경로상에 그립니다.
3. 경로가 한번 만들어졌다면, 경로를 렌더링 하기 위해서 윤곽선을 그리거나 도형 내부를 채울수 있습니다.  

# 기능
## canvas.getContext()
캔버스는 처음에 비어있습니다. 무언가를 표시하기 위해서, 어떤 스크립트가 랜더링 컨텍스트에 접근하여 그리도록 할 필요가 있습니다. `<canvas> 엘리먼트`는 getContext() 메서드를 이용해 랜더링 컨텍스트와 그리기 함수들을 사용할 수 있습니다.  
getContext() 메서드는 렌더링 컨텍스트 타입을 지정하는 하나의 Parameter를 가집니다.  
<a href="https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement/getContext" target="_blank">getContext 메서드에 대한 자세한 내용은 MDN 참고</a>

## 1. 경로생성 함수
### beginPath()
새로운 경로를 만듭니다.  
이 메소드가 호출될 때 마다, 하위 경로의 모음은 초기화되며, 새로운 도형을 그릴 수 있게 됩니다.

## 2. 그리기 함수
### moveTo(x, y)
선이 시작될 좌표를 설정합니다.

### lineTo(x, y)
선이 끝나는 좌표를 설정합니다.  
lineTo() 함수를 연속적으로 사용할 때의 시작 위치는 이전 선 그리기가 끝난 위치로 자동 설정됩니다.

### stroke()
윤곽선을 이용하여 도형을 그립니다.

## 3. 채우기 함수
### filltyle
도형 내부에 사용할 색상, 그라디언트 또는 패턴을 지정합니다. 
```javascript
// option
ctx.fillStyle = color;
ctx.fillStyle = gradient;
ctx.fillStyle = pattern;
```

### fillRect(x, y, width, height)
사각형을 그리기 시작할 시작점의 x, y값과 width, height값을 받아 채워진 사각형을 그립니다.  
채우기 스타일은 현재 fillStyle 속성에 의해 결정됩니다.