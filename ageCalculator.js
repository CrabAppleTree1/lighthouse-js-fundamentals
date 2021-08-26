let name = ""
let yearOfBirth = NaN
let CurrentYear = 2021;

const ageCalculator = function(name, YOB, currentyear){
  let output = name + " is " + (currentyear - YOB) + " years old."

  return output;
}