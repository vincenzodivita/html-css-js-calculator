const numBtn = document.querySelectorAll(".numBtn");
const delBtn = document.querySelector(".delBtn");
const acBtn = document.querySelector(".acBtn");
const resultBtn = document.querySelector(".resultBtn");
const operator = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
let operation = "";


numBtn.forEach(function(btn) {
    btn.addEventListener("click", function() {
        display.innerHTML += btn.textContent;
        operation = display.textContent;
        console.log(operation.split(' ').join('').split('x').join('*').split('÷').join('/'));
    });
});

acBtn.addEventListener("click", function() {
    display.innerHTML = "";
    operation = display.textContent;
    console.log(operation.split(' ').join('').split('x').join('*').split('÷').join('/'));
});

delBtn.addEventListener("click", function() {
    display.innerHTML = display.textContent.slice(0, -1);
    operation = display.textContent;
    console.log(operation.split(' ').join('').split('x').join('*').split('÷').join('/'));
});

operator.forEach(function(btn) {
    btn.addEventListener("click", function() {
        display.innerHTML += " " + btn.textContent + " "  
    });
});

