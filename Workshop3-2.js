function calBMI(weight, height) {
    const bmival = weight / (height * height);
    const bmi = bmival.toFixed(2);
    let category = "";

    if (bmi < 18.5) {
        category = "ผอม";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "ปกติ";
    } else if (bmi >= 25 && bmi < 30) {
        category = "น้ำหนักเกิน";
    } else {
        category = "อ้วน";
    }
    return {
        bmi: bmi,
        category: category
    };
}

console.log(calBMI(70, 1.75));
console.log(calBMI(50, 1.60));
console.log(calBMI(90, 1.70));