var input = "[94200,94299] [94226,94399] [94226,94398] [94133,94133] [94130,94160]";

var result = input.split(" ");
var result2 = [];
for(var i=0;i<result.length;i++) {
	result2.push([+result[i].substring(1, 6), +result[i].substring(7, 12)]);
}

result2.sort(function(a, b) {
	if(a[0] < b[0]) {
		return -1;
	} else if(a[0] > b[0]) {
		return 1;
	} else if(a[1] < b[1]) {
		return -1;
	} else if(a[1] > b[1]) {
		return 1;
	}
});

for(i=0;i<result2.length-1;i++) {
	 if(result2[i+1][0] <= result2[i][1]) {
	 	if(result2[i+1][1] > result2[i][1]) {
	 		result2[i][1] = result2[i+1][1];
	 	}
	 		result2.splice(i+1,1);	i--; 		
	 }
}

console.log(result2);