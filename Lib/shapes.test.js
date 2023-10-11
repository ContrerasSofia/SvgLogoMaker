const Shapes = require('./shapes.js');

// A testing suite for Circle is created.
describe('Circle', () => {
  // A test is created to check that render does in fact return a circle.
  describe('Circle', () => {
    it('should create a circle', () => {
      const bgColor =  'black';
      const fontColor = 'white';
      const text = "test";
      const newCircle = new Shapes.Circle(bgColor, fontColor, text);
      expect(newCircle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="black" /> <text x="150" y="112.25" font-size="50" text-anchor="middle" fill="white">test</text>');
    });
  });
});

// A testing suite for Triangle is created.
describe('Triangle', () => {
    // A test is created to check that render does in fact return a triangle.
    describe('Triangle', () => {
      it('should create a triangle', () => {
        const bgColor =  'black';
        const fontColor = 'white';
        const text = "test";
        const newTriangle = new Shapes.Triangle(bgColor, fontColor, text);
        expect(newTriangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill=" black " /> <text x="150" y="112.25" font-size="50" text-anchor="middle" fill="white">test</text>');
      });
    });
  });

  // A testing suite for Squeare is created.
describe('Square', () => {
    // A test is created to check that render does in fact return a square.
    describe('Squeare', () => {
      it('should create a squeare', () => {
        const bgColor =  'black';
        const fontColor = 'white';
        const text = "test";
        const newSquare = new Shapes.Square(bgColor, fontColor, text);
        expect(newSquare.render()).toEqual('<rect width="100%" height="100%" fill=" black " /> <text x="150" y="112.25" font-size="50" text-anchor="middle" fill="white">test</text>');
      });
    });
  });