const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0, 2);
}
const returnLastTwoDrivers = function(arr) {
    return arr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = multiplier => {
    return function(fare) {
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, two) => {
    if(two === returnFirstTwoDrivers) {
        return drivers.slice(0, 2);
    } else if(two === returnLastTwoDrivers) {
        return drivers.slice(-2);
    }
}