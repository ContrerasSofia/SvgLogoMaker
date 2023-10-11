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

    function renderShape(){
        var fs = require('fs');
        var content = logo.render();
        console.log(content);
        content = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">'+ content + '</svg>';
        fs.writeFile("logo.svg", content , function(err) {
            if (err) {
                return console.log(err);
            }
         console.log("El archivo fue creado correctamente");
        });
    }

    function validateData(response){
        if((response.text.trim().length > 2) && (response.fontColor.trim().length > 2) && (response.backgroundColor.trim().length > 2)){
            const shapeType = response.shapeType.trim().toLowerCase()
            switch (shapeType) {
                case 'circle':
                    logo = new shape.Circle( response.backgroundColor.trim().toLowerCase(), response.fontColor.trim().toLowerCase(), response.text.trim().toLowerCase());
                    return true;
                case 'triangle':
                    logo = new shape.Triangle(response.backgroundColor.trim().toLowerCase(), response.fontColor.trim().toLowerCase(), response.text.trim().toLowerCase());
                    return true;
                case 'square':
                    logo = new shape.Square(response.backgroundColor.trim().toLowerCase(), response.fontColor.trim().toLowerCase(), response.text.trim().toLowerCase());
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
