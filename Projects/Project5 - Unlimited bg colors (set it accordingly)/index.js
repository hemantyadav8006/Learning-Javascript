// genertae a random color
const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;

}


let TimeInterval;
const startChangingColor = () => {
    if (!TimeInterval) { // safety check
        TimeInterval = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }

    // Reason for not using below statement of code: We are checking intervalId is not null then only start the interval otherwise it would create the multiple instances of the setInterval which would change the background color much faster and the stop button would not be able to clear all intervals if initially we have clicked on start button multiple times and then we click on stop button.

    // TimeInterval = setInterval(() => {
    //     document.body.style.backgroundColor = randomColor();
    // }, 1000);


    console.log("Start changing background color");
    console.log(TimeInterval);
}


const stopChangingColor = () => {
    clearInterval(TimeInterval);
    TimeInterval = null;
    console.log("Stopped!");
}
document.querySelector('#start').addEventListener('click', startChangingColor);


document.querySelector('#stop').addEventListener('click', stopChangingColor);