var arr = [
"fileName,owner,docType,applicationId,contentLength",
"bank_statement_123,TonyStark,bank_statement,1,1000",
"tax_document_1,TonyStark,tax_return,1,6001",
"tax_document_2,SteveRogers,tax_return,2,2000",
"document_423,ThorOdinson,tax_return,3,1500",
"medical_report_1,ThorOdinson,medical_history,3,15000",
"prescription_1,StephenStrange,medical_history,4,200",
"steven_asset,StephenStrange,bank_statement,4,4000",
];

var namesDocType = arr[0].split(",").indexOf("docType");
var namesApplicationId = arr[0].split(",").indexOf("applicationId");
arr.splice(0,1);

var listId = {};
var obj = {};

console.log(arr);

arr.forEach(function(elem){
	var key = elem.split(",")[namesDocType];
	var value = elem.split(",")[namesApplicationId];
	listId[value] = true;
	obj[key] = (key in obj) ? function(){
		var tmp = obj[key]; 
		tmp[value] = true; 
		return tmp;
	}() : function(){
		var tmp = {}; 
		tmp[value] = true; 
		return tmp;
	}();
});

Object.keys(obj).sort().forEach(function(elem){
	var tmpArr = [];
	Object.keys(listId).sort().forEach(function(elemId){
		if (!(elemId in obj[elem])) {
			tmpArr.push(elemId);
		}
	});
	if(tmpArr.length > 0) {
	console.log(elem);
	console.log(tmpArr.join(" "));		
	}
});