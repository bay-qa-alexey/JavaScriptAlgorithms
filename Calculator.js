var calculator = function(str){

this["+"] = function(x,y) {
  return x+y;
};

this["-"] = function(x,y) {
  return x-y;
};

this["*"] = function(x,y) {
  return x*y;
};

this["%"] = function(x,y) {
  return x%y;
};

this[">"] = function(x,y) {
  return x+y;
};

return this[ str.split(" ")[1] ](+str.split(" ")[0], +str.split(" ")[2]);
}

var str = "5 + 6";
console.log(calculator(str));



var Calculator = function(){
   this.addMethod = function(a, b) {
     this[a]=b;
   };
  this["calculate"] = function(str) {
    return this[str.split(" ")[1]](+str.split(" ")[0], +str.split(" ")[2]);
  };
}

var powerCalc = new Calculator;
powerCalc.addMethod('*', function(a, b) {
  return a * b;
});
powerCalc.addMethod('/', function(a, b) {
  return a / b;
});
powerCalc.addMethod('**', function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate('2 ** 3');
console.log( result ); // 8



