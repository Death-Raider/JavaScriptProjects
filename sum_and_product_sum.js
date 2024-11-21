//sigma calculator, "n" is the upper limit, "i" is the lower starting point and "fx" is our function that involves "i"
var sum =0;
var n = 99;
for(var i=1;i<=n;i++){
  sum = i**2 +sum;
}
console.log("Summasation =",sum);

// product sum calculator,"n" is the upper limit, "i" is the lower starting point and "fx" is our function that involves "i"
var product = 1;
for(var i=1;i<=n;i++){
  product=product*(i**2)
}
console.log("Product Summasation =",product);
