var f1 = function(x){//integral question is the return
  return Math.tan(x)**0.5 // find the integral of // x^2
}
//the return will be our integral
var integral = function(f,a,b){ //a is lower limit, b is upper limit
var area = 0; //area of the integral
var dx = 0.0000001 // small amount in the x axis
  for(let x = a; x<b ;x+=dx){
    area += dx*f(x); // computs the approximal area of function
  }
  return area;
}

 console.log(integral(f1,0,1) );
