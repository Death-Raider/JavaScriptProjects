let Points = [
  [-30, 18],
  [-25, -26],
  [-10, 12],
  [3, -17],
  [19, -11],
  [4, -30],
  [-2, 11],
  [4, 18],
  [-5, 5],
  [-29, 7],
  [-17, -20],
  [2, -18],
]

const area=(a,b,c,d)=>Math.abs(a[0]*b[1]-a[1]*b[0] + b[0]*c[1]-b[1]*c[0] + c[0]*d[1]-c[1]*d[0] + d[0]*a[1]-d[1]*a[0])/2 // O(1)
const line_dist=(a,b,c)=>{ // dist of c from line by a,b
  let m = (b[1]-a[1])/(b[0]-a[0])
  return (m*c[0]-c[1]+a[1]-m*a[0])/Math.sqrt(m**2+1)
}

let Max_area = 0
//O(n^3) hopefully
for(let i = 0; i < Points.length; i++){
  for(let j = i+1; j < Points.length; j++){
    let max = [0], min = [0];
    for(let k = 0; k < Points.length; k++){
      if(k!=j && k!=i){
        let dist = line_dist(Points[i],Points[j],Points[k])
        if(dist > max[0]) max = [dist,k]
        if(dist < min[0]) min = [dist,k]
      }
    }
    // makes sure that there is a minimum and maximum distance
    if( max.length != 1 && min.length != 1 ){
      let current_area = area( Points[i] , Points[max[1]] , Points[j], Points[min[1]] )
      Max_area = (current_area > Max_area) ? current_area : Max_area
    }
  }
}

console.log(Max_area)
