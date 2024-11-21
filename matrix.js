
let x = Math.PI;
let n = 100;
// let m = [
//   [1,x/n],
//   [-x/n,1]
// ]

let m = [
    [1,1],
    [0,0]
]
let sum = [[0,0],[0,0]]
let id = [[1,0],[0,1]]

for(let i = 0; i < n; i++){
    sum = matrix_add(k=1/factorial(i),sum, matrix_power(m,i) )
}

console.log(sum);

function factorial(n){
    if( n == 0) return 1
    if(n == 1) return 1
    if(n==2) return 2
    return n*factorial(n-1)
}
function matrix_add(k,...M){
    let sum = []
    for(let i = 0; i < M.length; i++){

        for(let y = 0; y < M[0].length; y++){
            if(sum[y] == undefined) sum[y] = []
            for(let x = 0; x < M[1].length; x++){
                if(sum[y][x]==undefined) sum[y][x] = 0
                sum[y][x] += k*M[i][y][x]
            }
        }

    }
    return sum
}
function multiply_matrix(m1,m2){
  const row = (M,r) => M[r];  // trivial ik but for sake of understanding
  const col = (M,c) => M.map(e=>e[c]);
  const dot_product = (v1,v2) => {
    let sum = 0;
    for(let i = 0; i < v1.length; i++) sum+=v1[i]*v2[i];
    return sum
  }
  let matrix = []
  for(let y = 0; y < m1.length; y++){
    matrix[y] = []
    for(let x = 0; x < m1[y].length; x++){
      matrix[y][x] = dot_product(row(m1,y),col(m2,x))
    }
  }
  return matrix
}
function matrix_power(M,n){
  if(n == 0) return [[1,0],[0,1]]
  let m = M
  for(let i = 0; i < n-1; i++) m = multiply_matrix(M,m)
  return m
}
