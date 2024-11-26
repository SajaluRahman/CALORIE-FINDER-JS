function clclt() {


    const gender = document.getElementById("gender").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value / 100;
    const age = document.getElementById("age").value;
    const activity=document.getElementById("activity").value;

    if (!height || !weight || !age ) {
        alert('Please fill in all fields with valid things');
        return;
    }

    // BMI Calculation
    const bmi = (weight / (height * height)).toFixed(1);
    let bmirslt;
    if (bmi < 18.5) {
        bmirslt = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmirslt = "Normal Weight";
    } else {
        bmirslt = "Overweight";
    }

    // Minimum and Maximum Weight Calculation
    const minweight = (18.5 * height * height).toFixed(1);
    const maxweight = (24.9 * height * height).toFixed(1);

    let weightneed = '';
    if (weight < minweight) {
        weightneed = `You need to gain ${(minweight - weight).toFixed(1)} kg to reach a healthy weight.`;
    } else if (weight > maxweight) {
        weightneed = `You need to lose ${(weight - maxweight).toFixed(1)} kg to reach a healthy weight.`;
    } else {
        weightneed = `You are in the healthy weight range.`;
    }

    // BMR Calculation
let bmr;
if (gender=== "male"){
    bmr = 10 * weight + 6.25 * (height * 100) - 5 * age + 5;

}
else{
    bmr = 10 * weight + 6.25 * (height * 100) - 5 * age - 161;

}




    // TDEE
    const tdee = bmr * activity;
    const clriforlos = (tdee - 500).toFixed(0);
    const clriforgain = (tdee + 500).toFixed(0);

    // Display Results
    const resultsct = document.getElementById("result");
    resultsct.style.display = 'block';

    document.getElementById("bmiotp").innerHTML = `
        Your BMI is <b>${bmi}</b> (${bmirslt})
    `;
    document.getElementById('colorie').innerHTML = `
        <p><strong>Normal Weight Range:</strong> ${minweight} kg - ${maxweight} kg</p>
        
          <p><strong>Maintain Weight:</strong> ${tdee.toFixed(0)} kcal</p>
           <p><strong>Weight Loss:</strong> ${clriforlos } kcal</p>
           <p><strong>Weight Gain:</strong> ${clriforgain} kcal</p> 
        </ul>
        <p>${weightneed}</p>
           <p><strong>check out the food items below 👇🏻</p> 

        `;

        
}
