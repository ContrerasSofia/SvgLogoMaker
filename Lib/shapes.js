  function Shape(bgColor, fontColor, text) {
    
    this.bgColor = bgColor;
    this.fontColor = fontColor;
    this.text = text;
    
    this.render = function () {
    };
  }
  
  function Circle(bgColor, fontColor, text) {
    Shape.call(this, bgColor, fontColor, text);

    this.render = function () {
        console.log('circle');
      };
  }

  function Triangle(bgColor, fontColor, text) {
    Shape.call(this, bgColor, fontColor, text);

    this.render = function () {
        console.log('triangle');
      };
  }

  function Square(bgColor, fontColor, text) {
    Shape.call(this, bgColor, fontColor, text);

    this.render = function () {
        console.log('square');
      };
  }
  
  module.exports = {
    Circle,
    Triangle,
    Square
  };
  