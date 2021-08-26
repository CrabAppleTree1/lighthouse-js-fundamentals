const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  



const finalPosition = function(moves){
  let finalDisplacement = []
  let xDisplacement = 0;
  let yDisplacement = 0;
  for (const move of moves){
    switch (move){
    case "north":
        yDisplacement += 1;
        break;
      
      case "south":
        yDisplacement -= 1;
        break;
      
      case "east":
        xDisplacement += 1;
        break;
      
      case "west":
        xDisplacement -= 1;
        break;

      default:
        break;
    }
  }
  finalDisplacement.push(xDisplacement);
  finalDisplacement.push(yDisplacement);
  return finalDisplacement;
}


console.log(finalPosition(moves));