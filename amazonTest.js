var input = "Jack and Jill went to the market to buy bread and cheese. Cheese is Jack's and Jill's favorite food.";
var excluded = ["and", "he", "the", "to", "is", "Jack", "Jill"];

var arr = input.split(/[^A-Za-z0-9]/g);

arr = arr.filter(function(elem) { if(elem.length !== 0) return true; return false;})
arr = arr.map(function(elem) { return elem.toLowerCase();})

var map = {};
arr.forEach(function(elem) { map[elem] = (elem in map)? map[elem] + 1 : 1;})
excluded.forEach(function(elem) { if(elem.toLowerCase() in map) {delete map[elem.toLowerCase()]} } )

arr = Object.keys(map).map(function(elem) {return [elem, map[elem]];})
arr.sort(function(a,b) { return (a[1] > b[1])? -1:1; });

var max = arr[0][1];
arr = arr.filter(function(a) {if(a[1] === max) return true; return false;})

arr = arr.map(function(a) {return a[0]})

console.log(arr);