function runFiveMiles() {
    console.log("Go for a five-mile run");
}

function liftWeights() {
console.log("Pump iron");
}

function swimFortyLaps() {
console.log("Swim 40 laps");
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

function Monday() {
    exerciseRoutine(liftWeights);
}

/**
 * The receivesAFunction function should:

take a callback function as an argument
call the callback function
it doesn't matter what this function returns, so long as it calls the callback function
 */
function receivesAFunction(param) {
    return param();

}


/**
 * The returnsANamedFunction function should:

take no arguments
return a named function
 */

function returnsANamedFunction() {
    function namedFunction() {
      console.log("Named function");
    }
    return namedFunction;
  }

/**
 * The returnsAnAnonymousFunction function should:

take no arguments
return an anonymous function
 */

function returnsAnAnonymousFunction() {
    return function () {
      console.log("anonymous function");
    };
  }


  // returnFirstTwoDrivers() — Declare the variable returnFirstTwoDrivers with const and assign an anonymous function to it. The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (arrayDrivers) => {
  return arrayDrivers.slice(0, 2);
}

returnFirstTwoDrivers(drivers);


// returnLastTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the last two drivers in the array.

const returnLastTwoDrivers = (arrayDrivers) => {
  return arrayDrivers.slice(-2);
}




// selectingDrivers — This is an array containing two elements: the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.

const selectDifferentDrivers = (arrayOfDrivers, func) => {
  return func(arrayOfDrivers);
}


// createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. For example, if createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.

const createFareMultiplier = function (num) {
  return function (fare) {
    return fare * num;
  }
}

// fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.

const fareDoubler = createFareMultiplier(2);

// fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.

const fareTripler = createFareMultiplier(3);



