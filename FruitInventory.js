var arr1 = [
"apple 5",
"orange 10",
"pineapple 2",
"apple 1",
"strawberry 3"
];

var obj2 = {};
arr1.forEach(function(elem){
	var tmpName=elem.split(" ")[0];
	var tmpNumb=elem.split(" ")[1];
	obj2[tmpName] = (tmpName in obj2) ? +obj2[tmpName] + +tmpNumb : +tmpNumb;});
var arr2 = Object.keys(obj2).map(function(elem){return [elem, obj2[elem]];});
arr2.sort(function(a, b){return a[1]-b[1];}).reverse();

arr2.slice(0,3).forEach(function(elem){console.log(elem[0] + " " + elem[1]);});