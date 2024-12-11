const sketch2 = (p) => {
    p.setup = () => {
      p.createCanvas(400, 400);
    };
  
    p.draw = () => {
      p.background('#000000');
  
      let faceWidth = p.map(p.mouseX, 0, p.width, 100, 300);
      let faceHeight = p.map(p.mouseY, 0, p.height, 100, 280);
  
      p.fill(p.random(0, 50), p.random(100, 255), p.random(0, 50));
      p.ellipse(200, 200, faceWidth, faceHeight);
  
      let eyeWidth = faceWidth / 3;
      let eyeHeight = faceHeight / 3.5;
      let pupilWidth = eyeWidth / 2;
      let pupilHeight = eyeHeight / 1;
  
      p.fill('#ffffff');
      p.ellipse(200 - faceWidth / 4, 200, eyeWidth, eyeHeight);
      p.fill('black');
      p.ellipse(200 - faceWidth / 4, 200, pupilWidth, pupilHeight);
  
      p.fill('#ffffff');
      p.ellipse(200 + faceWidth / 4, 200, eyeWidth, eyeHeight);
      p.fill('black');
      p.ellipse(200 + faceWidth / 4, 200, pupilWidth, pupilHeight);
    };
  };
  
  // 'canvas2'라는 div에 p5.js 인스턴스 연결
  new p5(sketch2, 'canvas2');
  