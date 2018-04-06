var arr = [];
arr= [
        "D0-POS",
        "AAPL 100",
        "GOOG 200",
        "Cash 10",
        "",
        "D1-TRN",
        "AAPL SL 50 30000",
        "GOOG BY 10 10000",
        "",
        "D1-POS",
        "AAPL 50",
        "GOOG 220",
        "Cash 20000"
];

var obj = {};
var flag = 0;

arr.forEach(function(elem) {

        if(elem === "D0-POS") {flag=1;}
        if(elem === "D1-TRN") {flag=2;}
        if(elem === "D1-POS") {flag=3;}
        if(elem && elem != "D0-POS" && elem != "D1-TRN" && elem != "D1-POS") {
                if(flag === 1) {
                        obj[elem.split(" ")[0]] = +elem.split(" ")[1];
                }
                if(flag === 2) {
                        obj[elem.split(" ")[0]] = (elem.split(" ")[1] === "SL") ? obj[elem.split(" ")[0]] - +elem.split(" ")[2] : obj[elem.split(" ")[0]] + +elem.split(" ")[2];
                        obj["Cash"] = (elem.split(" ")[1] === "SL") ? obj["Cash"] + +elem.split(" ")[3] : obj["Cash"] - +elem.split(" ")[3];
                }
                if(flag === 3) {
                        obj[elem.split(" ")[0]] = -obj[elem.split(" ")[0]] + +elem.split(" ")[1];
                }
        }
})

var result = [];
var result = Object.keys(obj).map(function(key) {return [key, obj[key]];}).sort(function(a, b){return (a[0] < b[0])? -1 : 1;});
result.forEach(function(elem){if(elem[1] != 0) console.log(elem[0] + " " + elem[1]);})