var GAME = {
  canvas : {
    width : 600,
    height : 300
  },
  started : true,
  level : 1
};

var SPACE_SHIP = {
  initialized : false,
  bullets : [],
  latest : {
    x : 0,
    y : 0
  }
};

var SQUARE_COORDINATES = {
  x : 550,
  x2 : 550
};

var randomStuff = {
  x : Math.floor ((Math.random () * 100) + 50),
  heightOnCanvas : 300 - Math.floor ((Math.random () * 100) + 25),
  height : Math.floor ((Math.random () * 100) + 25)
};

var howFast = {
  fastOne : 1,
}

var NEW_OBJECT = {
  x : 300,
  y : 150
};
