let num = 100;
const limit = 200;
const exceptions = " ";

while (num <= limit){

  if (num % 3 == 0 && num % 4 == 0){
    exceptions = "LoopyLighthouse";
  }
  else if (num % 3 == 0){
    exceptions = "Loopy";
  }
  else if (num % 4 == 0){
    exceptions = "Lighthouse";
  }
  else {
    exceptions = num
  }
  num ++;
  console.log(exceptions)
}
