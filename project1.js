const sketch1 = (p) => {
    p.setup = () => {
      p.createCanvas(400, 400);
    };
  
    p.draw = () => {
      p.background(220);
      p.strokeWeight(1);
      p.fill('#737373');
      p.rect(0, 0, 400);
      p.fill('#999999');
      p.rect(10, 0, 390);
      p.fill('#593514');
      p.circle(130, 200, 40);
      p.fill('#fce2ca');
      p.rect(170, 200, 60, 100);
      p.fill('#e3c8af');
      p.ellipse(200, 200, 70, 90);
      p.triangle(300, 150, 200, 100, 200, 200);
      p.fill("#fce2ca");
      p.ellipse(200, 150, 140, 160);
  
      p.fill('black');
      p.ellipse(240, 140, 20, 20);
      p.fill('#fce2ca');
      p.arc(180, 150, 30, 50, -30, p.PI + p.QUARTER_PI, p.OPEN);
      p.fill('#593514');
      p.arc(200, 150, 140, 160, 40, 80, p.PI + p.QUARTER_PI, p.CHORD);
      p.arc(200, 150, 140, 160, 180, 100, p.PI + p.QUARTER_PI, p.CHORD);
      p.fill('#3d4f3a');
      p.ellipse(280, 370, 50, 60);
      p.ellipse(200, 370, 160, 200);
      p.fill('#d4a3a3');
      p.ellipse(250, 195, 30, 5);
      p.ellipse(250, 190, 30, 5);
      p.fill('#8c6c48');
      p.ellipse(235, 120, 30, 2);
      p.fill('#2e3d2b');
      p.ellipse(200, 380, 55, 100);
      p.fill('#5c5c5c50');
      p.triangle(160, 80, 25, 400, 200, 400);
      p.triangle(160, 80, 10, 400, 130, 400);
      p.fill('#737373');
      p.rect(0, 390, 400, 10);
    };
  };
  
  // 'canvas1'이라는 div에 p5.js 인스턴스 연결
  new p5(sketch1, 'canvas1');
  