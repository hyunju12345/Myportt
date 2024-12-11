const bouncingCircleSketch = (p) => {
    let circleY = 200; // 원의 초기 y 좌표
    let speed = 2; // 원이 움직이는 속도
  
    p.setup = () => {
      p.createCanvas(400, 400);
      p.rectMode(p.CENTER); // 사각형의 기준점을 중심으로 설정
    };
  
    p.draw = () => {
      p.background('black');
  
      // 사각형 패턴 그리기
      for (let i = 0; i < 15; i++) {
        if (i % 2 == 0) {
          p.noFill();
          p.strokeWeight(i * 2);
          p.stroke('white');
        } else {
          p.noFill();
          p.strokeWeight(i * 1);
          p.stroke('white');
        }
        p.rect(200, 200, i * 40, i * 40); // 사각형 그리기
      }
  
      // 원의 y 위치를 업데이트
      circleY += speed;
  
      // y 좌표가 아래쪽 경계에 도달하면 방향 반전
      if (circleY > p.height || circleY < 0) {
        speed *= -1;
      }
  
      // y 값에 따라 원의 크기 변경 (400에 가까워질수록 커짐)
      let circleSize = p.map(circleY, 200, 400, 20, 80); // y 좌표에 따라 크기 변환
  
      // 원 그리기
      p.fill('white');
      p.noStroke();
      p.ellipse(200, circleY, circleSize, circleSize);
    };
  };
  
  // HTML의 특정 div에 연결
  new p5(bouncingCircleSketch, 'canvas5');
  