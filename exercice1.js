// adder function without changes :
 
function adder(l,r){
return function(v){
 
return l(v) + r(v);
}
 
}
 
 
// Function multiplication which permit to multiplicate numbers :
 
function mult(v){
return function(e){
return v*e;
}
}
 
 
// substraction implementation : x is the first number, y is the number you'll substract.
 
function sub(x){
return function(y){
 
// For testing sub function, you need to decomment the next line.
// Warning : If you do that, there'll have more results if you use the sub in the adder function.
 
return x-y;
}
}
 
 
 
// Adder function after modifications, now you can use multiple args :
 
 
 
// var declarations :
 function adder(){
var result = 0;
var args = Array.prototype.slice.call(arguments);
 
return function(v){
 
args.forEach(function(val){
result = result + val(v);
 
});
//console.log(result);
 return result;
};
}
 
 
 
// Test datas for sub function :
 
// If you want to test the sub function, you have to add the line which is on comment in the function.
 console.log("Sub results : ");
console.log(sub(0)(0)); // 0
console.log(sub(2)(1)); // 1
console.log(sub(2)(2)); // 0
console.log(sub(2)(4)); // -2
 
 
// Test datas for new adder function with multiple args :
 
 console.log("Adder results : " );
 
console.log(adder()(0)); // 0
console.log(adder()(1)); // 0
console.log(adder(mult(2))(1)); // 2
console.log(adder(mult(2), mult(2))(1)); // 4
console.log(adder(mult(2), mult(2), mult(2))(1)); // 6
console.log(adder(mult(2), sub(2), mult(2))(1)); // 5
console.log(adder(mult(1),mult(2),mult(3))(2)); //12
console.log(adder(mult(3),sub(2),mult(2))(1)); //6