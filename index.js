function distanceFromHqInBlocks(num1){
    
    if (num1 < 42) {
    return 42-num1
    }
    else {return num1-42}
}


function distanceFromHqInFeet(num2){
    
     return distanceFromHqInBlocks(num2) * 264
}

function distanceTravelledInFeet(a, b){
    if (a > b) {
    return (a-b) * 264 
    }
    else {return (b-a)*264}
}

function calculatesFarePrice(a, b){
    let distance = distanceTravelledInFeet(a, b)
    if (distance <= 400){
    return 0    
} else if (distance > 400 && distance <= 2000){
return 0.02 * (distance - 400)
}
else if (distance > 2000 && distance < 2500){
    return 25
}
else {
   return 'cannot travel that far' 
}
 }
    
