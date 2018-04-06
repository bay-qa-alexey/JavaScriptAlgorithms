let problem_set = [
  {
    'id': 'sixth',
    'prev_id': 'fifth',
    'timestamp': 1002
  },
  {
    'id': 'fourth',
    'prev_id': 'third',
    'timestamp': 1001,
  },
  {
    'id': 'third',
    'prev_id': 'second',
    'timestamp': 1001,
  },
  {
    'id': 'seventh',
    'prev_id': 'sixth',
    'timestamp': 1002,
  },
  {
    'id': 'first',
    'prev_id': null,
    'timestamp': 1000
  },
  {
    'id': 'fifth',
    'prev_id': 'fourth',
    'timestamp': 1001,
  },
  {
    'id': 'second',
    'prev_id': 'first',
    'timestamp': 1000
  },
  {
    'id': 'eighth',
    'prev_id': 'seventh',
    'timestamp': 1002
  },
]

var myFunc = function(a) {

var elem = problem_set.filter(function(b) {

  if(a['id'] === b['prev_id']) { 
    return true;
  } 
  return false;
  
})

if (elem.length) {
  return elem[0];
} else {
  return null;
}

}


var firstElem = problem_set.filter(function(a) {
if(a['id'] === 'first') {
  return a;
}
});

var tmp = firstElem[0];
while(tmp) {
  console.log(tmp);
  tmp = myFunc(tmp);
}