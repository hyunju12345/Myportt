const waterGlassesSketch = (p) => {
    let days = [
      { day: "Monday", glasses: 8 },
      { day: "Tuesday", glasses: 11 },
      { day: "Wednesday", glasses: 7 },
      { day: "Thursday", glasses: 10 },
      { day: "Friday", glasses: 13 },
      { day: "Saturday", glasses: 10 },
      { day: "Sunday", glasses: 9 },
    ];
  
    let maxGlasses = 12;
    let currentDay = 0;
  
    p.setup = () => {
      p.createCanvas(800, 300);
      p.frameRate(0.5);
    };
  
    p.draw = () => {
      p.background("#ffbaba");
  
      p.textSize(40);
      p.textAlign(p.CENTER);
      p.noStroke();
      p.fill("white");
      p.text(days[currentDay].day, p.width / 2, 65);
  
      drawWaterGlasses(days[currentDay].glasses);
  
      currentDay = (currentDay + 1) % days.length;
    };
  
    function drawWaterGlasses(filled) {
      let spacing = p.width / 12;
  
      for (let i = 0; i < 12; i++) {
        let x = i * spacing + spacing / 2;
        let y = p.height - 85;
  
        p.strokeWeight(4);
        p.stroke("white");
        p.fill("#ffd6d6");
        p.rect(x - 20, y - 100, 40, 100);
  
        p.fill("white");
        p.circle(x, y + 40, 30);
        p.fill("#ffadad");
        p.textSize(20);
        p.textAlign(p.CENTER, p.CENTER);
        p.text(i + 1, x, y + 40);
  
        if (i < filled) {
          p.noStroke();
          p.fill("#86c4db");
          let waterHeight = 100 * (i + 1) / 12;
          p.rect(x - 20, y - waterHeight, 40, waterHeight);
        }
  
        p.noStroke();
        p.fill(255, 255, 255, 127);
        p.rect(x - 15, y - 100, 10, 100);
        p.fill(255, 255, 255, 200);
        p.rect(x - 13, y - 100, 3, 100);
  
        p.noStroke();
        p.fill(255, 112, 112, 50);
        p.rect(x + 7, y - 97, 9, 95);
  
        p.fill("white");
        p.rect(0, 20, 800, 8);
      }
    }
  };
  
  // HTML의 특정 div에 연결
  new p5(waterGlassesSketch, "canvas6");
  