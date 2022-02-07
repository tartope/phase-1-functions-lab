// Code your solution in this file!

const hq = 42

function distanceFromHqInBlocks(someValue){
    let result = Math.abs(someValue - hq)
        return result
}

function distanceFromHqInFeet(someValue){
    let result = distanceFromHqInBlocks(someValue) * 264
        return result
}

function distanceTravelledInFeet(start, destination){
    let result = Math.abs(start - destination) * 264
        return result
}

function calculatesFarePrice(start, destination){
    let result = Math.abs(start - destination) * 264
    if(result <= 400){
        return 0
    }else if(result <= 2000){
        return 2.56
    }else if (result > 2500){
        return 'cannot travel that far'
    }else if (result > 2000){
        return 25
    }
}




// function distanceFromHqInBlocks(pickup){
//     const hq = 42
//     return Math.abs(pickup - hq);
// }

// function distanceFromHqInFeet(pickup){
//     const distance = distanceFromHqInBlocks(pickup)
//     return distance * 264
// }

// function distanceTravelledInFeet(start, destination) {
//     return Math.abs(start - destination) * 264
//   }

// function calculatesFarePrice(start, destination) {
//     const block = distanceTravelledInFeet(start, destination)
//     if(block <= 400){
//         return 0
//     }else if(block > 2500){
//         return 'cannot travel that far'
//     }else if(block >= 2000){
//         return 25
//     }else if(block >= 401){
//         return 2.56
//     }
//   }
 