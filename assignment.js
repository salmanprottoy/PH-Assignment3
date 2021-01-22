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

// Problem 3 - hotel cost calculator
function hotelCost(numberOfDays) {
    var first10DaysCostRate     = 100;
    var second10DaysCostRate    = first10DaysCostRate - 20;
    var restOfAllDaysCostRate   = 50;
    var totalCost               = 0 ;
    if(numberOfDays >= 0){
        if(numberOfDays <= 10){
            totalCost = first10DaysCostRate * numberOfDays;
            return totalCost;
        }
        else if(numberOfDays <= 20){
            var remainingDays       = numberOfDays - 10;
            var first10DaysCost     = 10 * first10DaysCostRate;
            var remainingDaysCost   = remainingDays * second10DaysCostRate;
            totalCost = first10DaysCost + remainingDaysCost;
            return totalCost;
        } 
        else{
            var remainingDays       = numberOfDays - 20;
            var first10DaysCost     = 10 * first10DaysCostRate;
            var second10DaysCost    = 10 * second10DaysCostRate;
            var remainingDaysCost   = remainingDays * restOfAllDaysCostRate;
            totalCost = first10DaysCost + second10DaysCost + remainingDaysCost
            return totalCost;
        }
    }
    else{
        return "Invalid Input!";
    }
}

