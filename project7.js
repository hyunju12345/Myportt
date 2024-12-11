let level = 1;
let player;
let items = [];
let gameState = "start";
let my_button;
let playerImages = [];
let startScene;
let sceneImages = [];
let itemImages = {};

function preload() {
  startScene = loadImage('444.png');

  sceneImages[1] = loadImage('scene1.png');
  sceneImages[2] = loadImage('scene2.png');
  sceneImages[3] = loadImage('scene3.png');
  sceneImages[4] = loadImage('scene4.png');
  sceneImages[5] = loadImage('scene5.png');
  sceneImages[6] = loadImage('scene6.png');
  sceneImages[7] = loadImage('scene7.png');
  sceneImages[8] = loadImage('scene8.png');

  playerImages[1] = loadImage('player_highschool.png');
  playerImages[3] = loadImage('player_cafe.png');
  playerImages[4] = loadImage('player_study.png');
  playerImages[6] = loadImage('player_lifeguard.png');

  itemImages["item1"] = loadImage('item1.png');
  itemImages["item2"] = loadImage('item2.png');
  itemImages["item3"] = loadImage('item3.png');
  itemImages["item4"] = loadImage('item4.png');
  itemImages["item5"] = loadImage('item5.png');
  itemImages["item6"] = loadImage('item6.png');
  itemImages["item7"] = loadImage('item7.png');
  itemImages["item8"] = loadImage('item8.png');
  itemImages["item9"] = loadImage('item9.png');
  itemImages["item10"] = loadImage('item10.png');
  itemImages["item11"] = loadImage('item11.png');
  itemImages["item12"] = loadImage('item12.png');
  itemImages["item13"] = loadImage('item13.png');
  itemImages["item14"] = loadImage('item14.png');
  itemImages["item15"] = loadImage('item15.png');
  itemImages["item16"] = loadImage('item16.png');
  itemImages["item17"] = loadImage('item17.png');
  itemImages["item18"] = loadImage('item18.png');
  itemImages["item19"] = loadImage('item19.png');
  itemImages["item20"] = loadImage('item20.png');
}

function setup() {
  let canvas = createCanvas(700, 500); // 캔버스를 canvas7에 연결
  canvas.parent('canvas7'); // canvas7 div에 추가
  player = new Player(50, height - 50, playerImages[1]);
  setupLevel();

  my_button = createButton('Start');
  my_button.position(320, 330);
  my_button.size(100, 50);
  my_button.mousePressed(gameStart);
}

function draw() {
  background(220);

  if (gameState == "start") {
    startScreen();
  } else if (gameState == "play") {
    playGame();
  } else if (gameState == "end") {
    endScreen();
  }
}

function startScreen() {
  background(220);
  imageMode(CENTER);
  image(startScene, width / 2, height / 2, 700, 500);
}

function endScreen() {
  fill(0);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("Game End", width / 2, height / 2 - 20);
}

function playGame() {
  if (sceneImages[level]) {
    image(sceneImages[level], width / 2, height / 2, 700, 500);
  }

  if (level == 1) {
    showScene("High School", "Collect items");
    collectItemsScene();
  } else if (level == 2) {
    showScene("", "Press the space bar to proceed");
  } else if (level == 3) {
    showScene("Cafe Part-Time Job", "Collect items");
    collectItemsScene();
  } else if (level == 4) {
    showScene("Library", "Collect items");
    collectItemsScene();
  } else if (level == 5) {
    showScene("", "Press the space bar to proceed");
  } else if (level == 6) {
    showScene("Lifeguard Job", "Collect items");
    collectItemsScene();
  } else if (level == 7) {
    showScene("", "Press the space bar to proceed");
  } else if (level == 8) {
    showScene("", "Press the space bar to end the game.");
  }
}

function keyPressed() {
  if (gameState == "play" && keyCode == 32) {
    if (level == 2 || level == 5 || level == 7) {
      nextScene();
    } else if (level == 8) {
      gameState = "end";
    }
  }
}

function collectItemsScene() {
  player.display();
  player.move();
  displayItems();
  checkItemCollection();

  if (items.length == 0) {
    levelUp();
  }
}

function gameStart() {
  gameState = "play";
  my_button.hide();
}

function setupLevel() {
  items = [];
  player.img = playerImages[level];

  if (level == 1) {
    items.push(
      new Item(100, 200, itemImages["item1"]),
      new Item(400, 300, itemImages["item2"]),
      new Item(300, 400, itemImages["item3"]),
      new Item(200, 250, itemImages["item4"]),
      new Item(500, 350, itemImages["item5"])
    );
  } else if (level == 3) {
    items.push(
      new Item(150, 250, itemImages["item6"]),
      new Item(200, 350, itemImages["item7"]),
      new Item(250, 300, itemImages["item8"]),
      new Item(530, 120, itemImages["item9"]),
      new Item(450, 400, itemImages["item10"])
    );
  } else if (level == 4) {
    items.push(
      new Item(200, 200, itemImages["item11"]),
      new Item(450, 300, itemImages["item12"]),
      new Item(250, 350, itemImages["item13"]),
      new Item(350, 250, itemImages["item14"]),
      new Item(300, 450, itemImages["item15"])
    );
  } else if (level == 6) {
    items.push(
      new Item(150, 250, itemImages["item16"]),
      new Item(400, 300, itemImages["item17"]),
      new Item(350, 400, itemImages["item18"]),
      new Item(250, 300, itemImages["item19"]),
      new Item(450, 250, itemImages["item20"])
    );
  }
}

function showScene(title, instruction) {
  fill(100);
  textSize(30);
  textAlign(CENTER);
  text(title, width / 2, 40);
  textSize(18);
  text(instruction, width / 2, 70);
}

function levelUp() {
  level++;
  setupLevel();
}

function nextScene() {
  level++;
  setupLevel();
}

function checkItemCollection() {
  for (let i = items.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, items[i].x, items[i].y) < 20) {
      items.splice(i, 1);
    }
  }
}

function displayItems() {
  for (let item of items) {
    item.display();
  }
}

class Player {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.size = 200;
    this.img = img;
  }

  display() {
    if (this.img) {
      image(this.img, this.x, this.y, this.size, this.size);
    } else {
      fill(0, 0, 255);
      ellipse(this.x, this.y, this.size);
    }
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) this.x -= 2;
    if (keyIsDown(RIGHT_ARROW)) this.x += 2;
    if (keyIsDown(UP_ARROW)) this.y -= 2;
    if (keyIsDown(DOWN_ARROW)) this.y += 2;
  }
}

class Item {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.size = 200;
    this.img = img;
  }

  display() {
    if (this.img) {
      image(this.img, this.x, this.y, this.size, this.size);
    } else {
      fill(255, 0, 0);
      ellipse(this.x, this.y, this.size);
    }
  }
}
