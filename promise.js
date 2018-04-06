function add (a, b) {
  return a + b;
}

make_lazy = function(){
	var myFunc = arguments[0];
	var arg = [].slice.call(arguments, 1);
	return function(){
		return myFunc.apply(null,arg);
	}
}

var lazy_value = make_lazy(add, 2, 3);

console.log(lazy_value());