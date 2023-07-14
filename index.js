const inquirer = require('inquirer');
const ques = require('./Lib/question.js');
const shape = require('./Lib/shapes.js');
let logo;

  function init() {
    inquirer
        .prompt(ques.questions)
        .then((response) =>
            validateData(response)
            ? renderShape(response)
            : console.log('Wrong data')
        );
    }

    function renderShape(response){
        logo.render();
    }

    function validateData(response){
        if((response.text.trim().length > 2) && (response.fontColor.trim().length > 2) && (response.backgroundColor.trim().length > 2)){
            const shapeType = response.shapeType.trim().toLowerCase()
            switch (shapeType) {
                case 'circle':
                    logo = new shape.Circle(response.text.trim().toLowerCase(), response.fontColor.trim().toLowerCase(), response.shapeType.trim().toLowerCase(), response.backgroundColor.trim().toLowerCase());
                    return true;
                case 'triangle':
                    logo = new shape.Triangle(response.text.trim().toLowerCase(), response.fontColor.trim().toLowerCase(), response.shapeType.trim().toLowerCase(), response.backgroundColor.trim().toLowerCase());
                    return true;
                case 'square':
                    logo = new shape.Square(response.text.trim().toLowerCase(), response.fontColor.trim().toLowerCase(), response.shapeType.trim().toLowerCase(), response.backgroundColor.trim().toLowerCase());
                    return true;
                default:
                    console.log('Wrong shape type');
                  return false;
            }
        }else
            return false;
    }
// Function call to initialize app
init();
