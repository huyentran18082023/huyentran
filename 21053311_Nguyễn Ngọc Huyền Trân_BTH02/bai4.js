function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = document.getElementById("age").value;
  const ageGroup = getAgeGroup(age);

  // BMI calculation formula
  const bmi = weight / (height * height);

  // Determine BMI category based on age group
  const bmiCategory = getBMICategory(bmi, ageGroup);

  // Update BMI value element
  document.getElementById("bmi-value").textContent = bmi.toFixed(2);

  // Update BMI category element with additional message
  const bmiCategoryElement = document.getElementById("bmi-category");
  bmiCategoryElement.textContent = bmiCategory;

  // Add additional message based on BMI category and age group
  const messageElement = document.createElement("p");
  messageElement.style.color = "red"; // Set text color to red

  let message = "";
  if (ageGroup === "trung-nien") {
    if (bmiCategory === "Béo phì cấp độ I") {
      message = "Khám định kỳ.";
    }
  } else if (ageGroup === "gia-lon-tuoi") {
    if (bmiCategory === "Béo phì cấp độ II") {
      message = "Tập thể dục thường xuyên.";
    } else if (bmiCategory === "Béo phì cấp độ III") {
      message = "Hạn chế ăn mỡ động vật.";
    }
  }

  // Append the message element after the BMI category
  bmiCategoryElement.appendChild(messageElement);
  messageElement.textContent = message;
}

function getAgeGroup(age) {
  if (age >= 18 && age < 60) {
    return "trung-nien";
  } else {
    return "gia-lon-tuoi";
  }
}

function getBMICategory(bmi, ageGroup) {
  if (ageGroup === "trung-nien") {
    if (bmi < 25) {
      return "Bình thường";
    } else if (bmi < 30) {
      return "Béo phì cấp độ I";
    } else {
      return "Béo phì cấp độ II";
    }
  } else {
    if (bmi < 24) {
      return "Bình thường";
    } else if (bmi < 27) {
      return "Béo phì cấp độ II";
    } else {
      return "Béo phì cấp độ III";
    }
  }
}
