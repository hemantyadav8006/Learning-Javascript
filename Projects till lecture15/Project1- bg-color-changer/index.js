const body = document.querySelector("body");
const buttons = document.querySelectorAll(".buttons");

console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // console.log(e.target);
        if (e.target.id === "red") {
            body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === "green") {
            body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id;
        }

    })
})