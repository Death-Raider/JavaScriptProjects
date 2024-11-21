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

const {createCanvas} = require('canvas');
const fs = require("fs")
const area=(a,b,c,d)=>Math.abs(a[0]*b[1]-a[1]*b[0] + b[0]*c[1]-b[1]*c[0] + c[0]*d[1]-c[1]*d[0] + d[0]*a[1]-d[1]*a[0])/2 // O(1)
const line_dist=(a,b,c)=>{ // dist of c from line by a,b
  let m = (b[1]-a[1])/(b[0]-a[0])
  return (m*c[0]-c[1]+a[1]-m*a[0])/Math.sqrt(m**2+1)
}

/* dont count in time complexity */
const create_line=(a,b)=>{
  let theta = Math.atan( (b[1]-a[1])/(b[0]-a[0]) )
  return {x:b[0], y:b[1], theta: theta}
}
const intersect=(l1,l2)=>({
  x : Math.cos(l2.theta)*((l1.x-l2.x)*(-Math.sin(l1.theta))+(l1.y-l2.y)*(Math.cos(l1.theta)))/Math.sin(l2.theta-l1.theta)+l2.x,
  y : Math.sin(l2.theta)*((l1.x-l2.x)*(-Math.sin(l1.theta))+(l1.y-l2.y)*Math.cos(l1.theta))/Math.sin(l2.theta-l1.theta)+l2.y
})
const save = (canvas,name)=>{
  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync(`${name}.png`, buffer)
  return true
}
function join_points(p1,p2,color){
  ctx.strokeStyle=color
  ctx.beginPath()
  ctx.moveTo(p1[0]*10+(c.width)/2,(c.height)/2-p1[1]*10)
  ctx.lineTo(p2[0]*10+(c.width)/2,(c.height)/2-p2[1]*10)
  ctx.stroke()
}
function polygon(p1,p2,p3,p4,color){
  ctx.strokeStyle=color
  ctx.beginPath()
  ctx.moveTo(p1[0]*10+(c.width)/2,(c.height)/2-p1[1]*10)
  ctx.lineTo(p2[0]*10+(c.width)/2,(c.height)/2-p2[1]*10)
  ctx.lineTo(p3[0]*10+(c.width)/2,(c.height)/2-p3[1]*10)
  ctx.lineTo(p4[0]*10+(c.width)/2,(c.height)/2-p4[1]*10)
  ctx.lineTo(p1[0]*10+(c.width)/2,(c.height)/2-p1[1]*10)
  ctx.stroke()
}
const fib=(n)=>{
  if(n==0) return 0
  if(n==1) return 1
  return fib(n-1) + fib(n-2)
}
function clear(f=()=>{},args=[]){
  ctx.fillStyle="white"
  ctx.fillRect(0,0,c.width,c.height)

  ctx.strokeStyle="black"
  ctx.beginPath();
  ctx.moveTo(c.width/2,0);
  ctx.lineTo(c.width/2,c.height);
  ctx.moveTo(0,c.height/2);
  ctx.lineTo(c.width,c.height/2);
  ctx.stroke();
  Points.map(e=>{
    ctx.fillStyle="black"
    ctx.fillRect(e[0]*10+(c.width)/2,(c.height)/2-e[1]*10,5,5)
  })
  f(...args)
}

let c = createCanvas(910, 910)
let ctx = c.getContext('2d')
clear()
quad = []
/* dont count in time complexity */

let Max_area = 0
//O(n^3) hopefully
for(let i = 0; i < Points.length; i++){
  for(let j = i+1; j < Points.length; j++){
    let max = [0], min = [0];
    for(let k = 0; k < Points.length; k++){
      if(k!=j && k!=i){

        /* dont count in time complexity */
        let dist = line_dist(Points[i],Points[j],Points[k])
        let l1 = create_line(Points[i],Points[j])
        let l2 = {x:Points[k][0], y:Points[k][1], theta: l1.theta+Math.PI/2}
        let intersection_point = intersect(l1,l2)
        intersection_point = [intersection_point.x , intersection_point.y]
        join_points(Points[i],Points[j],"blue")
        join_points(Points[k],intersection_point,"red")
        /* dont count in time complexity */

        if(dist > max[0]) max = [dist,k]
        if(dist < min[0]) min = [dist,k]
      }
    }


    // makes sure that there is a minimum and maximum distance
    if( max.length != 1 && min.length != 1 ){
      let current_area = area( Points[i] , Points[max[1]] , Points[j], Points[min[1]] )
      if(current_area > Max_area){
        Max_area = current_area
        quad = [ Points[i] , Points[max[1]] , Points[j] , Points[min[1]], "yellow" ]
      }else{ /* dont count in time complexity */
        //draws current quad
        polygon( Points[i] , Points[max[1]] , Points[j] , Points[min[1]] , "black" )
      }
    }
    /* dont count in time complexity */
    polygon(...quad) // draws biggest area quad
    save(c,`Images/pog_${i},${j}`)
    clear()
    /* dont count in time complexity */
  }
}

console.log(Max_area)
