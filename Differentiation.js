// differentiation
var f1 = function(x){
  return x**3;
}
var differentiation = function(f,a1){ // a1 is the value of the X
 var dx = 0.0000000001;
 var a2 = a1 + dx;
 var slope =( f(a2)-f(a1) )/dx;
return slope;
}
console.log(differentiation(f1,2));
