const progressRing = (p) => {
    let startDate;
    let endDate;
    let totalDuration;
  
    p.setup = () => {
      p.createCanvas(600, 600);
  
      // 시작일과 종료일 설정
      startDate = new Date('2024-08-26T00:00:00');
      endDate = new Date('2024-12-13T00:00:00');
      totalDuration = endDate - startDate;
    };
  
    p.draw = () => {
      p.background(255);
  
      let currentDate = new Date();
      let elapsedTime = currentDate - startDate;
      let progress = p.map(elapsedTime, 0, totalDuration, 0, 1);
  
      let ringRadius = 250;
      let strokeWidth = 30;
      let ringColor = p.color('pink');
  
      p.strokeWeight(50);
      p.noFill();
      p.stroke(ringColor);
      p.ellipse(p.width / 2, p.height / 2, ringRadius * 2);
  
      // 진행된 부분 그리기
      let endAngle = p.map(progress, 0, 1, -p.HALF_PI, p.TWO_PI - p.HALF_PI);
      p.stroke('#7ac5fa');
      p.arc(p.width / 2, p.height / 2, ringRadius * 2, ringRadius * 2, -p.HALF_PI, endAngle);
  
      // 진행률 텍스트 표시
      let percentComplete = p.int(progress * 100);
      p.fill(0);
      p.textSize(32);
      p.textAlign(p.CENTER, p.CENTER);
      p.strokeWeight(0);
  
      if (percentComplete >= 100) {
        p.text('end!', p.width / 2, p.height / 2); // 완료 시 "end!" 텍스트
      } else {
        p.text(percentComplete + '%', p.width / 2, p.height / 2); // 퍼센트 표시
      }
    };
  };
  
  // HTML의 특정 div에 연결
  new p5(progressRing, 'canvas3');
  