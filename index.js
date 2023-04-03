const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
 

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
const driversArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const result = returnLastTwoDrivers(driversArray);
console.log(result); 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driversArray, returnDriversFunction) {
    return returnDriversFunction(driversArray);
  }