function distanceFromHqInBlocks(numOfBlocks) {
  if (numOfBlocks < 42) {
    return 42 - numOfBlocks; 
  } else {
    return numOfBlocks - 42;
  };
};

function distanceFromHqInFeet(numOfBlocks) {
  return distanceFromHqInBlocks(numOfBlocks) * 264;  
};

function distanceTravelledInFeet(startBlock, endBlock) { 
  if (startBlock > endBlock) {
    return (startBlock - endBlock) * 264; 
  } else {
    return (endBlock - startBlock) * 264;
  }
} 

function calculatesFarePrice(startBlock, destination) {
  let distance = distanceTravelledInFeet(startBlock, destination) 
  if (distance <= 400) {
    return 0 
    
  }  else if (distance > 400 && distance <= 2000) {
     return .02 *(distance - 400)
  }  else if (distance > 2000 && distance < 2500) {
     return 25
  }  else {
     return "cannot travel that far"
  }
}
    