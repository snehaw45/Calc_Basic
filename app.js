const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");
const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");
let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbersEl.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    display2El.innerText = dis2Num;
    // console.log();
  });
});

operationEl.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2Num) return;
    haveDot = false;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  });
});
function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  display1El.innerText = dis1Num;
  display2El.innerText = "";
  dis2Num = "";
  tempResultEl.innerText = result;
}

function mathOperation() {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(dis2Num);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(dis2Num);
  }
}
// operation();

equalEl.addEventListener("click", () => {
  if (!dis2Num || !dis1Num) return;
  haveDot = false;
  mathOperation();
  clearVar();
  display2El.innerText = result;
  tempResultEl.innerText = "";
  dis2Num = result;
  dis1Num = "";
});

clearAllEl.addEventListener("click", () => {
  dis1Num = "";
  dis2Num = "";
  display1El.innerText = "";
  display2El.innerText = "";
  result = "";
  tempResultEl.innerText = "";
});

clearLastEl.addEventListener("click", () => {
  display2El.innerText = "";
  dis2Num = "";
});

window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    clickButtonEl(e.key);
    // console.log(e.key)
  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
    clickOperation(e.key);
  } else if (e.key === "*") {
    clickOperation("x");
    // console.log(e.key)
  } else if (e.key == "Enter" || e.key === "=") {
    clickEqual();
  }
  // console.log(e.key)
});
function clickButtonEl(key) {
  numbersEl.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}
function clickOperation(key) {
  operationEl.forEach((operation) => {
    if (operation.innerText === key) {
      operation.click();
    }
  });
}
function clickEqual() {
  equalEl.click();
}

// const display1 = document.querySelector('.display1');
// const display2 = document.querySelector('.display2');
// const totaldisp = document.querySelector('.totaldisp');
// const number1 = document.querySelector('number');
// const display2 = document.querySelector('.display2');
// const operation1 = document.querySelector('.optn');
// const equal1 = document.querySelector('.equal');
// const clear1 = document.querySelector('.allc');
// const clearlast = document.querySelector('.lastc');

// let dis1num = '';
// let dis2num = '';
// let result = null;
// let lastoperation = '';
// let haveDot = false;

// number1.forEach(nunber => {
//     number.addEventListener('click',(e)=>{
//         if(e.target.innerText === '.' && !haveDot){
//             haveDot=true;
//         }else if(e.target.innerText === '.' && haveDot){
//             return;
//         }
//         dis2num += e.target.innerText;
//         display2.innerText = dis2num;
//     })
// });

// operation1.forEach(operation => {
//     operation.addEventListener('click',(e)=>{
//         if(!dis2num) result;
//         haveDot=false;
//         const operationname = e.target.innerText;
//         if(dis1num && dis2num && lastoperation){
//             mathOperation();
//         }else{
//             result = parseFloat(dis2num);
//         }
//         clearVar(operationname);
//         console.log(result);
//     })
// });

// function clearVar(name = ''){
//     dis1num += dis2num+ ' ' + name + ' ';
//     display1.innerText = dis1num;
//     display2.innerText = '';
//     dis2num = '';
//     totaldisp.innerText = result;
// }

// function mathOperation(){
//     if(lastoperation === 'X'){
//         result = parseFloat(result)*parseFloat(dis2num);
//     }else if(lastoperation === '+'){
//         result = parseFloat(result)+parseFloat(dis2num);
//     }else if(lastoperation === '-'){
//         result = parseFloat(result)-parseFloat(dis2num);
//     }else if(lastoperation === '/'){
//         result = parseFloat(result)/parseFloat(dis2num);
//     }else if(lastoperation === '%'){
//         result = parseFloat(result)%parseFloat(dis2num);
//     }
// }

// equal1.addEventListener('click',(e)=>{
//     if(!dis1num || !dis2num) return;
//     haveDot = false;
//     mathOperation();
//     clearVar();
//     display1.innerText = result;
//     totaldisp.innerText = '';
//     dis2num = result;
//     dis1num = '';
// });

// clear1.addEventListener("click",(e)=>{
//     display1.innerText = '0';
//     display2.innerText = '0';
//     dis1num = '';
//     dis2num = '';
//     result = '';
//     totaldisp.innerText = '0';
// });

// clearlast.addEventListener('click',(e)=>{
//     display2.innerText = '';
//     dis2num = '';
// });

// window.addEventListener('keydown',(e)=>{
//     if(
//         e.key ==='0'||
//         e.key ==='1'||
//         e.key ==='2'||
//         e.key ==='3'||
//         e.key ==='4'||
//         e.key ==='5'||
//         e.key ==='6'||
//         e.key ==='7'||
//         e.key ==='8'||
//         e.key ==='9'||
//         e.key ==='.'
//     ){
//         clickButton(e.key);
//     }else if(
//         e.key === '+'||
//         e.key === '-'||
//         e.key === '%'
//     ){
//         clickOperation(e,key);
//     }else if(e.key == 'Enter' || e.key === "="){
//         clickequal();
//     }else if(e.key==="*"){
//         clickOperation('X');
//     }
// });

// function clickButton(key){
//     number1.forEach(button =>{
//         if(button.innerText === key){
//             button.click();
//         }
//     })
// }

// function clickOperation(key){
//     operation1.forEach(button => {
//         if(button.innerText === key){
//             button.click();
//         }
//     })
// }

// function clickequal(){
//     equal1.click();
// }
// body{
//     background: #f12711;  /* fallback for old browsers */
//     background: -webkit-linear-gradient(to right, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */
//     background: linear-gradient(to right, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
// }

// *{
//     padding:0;
//     margin:0;
//     box-sizing: border-box;
// }
// html{
//     font-family: 'Montserrat';
// }

// section{
//     background-color: rgb(18,26,31);
//     min-height: 100vh;
//     width:100%;
//     display:flex;
//     align-items: center;
//     justify-content:center;    
// }
// .container{
//     width:90%;
//     max-width: 400px !important;
//     background-color: rgb(39, 55, 59);
//     border-radius: 8px;
//     overflow:hidden;
// }
// .display{
//     background-color: rgb(182,182,182);
//     height:100px;
//     width:100%;
//     text-align:right;
//     padding: 20px;
//     font-size: 30px;
//     position:relative;
// }
// .display1{
//     opacity:.4;
//     font-size:20px;
//     height:20px;
//     overflow:hidden;
// }

// .totaldisplay{
//     position:absolute;
//     bottom:0;
//     left:10;
//     font-size:20px;
//     opacity:.4;
// }

// .allbtn{
//     color:white;
//     display:grid;
//     grid-template: repeat(4,1fr)/repeat(4,1fr);
// }

// .btn{
//     border:.5px solid rgba(92,92,92,0.137);
//     height:100px;;
//     width:100%;
//     display:flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 30px;
//     cursor:pointer;
// }
// .btn:hover{
//     background-color:rgb(30,43,46);
// }
// .zero{
//     grid-column:1/3;
// }