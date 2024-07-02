function calculateBMI() {
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const resultElement = document.getElementById("result");

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultElement.textContent = "Please enter valid weight and height values.";
        return;
    }

    const bmi = weight / (height * height);
    const bmiResult = bmi.toFixed(2);

    let interpretation = "";
    if (bmi < 18.5) {
        interpretation = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        interpretation = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        interpretation = "Overweight";
    } else {
        interpretation = "Obese";
    }

    resultElement.textContent = `Your BMI is: ${bmiResult}. You are considered ${interpretation}.`;

}

document.getElementById('calculate-bmi').addEventListener('click', calculateBMI)