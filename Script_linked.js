// internet code ;-;
var compare = function (x) {
  let min = x[0], max = x[0];
  for (let i = 1, len=x.length; i < len; i++) {
    let v = x[i];
    min = (v < min) ? v : min; // it means if(v < min){min = v;}else{min = min;}
    max = (v > max) ? v : max; // it means if(v > max){max = v;}else{max = max;}
  }
  return [min, max];
}

module.exports = {
  compare:compare
}


//my own code
/**

function compare(x){
  let a = x[0];
  let b = x[1];
  for(let i =0; i < x.length; i++){
    if( a > b ){
      a = b;
      b = x[ i + 2 ];
    }
    else{ b = x[ i + 2 ];}
  }
  return a;
}

**/
