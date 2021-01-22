// https://github.com/salmanprottoy/PH-Assignment3

// Problem 1 - kilometer to meter conversion
function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        // 1000 meter = 1 kilometer
        return kilometer*1000;
    }
    else {
        return "Invalid Input!";
    }
}