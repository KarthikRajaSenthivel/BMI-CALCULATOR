document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert height from cm to meters

    // Calculate BMI
    if (!weight || !height || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height.");
        return;
    }

    const bmi = weight / (height * height);

    // Display BMI result
    document.getElementById("result").style.display = "block";
    document.getElementById("bmiValue").textContent = bmi.toFixed(2);

    // Determine BMI category
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("bmiCategory").textContent = `Category: ${category}`;
});
