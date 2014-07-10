var generate = function(length){
  if (length <= 10) {
    return generateTen().substr(0, length);
  }
}

var generateTen = function(){
  return Math.random().toString(36).slice(2).toUpperCase().substr(0, 10);
}


console.log(generate(3));
