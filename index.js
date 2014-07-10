var generate = function(length) {
  length = length || 10;
  if (length <= 10) {
    return generateTen().substr(0, length);
  }
}

var generateTen = function(){
  return Math.random().toString(36).slice(2).toUpperCase();
}


console.log(generate(3));
console.log(generate());
