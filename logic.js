let inputBox = document.getElementById("inputBox");
let textBox = document.getElementById("textBox");
let svgBall = document.getElementById("svgBall");


//check for text in box, if text, continue, if not output NO QUESTION ENTERED or something

svgBall.addEventListener('click', function(){

    let question = inputBox.value;

    if (question){
        let randomNumber = Math.floor(Math.random() *8);
        let eightBall = '';
        let color = '';
    
        switch(randomNumber){
        case 0:
            eightBall = 'It is certain';
            color = 'green';
            break;
        case 1:
            eightBall = 'It is decidedly so';
            color = 'green';
            break;
        case 2:
            eightBall = 'Reply hazy try again';
            color = 'yellow';
            break;
        case 3:
            eightBall = 'Cannot predict now';
            color = 'yellow';
            break;
        case 4:
            eightBall = 'Do not count on it';
            color = 'red';
            break;
        case 5:
            eightBall = 'My sources say no';
            color = 'red';
            break;
        case 6:
            eightBall = 'Outlook not so good';
            color = 'red';
            break;
        case 7:
            eightBall = 'Signs point to yes';
            color = 'green';
            break;
        default:
            eightBall = 'error computing';
            break;
        }
        textBox.classList = [];
        textBox.classList.add(color);
        textBox.innerText = eightBall;
    } else {
        textBox.classList = [];
        textBox.innerText = 'Please enter a yes or no question';
    };

});

