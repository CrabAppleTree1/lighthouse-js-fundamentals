let loopyLighthouse = function (range, multiples, words) {

  let num = 0;
  let limit = 0;
  let exceptions = " ";

  if ((range[0] != null) && (range[1] != null)) {
    num = range[0];
    limit = range[1];
  }
  if ((words[0] != null) && (words[1] != null) && (multiples[0] != null) && (multiples[1] != null)) {


    while (num <= limit) {

      if (num % multiples[0] == 0 && num % multiples[1] == 0) {
        exceptions = words[0] + words[1];
      }
      else if (num % multiples[1] == 0) {
        exceptions = words[1];
      }
      else if (num % multiples[0] == 0) {
        exceptions = words[0];
      }
      else {
        exceptions = num
      }
      num++;

      console.log(exceptions)
    }
  }
}




loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);