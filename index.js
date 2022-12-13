// Code your solution in this file!

function distanceFromHqInBlocks(pickupBlock) {
    //if (pickupBlock > 42){
        //return pickupBlock - 42
   // } else {
        //return 42 - pickupBlock
    //}
    return Math.abs(pickupBlock - 42)
}

function distanceFromHqInFeet(start) {
    // return Math.abs((pickupBlock - 42)*264)
    return distanceFromHqInBlocks(start) * 264
}

function distanceTravelledInFeet(start, end) {
    return Math.abs((start - end) * 264)
    //return distanceFromHqInFeet
}
function calculatesFarePrice(start, end) {
    const totalDistance = distanceTravelledInFeet (start, end)
    if (totalDistance <= 400) {
        return 0
    } else if (totalDistance > 400 && totalDistance <= 2000){
        return (totalDistance - 400) * .02
    } else if (totalDistance > 2000 && totalDistance <= 2500){
        return 25
    } else {
        return 'cannot travel that far'
    }
    
    // ***How to write without using so many ifs and elses***
   /*  const totalDistance = distanceTravelledInFeet (start, end)
    switch(true){
        case totalDistance <= 400:
            return 0;
        case (totalDistance > 400 && totalDistance <= 2000):
            return (totalDistance - 400) * .02;
        case (totalDistance > 2000 && totalDistance <= 2500):
            return 25;
        default:
            return 'cannot travel that far'
    } */
}
