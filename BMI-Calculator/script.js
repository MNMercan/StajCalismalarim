var height = document.querySelector('#height');
var weight = document.querySelector('#weight');
var calculateBtn = document.querySelector('#calculateBtn');
var result = document.querySelector('.result');
var heightSpan = document.querySelector("#heightSpan");
var weightSpan = document.querySelector("#weightSpan");
calculateBtn.addEventListener("click", () => {
    result.innerText = "Your BMI : "
    if (height.value.length != "" && weight.value.length == "") {
        alert("Please enter the all value");
    } else {

        heightSpan.innerText = "Your Height : " + height.value;
        weightSpan.innerText = "Your Weight : " + weight.value;
        result.append(calculate(parseFloat(height.value), parseFloat(weight.value)));
        
        height.value = "";
        weight.value = "";
    }
})

function calculate(height, weight) {

    var toMeter = parseFloat(height / 100);
    var bmi = parseFloat(weight / (toMeter * toMeter)).toFixed(2);
    if(bmi <= 18.4){
        return bmi + " Under Weight";
    }else if(bmi > 18.4 && bmi < 25){
        return bmi + " Normal Weight";
    }else if(bmi > 18.4 && bmi < 25){
        return bmi + " Over Weight";
    }

}