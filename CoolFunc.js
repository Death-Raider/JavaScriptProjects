const add = (a, b, func=1) => a instanceof Array ? a.map((c, i) => add(a[i], b[i])) : func(a,b);

function callFile(open,filePath,sendData = 'no Data',resolve,reject){
  const test = spawn(open,[filePath]);
  let x;
  test.stdin.write(sendData);
  test.stdin.end();
  test.stdout.on('data',(data) =>{x = data.toString('utf8')});
  test.stdout.on('end',_=>{resolve(x)});
  test.stderr.on('error',(err)=>{reject(err)});
}

function* zip(...arrs){
  for(let i = 0; i < arrs[0].length; i++){
    let a = arrs.map(e=>e[i])
    if(a.indexOf(undefined) == -1 ){yield a }else{return undefined;}
  }
}
