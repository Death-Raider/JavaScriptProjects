var txt = '5 3 2 1 6 4';
var array = lol(txt.split(" ").map(parseFloat));
console.log(array);
function lol(x){
  let min = x[0], max = x[0];
  for (let i = 1; i < x.length; i++) {
    let v = x[i];
    min = (v < min) ? v : min; // it means if(v < min){min = v;}else{min = min;}
    max = (v > max) ? v : max; // it means if(v > max){max = v;}else{max = max;}
  }
  return [min,max];
}
