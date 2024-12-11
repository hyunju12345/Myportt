const pineappleSketch = (p) => {
    p.setup = () => {
      p.createCanvas(400, 600);
    };
  
    p.draw = () => {
      p.background("#edd5d1");
  
      // 파인애프 꼬다리
      p.fill('#6ecc76');
      p.triangle(170, 430, 150, 550, 200, 460);
      p.triangle(230, 430, 250, 550, 200, 460);
      p.triangle(175, 430, 200, 550, 220, 460);
  
      // 파인애플 다리 만들기
      p.fill('#ffda61');
      p.ellipse(200, 375, 130, 200);
  
      // 몸
      p.fill('white');
      p.ellipse(200, 290, 180, 230);
  
      // 가리기
      p.noStroke();
      p.fill('#ffda61');
      p.rect(138, 370, 124, 10);
      p.rect(140, 380, 121, 10);
      p.rect(140, 390, 120, 10);
      p.ellipse(200, 410, 80, 50);
  
      // 파인애플 선
      p.strokeWeight(5);
      p.stroke('#94280a');
      p.line(135, 370, 250, 430);
      p.line(137, 400, 238, 455);
      p.line(150, 435, 215, 470);
      p.line(185, 370, 260, 405);
  
      p.line(265, 370, 150, 430);
      p.line(263, 400, 162, 455);
      p.line(250, 435, 185, 470);
      p.line(215, 370, 140, 405);
  
      p.strokeWeight(5);
      p.stroke('#94280a');
      p.line(135, 370, 265, 370);
  
      p.fill('#94280a');
      p.circle(200, 330, 10);
      p.circle(200, 300, 10);
  
      // 목도리
      p.fill('#cc2727');
      p.ellipse(200, 200, 50, 200);
      p.ellipse(230, 200, 50, 200);
      p.ellipse(200, 200, 130, 100);
  
      // 얼굴
      p.fill('#a66533');
      p.ellipse(200, 150, 140, 130);
      p.strokeWeight(3);
      p.stroke('white');
      p.fill('white');
      p.circle(170, 150, 20);
      p.circle(230, 150, 20);
      p.fill('black');
      p.circle(170, 150, 19);
      p.circle(230, 150, 19);
      p.fill('white');
      p.circle(165, 145, 5);
      p.circle(225, 145, 5);
  
      // 입술
      p.smilling(200, 175, 50, 20);
    };
  
    // smilling 함수
    p.smilling = (x, y, width, height) => {
      p.strokeWeight(5);
      p.stroke('#94280a');
      p.noFill();
      p.arc(x, y, width, height, 0, p.PI);
    };
  };
  
  // HTML의 특정 div에 연결
  new p5(pineappleSketch, 'canvas4');
  