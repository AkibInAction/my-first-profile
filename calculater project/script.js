const input = document.getElementById("input");
const buttons = document.querySelectorAll("#calculator button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "=") {
            try {
                input.value = eval(input.value);
            } catch {
                input.value = "Error";
            }
        } else if (value.toLowerCase() === "clear") {
            input.value = "";
        } else {
            input.value += value;
        }
    });
});
