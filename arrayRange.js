let range = function(start, end, step){
  let anArray = [];
  if ((start != null) && (end != null) && (step != null) && (step > 0)){
    for (let i = start; i <= end; i = i + step)
      anArray.push(i);
  }
    
    return anArray;
  }


  console.log(range(0, 10, 2));
  console.log(range(10, 30, 5));
  console.log(range(-5, 2, 3));