const form = document.querySelector("form");

// const height = parseInt(document.querySelector('#height')); // this usecase will give us empty value

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `this is not a valid height '${height}' , Please give a valid height!`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `this is not a valid weight ${weight}, Please give a valid weight!`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.5) {
            result.innerHTML = `<p>Your BMI is : ${bmi}, you are in Under Weight catagory</p>`
        }
        else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `<p>Your BMI is : ${bmi}, you are in Normal Weight catagory</p>`
        }
        else if (bmi >= 25 && bmi < 29.9) {
            result.innerHTML = `<p>Your BMI is : ${bmi}, you are in Over Weight catagory</p>`
        } else {
            result.innerHTML = `<p>Your BMI is : ${bmi}, you are in Obese catagory</p>`
        }
    }
})