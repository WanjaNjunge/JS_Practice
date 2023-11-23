// Returns the number of blocks from Scuber's headquarters to the pickup location.

const scubaHQ = 42;

function distanceFromHqInBlocks(pickUp) {
    if (pickUp > scubaHQ) {
        return pickUp - scubaHQ;
    } else {
        return scubaHQ - pickUp;
    }
}

// Returns the number of feet from Scuber's headquarters to the pickup location.

function distanceFromHqInFeet(pickUp) {
    return distanceFromHqInBlocks(pickUp) * 264;
}

// Calculates the number of feet a passenger travels given a starting block and an ending block

function distanceTravelledInFeet(start, end) {
    if (start > end) {
        return (start - end) * 264;
    } else {
        return (end - start) * 264;
    }
} 

// return the fare for the customer

function calculatesFarePrice(start, end) {
    const distance = distanceFromHqInFeet(start, end);

    if (distance <= 400) {
        return 0;
    } else if (distance <= 2000) {
        return (distance -400) * 0.02
    } else if (distance <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
    
}





