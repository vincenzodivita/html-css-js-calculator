const numBtn = document.querySelectorAll(".numBtn");
const delBtn = document.querySelector(".delBtn");
const acBtn = document.querySelector(".acBtn");
const resultBtn = document.querySelector(".resultBtn");
const operator = document.querySelectorAll(".operator");
const display = document.querySelector(".display");


numBtn.forEach(function(btn) {
    btn.addEventListener("click", function() {
        display.innerHTML += btn.textContent
    });
});

acBtn.addEventListener("click", function() {
    display.innerHTML = ""
});

delBtn.addEventListener("click", function() {
    display.innerHTML = display.textContent.slice(0, -1);
});
