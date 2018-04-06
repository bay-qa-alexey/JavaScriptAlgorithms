/*
Given a string. Swap most occurs word with less one.

Input:
qw qw hello hello hello ttt ttt ttt ttt

Output:
ttt ttt hello hello hello qw qw qw qw
*/

var str = "qw qw hello hello hello ttt ttt ttt ttt";
var arr = str.split(" ");

var obj = {};

arr.forEach(function(elem){
	obj[elem] = (elem in obj) ? obj[elem] + 1 : 1;
});

var tmpArr = [];

tmpArr = Object.keys(obj).map(function(elem){
	return [elem, obj[elem]];
}).sort(function(a, b){
	return a[1]-b[1];
});

var minStr = tmpArr[0][0];
var maxStr = tmpArr[tmpArr.length-1][0];

arr = arr.map(function(elem){
	if(elem === minStr) {
		return maxStr;
	} else if(elem === maxStr) {
		return minStr;
	}
	return elem;
});

console.log(str);
console.log(arr.join(" "));