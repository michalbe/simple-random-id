var generate = function(length) {
  length = Math.abs(length) || 10;
  if (length <= 10) {
    return generateTen().substr(0, length);
  } else {
    var tens = ~~(length/10)+1;
    var output = '';
    console.log(tens);
    while (tens--) {
      console.log(tens);
      output += generateTen();
    }
    return output.substr(0, length);
  }
}

var generateTen = function() {
  // This could be 10 or 11 (depends on the value returned by Math.random())
  // but since we truncate it in the main function we don't need to do it
  // in here
  return Math.random().toString(36).slice(2).toUpperCase();
}


console.log(generate(3));
console.log(generate());
console.log(generate(-5));
console.log(generate(21));
