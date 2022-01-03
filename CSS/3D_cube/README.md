# CSS 3D Cube
CSS의 transform 속성을 활용해 3D 공간을 만들어 입체 큐브를 회전시키는 애니매이션 구현.

## perspective
z축을 따라 하위 요소를 관찰하는 원근 거리(깊이감) 설정.  
요소가 관찰자에서 멀어질 수록 더 작게 보임.  
기준점은 perspective-origin 속성으로 설정. (default: 50% 50%)

## transform-style: preserve-3d
transform-style: preserve-3d는 perspective를 부모요소로부터 받아 자식까지 전달되도록 함