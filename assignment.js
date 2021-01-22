// https://github.com/salmanprottoy/PH-Assignment3

// Problem 1 - kilometer to meter conversion
function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        // 1000 meter = 1 kilometer
        return (kilometer*1000);
    }
    else {
        return "Invalid Input!";
    }
}

// Problem 2 - budget calculator
function budgetCalculator(watch, phone, laptop) {
    if ((watch >= 0) && (phone >= 0) && (laptop >= 0)) {
        // watch price = 50, phone price = 100, laptop price = 500
        return ((50 * watch) + (100 * phone) + (500 * laptop));
    }
    else {
        return "Invalid Input!";
    }
}