document.querySelector("#Calculate-btn");

function calculate() {
    let weight = parseFloat(document.querySelector("#weight-input").value);
    let height = parseFloat(document.querySelector("#height-input").value);
    let errPara = document.querySelector("#error-para");
    let result = document.querySelector("#result");
    let obsChart = document.querySelector("#obesity");

    errPara.innerHTML = '';
    result.innerHTML = '';
    obsChart.innerHTML = '';

    if (isNaN(height) || height <= 0 || weight <= 0 || isNaN(weight)) {
        errPara.innerHTML = "Please Enter The value"
        setTimeout(() => {
            errPara.innerHTML = ''
        }, 2000)
        return;
    }

    let bmi = weight / ((height * height) / 10000)
    result.innerHTML = `<p>Your BMI is : ${bmi.toFixed(2)}</p>`

    if (bmi < 18.5) {
        obsChart.innerHTML = `<p id="UW">You are Underweight<p>`;
    }
    else if (bmi >= 18.5 && bmi <= 24.5) {
        obsChart.innerHTML = `<p id="normal">You are Normal<p>`;
    }
    else {
        obsChart.innerHTML = `<p id="OW">You are overweight<p>`;
    }
    clearAll()
}


function clearAll() {
    document.querySelector("#weight-input").value = ''
    document.querySelector("#height-input").value = ''
}

const cursorSmall = document.querySelector('.small');
const cursorBig = document.querySelector('.big');

const positionElement = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    cursorBig.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mousemove', positionElement);

document.addEventListener('click', () => {
    cursorSmall.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
});