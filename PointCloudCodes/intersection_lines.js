// const intersect=(l1,l2)=>{
//   // let matrix = [       // just for show no need tbh
//   //   [Math.cos(l2.theta),-Math.cos(l1.theta)]
//   //   [Math.sin(l2.theta),-Math.sin(l1.theta)],
//   // ]
//   let invertMatrix = [
//     [-Math.sin(l1.theta),Math.cos(l1.theta)],
//     [-Math.sin(l2.theta),Math.cos(l2.theta)]
//   ]
//   let det = 1/Math.sin(l2.theta-l1.theta)
//   let vec = [
//     l1.x-l2.x ,
//     l1.y-l2.y
//   ]
//   // we only need one parametric value but just for completeness
//   let parameterVec = [   // (det*invertMatrix)*vec
//     (vec[0]*invertMatrix[0][0]+vec[1]*invertMatrix[0][1])*det,  // gives r for l2
//     (vec[0]*invertMatrix[1][0]+vec[1]*invertMatrix[1][1])*det // gives r for l1
//   ]
//   let intersection = {
//     x : Math.cos(l2.theta)*parameterVec[0]+l2.x,
//     y : Math.sin(l2.theta)*parameterVec[0]+l2.y
//   }
//   return intersection
// }

const intersect=(l1,l2)=>({
  x : Math.cos(l2.theta)*((l1.x-l2.x)*(-Math.sin(l1.theta))+(l1.y-l2.y)*(Math.cos(l1.theta)))/Math.sin(l2.theta-l1.theta)+l2.x,
  y : Math.sin(l2.theta)*((l1.x-l2.x)*(-Math.sin(l1.theta))+(l1.y-l2.y)*Math.cos(l1.theta))/Math.sin(l2.theta-l1.theta)+l2.y
})

let lines = [
  {
    x:1,
    y:1,
    theta:0.1
  },
  {
    x:9,
    y:2,
    theta:0.5
  },
  {
    x:3,
    y:1,
    theta:0.3
  },
  {
    x:4,
    y:-1,
    theta:0.4
  }
]

let count = 0
let points = new Set()

for(let l1 = 0; l1 < lines.length; l1++){
  for(let l2 = l1+1; l2 < lines.length; l2++){
    let currentPoint = JSON.stringify(intersect(lines[l1],lines[l2]))
    if(points.has(currentPoint)) count++
    points.add( currentPoint )
  }
}
console.log(points,"number of triple intersection => ",count)
