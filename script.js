let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid input");
        clearDisplay();
    }
}

document.addEventListener("keydown", function(event) {
    if ((event.key >= '0' && event.key <= '9') || "+-*/.%()".includes(event.key)) {
        appendToDisplay(event.key);
    } else if (event.key === "Enter") {
        calculateResult();
    } else if (event.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
});