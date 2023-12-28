const bug = document.querySelector('.ladybird');
const upBtn = document.querySelector('#up');
const downBtn = document.querySelector('#down');
const rightBtn = document.querySelector('#right');
const leftBtn = document.querySelector('#left');
const homeBtn = document.querySelector('#home');
const turnClockwiseBtn = document.querySelector('#turnClockWise');
const turnAntiClockwiseBtn = document.querySelector('#turnAntiClockWise');

let rotation = 0;
let xPos = 0;
let yPos = 0;

const turnClockwise = () => {
    rotation +=90;
    bug.style.transform = `rotate(${rotation}deg)`;
};
//turnClockwise();
const turnAntiClockwise = () => {
    rotation -= 90;
    bug.style.transform = `rotate(${rotation}deg)`;
};
const setTransform = () =>{
    bug.style.left = `${xPos}px`;
    bug.style.top = `${yPos}px`;
    
}
const stepLeft = () => {
    xPos >0 && (xPos += -10);
    setTransform();
   // xPos += -10; //crosses boundries
//    bug.style.left = `${xPos}px`;
//    bug.style.top = `${yPos}px`;
};
//stepLeft();
const stepRight = () => {
    xPos <450 && (xPos+=10);
    setTransform();
    // bug.style.left = `${xPos}px`;
    // bug.style.top = `${yPos}px`;
};

const stepUp = () =>{
    yPos >0 && (yPos +=-10);
    setTransform();
};
const stepDown = () =>{
    yPos <450 && (yPos += 10);
    setTransform();
};
const home=()=>{
    xPos = 0;
    yPos = 0;
    setTransform();
};

upBtn.addEventListener('click',stepUp);
downBtn.addEventListener('click',stepDown);
rightBtn.addEventListener('click',stepRight);
leftBtn.addEventListener('click',stepLeft);
homeBtn.addEventListener('click',home);
turnClockwiseBtn.addEventListener('click',turnClockwise);
turnAntiClockwiseBtn.addEventListener('click',turnAntiClockwise);