const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
const tempResult = document.querySelector(".temp-result");
const numbers = document.querySelectorAll(".number");
const operationE = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAllEl = document.querySelector(".clear");
const clearLastEl = document.querySelector(".clear-last");
let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    display2.innerText = dis2Num;
    
  });
});

operationE.forEach((operation) =>{
    operation.addEventListener('click',(e)=>{
        if(!dis2Num)result;
        haveDot=false;
        const operationName =e.target.innerText;
        if(dis1Num && dis2Num && lastOperation){
            mathOperation();
        }else{
            result=parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
    })
})

function clearVar(name =''){
dis1Num +=dis2Num + ' '+ name+ ' ';
display1.innerText = dis1Num;
display2.innerText = '';
dis2Num= '';
}

function mathOperation(){
  switch(lastOperation){
    case 'x': result = parseFloat(result)*parseFloat(dis2Num);break;
    case '+': result = parseFloat(result)+parseFloat(dis2Num);break;
    case '-': result = parseFloat(result)-parseFloat(dis2Num);break;
    case '/': result = parseFloat(result)/parseFloat(dis2Num);break;
    case '%': result = parseFloat(result)%parseFloat(dis2Num);break;
  }
}

equalEl.addEventListener('click',(e)=>{
  if(!dis2Num  || !dis1Num) return;
  haveDot = false; 
  mathOperation();
  clearVar();
  display2.innerText = result;
  dis2Num = result;
  dis1Num = '';
})

clearAllEl.addEventListener('click',(e)=>{
  display1.innerText= '';
  display2.innerText= '';
  dis1Num='';
  dis2Num='';
  result='';
})

clearLastEl.addEventListener('click',(e)=>{
  display2.innerText = '';
  dis2Num = '';
})

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
  
  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
    clickOperation(e.key);
  } else if (e.key === "*") {
    clickOperation("x");
    
  } else if (e.key == "Enter" || e.key === "=") {
    clickEqual();
  }
  
});
function clickButtonEl(key) {
  numbers.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}
function clickOperation(key) {
  operationE.forEach((operation) => {
    if (operation.innerText === key) {
      operation.click();
    }
  });
}
function clickEqual() {
  equalEl.click();
}