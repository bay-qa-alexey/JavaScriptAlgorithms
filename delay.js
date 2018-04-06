var arr = [2,4,5,5,7,9,9,9,0,4,4,2];

var obj = {};

arr.forEach(function(element) {
	obj[element] = (element in obj)? obj[element] + 1 : 1;
});
console.log(obj);

var obj2 = {};

for(elem in obj) {
	if(obj[elem] in obj2) {
			obj2[obj[elem]] = obj2[obj[elem]] + "," + elem;		
	} else {
			obj2[obj[elem]] = elem;
	}

}
console.log(obj2);


var arr2 = Object.keys(obj2).map(function(elem) {
return [elem, obj2[elem]];
});
console.log(arr2);

arr2.sort(function(a,b) {
	return (a[0] > b[0])? -1 : 1;
});
console.log(arr2);

if(arr.length < 2) {
	console.log("Put correct data please!!!");
} else {
	console.log(arr2[1][1]);
}