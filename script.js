// js

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let divide = document.querySelector(".divide");
let multiply = document.querySelector(".multiply");
let point = document.querySelector(".point");
let clear = document.querySelector(".clear");
let equals = document.querySelector(".equals");


let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let six = document.querySelector(".six");
let five = document.querySelector(".five");
let four = document.querySelector(".four");
let three = document.querySelector(".three");
let two = document.querySelector(".two");
let one = document.querySelector(".one");
let zero = document.querySelector(".zero");

let display = document.querySelector(".display");

let tempNum = "";
let num1 = "";
let num2 = "";
let operator = "";
let result = "";

one.addEventListener("click", () => {
    result = "";
    if (tempNum.length === 9) {
        tempNum += "";
    } else {
    tempNum += "1";  
    display.textContent = tempNum;
    }
});

two.addEventListener("click", () => {
    result = "";
    if (tempNum.length === 9) {
        tempNum += "";
    } else {
    tempNum += "2";  
    display.textContent = tempNum;
    }
});

three.addEventListener("click", () => {
    result = "";
    if (tempNum.length === 9) {
        tempNum += "";
    } else {
    tempNum += "3";  
    display.textContent = tempNum;
    }
});
four.addEventListener("click", () => {
    result = "";
    if (tempNum.length === 9) {
        tempNum += "";
    } else {
    tempNum += "4";  
    display.textContent = tempNum;
    }
});

five.addEventListener("click", () => {
    result = "";
    if (tempNum.length === 9) {
        tempNum += "";
    } else {
    tempNum += "5";  
    display.textContent = tempNum;
    }
});

six.addEventListener("click", () => {
    result = "";
    if (tempNum.length === 9) {
        tempNum += "";
    } else {
    tempNum += "6";  
    display.textContent = tempNum;
    }
});

seven.addEventListener("click", () => {
    result = "";
    if (tempNum.length === 9) {
        tempNum += "";
    } else {
    tempNum += "7";  
    display.textContent = tempNum;
    }
});

eight.addEventListener("click", () => {
    result = "";
    if (tempNum.length === 9) {
        tempNum += "";
    } else {
    tempNum += "8";  
    display.textContent = tempNum;
    }
});

nine.addEventListener("click", () => {
    result = "";
    if (tempNum.length === 9) {
        tempNum += "";
    } else {
    tempNum += "9";  
    display.textContent = tempNum;
    }
});

zero.addEventListener("click", () => {
    result = "";
    if (tempNum.length === 9) {
        tempNum += "";
    } else {
    tempNum += "0";  
    display.textContent = tempNum;
    }
});

point.addEventListener("click", () => {
    result = "";
    if (tempNum.length === 9) {
        tempNum += "";
    } else {
    tempNum += ".";  
    display.textContent = tempNum;
    }
   
});

function powerPlusPlus() {
    operator += "+";
    if (operator ==="++" && result === "") {
        num1 = tempNum;
        result = calculate();
        display.textContent = result;
        operator = "";
        tempNum = ""
        ;
    } else if (operator ==="++" && result !== "") {
        num1 = result;
        result = calculate();
        display.textContent = result;
        operator = "";
        tempNum = "";

    }


};

plus.addEventListener("click", () => {
    if (num1 ==="" && tempNum ==="") {
        return;
    }
    
    if (result !== "") {
        operator = "+";
        num1 = result;
        tempNum = "";
    } else if (operator === "") {
        operator = "+";
        num1 = tempNum;
        tempNum = "";
    } else {
        num2 = tempNum;
        result = calculate();
        display.textContent = result;
        num1 = result;
        tempNum = "";
        operator = "+";

    }
    

});

minus.addEventListener("click", () => {
    if (num1 ==="" && tempNum ==="") {
        return;
    }
    if (result !== "") {
        operator = "-";
        num1 = result;
        tempNum = "";
    } else if (operator === "") {
        operator = "-";
        num1 = tempNum;
        tempNum = "";
    } else {
        
        num2 = tempNum;
        result = calculate()
        display.textContent = result;
        num1 = result;
        tempNum = "";
        operator = "-";
    }
});



multiply.addEventListener("click", () => {
    if (num1 ==="" && tempNum ==="") {
        return;
    }
    if (result !== "") {
        operator = "*";
        num1 = result;
        tempNum = "";
    } else if (operator === "") {
        operator = "*";
        num1 = tempNum;
        tempNum = "";
    } else {
        num2 = tempNum;
        if (num2 === "") {
            return;
        } else {
        result = calculate()
        display.textContent = result;
        num1 = result;
        tempNum = "";
        operator = "*";
        }
    }
});

divide.addEventListener("click", () => {
    if (num1 ==="" && tempNum ==="") {
        return;
    }
    if (result !== "") {
        operator = "/";
        num1 = result;
        tempNum = "";
    } else if (operator === "") {
        operator = "/";
        num1 = tempNum;
        tempNum = "";
    } else {
        num2 = tempNum;
        if (num2 === "") {
            return;
        } else {
        result = calculate()
        display.textContent = result;
        num1 = result;
        tempNum = "";
        operator = "/";
        }
    }
   
});

equals.addEventListener("click", () => {
  if (tempNum === "")  {
    return;
  } else {
    num2 = tempNum;
    if (num1 ==="") {
        return;
    } else {
    result = calculate();
    display.textContent = result;
    operator = "";
    tempNum = "";
    }
  }
});



clear.addEventListener("click", () => {
    tempNum = "";
    num1 = "";
    num2 = "";
    operator = "";
    result = "";
    display.textContent = "0";
   
});

function calculate() {
    if (operator === "+") {
       return +num1 + +num2;

    } else if (operator ==="-") {
        return  +num1 - +num2;
    } else if (operator === "*") {
        return  +num1 * +num2;
        
    } else if (operator === "/") {
        return  +num1 / +num2;
    } else if (operator === "++") {
        return +num1 + +num1; 
    }
    ;
   

};

