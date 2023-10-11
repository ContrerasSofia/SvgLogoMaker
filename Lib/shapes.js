  function Shape(bgColor, fontColor, text) {
    
    this.bgColor = bgColor;
    this.fontColor = fontColor;
    this.text = text;
    this.textTag =' <text x="150" y="112.25" font-size="50" text-anchor="middle" fill="' + this.fontColor + '">' + this.text + '</text>';
    
    this.render = function () {
    };
    this.getSvg; 
  }
  
  function Circle(bgColor, fontColor, text) {
    Shape.call(this, bgColor, fontColor, text);

    this.render = function () {
      let shapeTag = '<circle cx="150" cy="100" r="80" fill="'+ this.bgColor +'" />' + this.textTag;
      return (shapeTag);
      };
  }

  function Triangle(bgColor, fontColor, text) {
    Shape.call(this, bgColor, fontColor, text);
    
    this.render = function () {
      let shapeTag = '<polygon points="150, 18 244, 182 56, 182" fill=" '+ this.bgColor +' " />' + this.textTag;
      return (shapeTag);
      };
  }

  function Square(bgColor, fontColor, text) {
    Shape.call(this, bgColor, fontColor, text);

    this.render = function () {
      let shapeTag = '<rect width="100%" height="100%" fill=" '+ this.bgColor +' " />' + this.textTag;
      return (shapeTag);
      };
  }
  
  module.exports = {
    Circle,
    Triangle,
    Square
  };
  