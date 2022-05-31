const hqStreet = 42
const oneBlock = 264;

function distanceFromHqInBlocks(streetNumber) {
    if (hqStreet > streetNumber) {
        return hqStreet - streetNumber;
    }

    else {
        return streetNumber - hqStreet;
    }
}

function distanceFromHqInFeet(streetNumber) {
    return distanceFromHqInBlocks(streetNumber) * oneBlock;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination){
        return (start - destination) * oneBlock;
    }

    else {
        return (destination - start) * oneBlock;
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    }

    if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02;
     }

     if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25;
     }

     else {
         return 'cannot travel that far';
     }
   
}