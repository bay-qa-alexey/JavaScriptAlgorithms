// dont use concat and sort functions !!!
// output should be: [ 1, 2, 4, 4, 5, 6, 8 ]

var arr1 = [1,4,6,8];
var arr2 = [2,4,5];

var arr3 = [];

var i1=0, i2=0;

for(var i=0; i < arr1.length + arr2.length; i++) {

  if(i1 === arr1.length){
    arr3.push(arr2[i2]);
    i2++;
  } else if(i2 === arr2.length){
    arr3.push(arr1[i1]);
    i1++;
  } else if(arr1[i1] <= arr2[i2]) {
    arr3.push(arr1[i1]);
    i1++;
  } else {
    arr3.push(arr2[i2]);
    i2++;
  }
}

console.log(arr3);