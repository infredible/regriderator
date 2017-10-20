//this one selects a color group at random on each click
//it visualizes a grid and composes with large squares

function setup() {

  var colorGroup2 = [
    [251,190,166],
    [255,81,81],
    [190,49,55],
    [204,204,240],
    [88,57,181],
    [255]
  ];

  var colorGroup3 = [
    [242,235,200],
    [255,219,13],
    [120,107,64],
    [255,89,25],
    [138,53,13]
  ];

  var colorGroup4 = [
    [207,252,240],
    [93,240,173],
    [38,176,102],
    [209,102,189],
    [99,10,71]
  ];

  var colorGroup5 = [
    [255,250,171],
    [255,219,13],
    [10,28,107],
    [171,209,250],
    [0,110,252],
    [255]
  ];

  var colorGroup6 = [
    [250,204,212],
    [250,120,136],
    [253,70,100],
    [176,0,143],
    [133,0,107]
  ];

  var colorGroup7 = [
    [193,250,242],
    [0,167,149],
    [7,139,137],
    [242,235,200],
    [163,148,94]
  ];

  var colorGroups = [colorGroup2, colorGroup3, colorGroup4, colorGroup5,
    colorGroup6, colorGroup7];

  var randomColorGroup = random(colorGroups);

  createCanvas(window.innerWidth, window.innerHeight);
  background(color(random(randomColorGroup))); //select a random background color

  //row and column size setup
  var numColumns = 8;
  var numRows = 4;
  var columnSize = width/numColumns;
  var rowSize = height/numRows;


  for (var i = 0; i <= 10; i++){
    colorGroupSelection = random(randomColorGroup.length);

    var xPos = columnSize*Math.floor(random(numColumns));
    var yPos = rowSize*Math.floor(random(numRows));
    var rectWidth = rowSize*Math.floor(random(rowSize));
    var rectHeight = columnSize*Math.floor(random(numColumns/2));


    fill(color(random(randomColorGroup)));
    noStroke();
    rect(xPos,yPos,rectWidth,rectWidth);
  }
}

function draw() {
  if (mouseIsPressed) {
      setup();
  }
}
