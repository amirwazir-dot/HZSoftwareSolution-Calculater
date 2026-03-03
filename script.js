const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (button.classList.contains("clear")) {
            display.value = "";
        } 
        else if (button.classList.contains("delete")) {
            display.value = display.value.slice(0, -1);
        } 
        else if (button.classList.contains("equal")) {
            calculate();
        } 
        else {
            display.value += value;
        }
    });
});

function calculate() {
    try {
        const sanitized = display.value.replace(/[^0-9+\-*/.%]/g, '');
        display.value = eval(sanitized);
    } catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", (e) => {
    const allowedKeys = "0123456789+-*/.%";

    if (allowedKeys.includes(e.key)) {
        display.value += e.key;
    } 
    else if (e.key === "Enter") {
        calculate();
    } 
    else if (e.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    } 
    else if (e.key === "Escape") {
        display.value = "";
    }
});