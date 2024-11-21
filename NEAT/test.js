class Node{
  constructor(id, state = true, value = 0){
    this.id = id
    this.state = state;
    this.value = value;
    this.connects = [];
  }
  //connect to another node with unique path, weight, innovation
  edge(node,path,weight,innovation){
    node.value += this.value*weight
    this.edgeInfo(node)? this.edgeInfo(node).weight = weight : this.connects.push({ node, weight, path, innovation })
  }
  //returns all paths from self (node) to target(node)
  walkTo(target){
    function allPath(n,t){ return ((n===t)?[[t]]:n.connects.map(c=>allPath(c.node,t).map(p=>[n,...p])).flat()) }
    return allPath(this,target).filter(e=>(e.indexOf(target)>0));
  }
  //returns info about the edge between node
  edgeInfo(node){ return (this.connects.length > 0 && node != undefined )?this.connects.filter(e=>e.node === node)[0]:false; }
}

class Neat{
  // input nodes, max hidden layers, output nodes
  constructor(inp,hiddenLayers,out){
    this.seed = new Array(2+hiddenLayers).fill(0).map(e=>[]);
    this.connections = []
    this.innovation = 0;
    this.activation = {
      hidden:(x)=>1/(1+Math.exp(-x)),
      output:(x)=>1/(1+Math.exp(-x))
    }
    // creats the base model
    let k = 0;
    for(let i = 0; i < inp; i++, k++){ this.seed[0].push(new Node(k,true,1));  }
    for(let i = 0; i < out; i++, k++){ this.seed[1+hiddenLayers].push(new Node(k,true,0)); }
  }
  // node1 -> [... , node2 , ...]  might reoved this idk
  connect(n1,n2,weight){
    n1.edge(n2,`n${n1.id}->n${n2.id}`,weight,this.innovation);
    this.innovation++
  }
  //generates random connection list
  generateConnectionList(){
    for(let l1 = 0; l1 < this.seed.length; l1++){
      for(let l2 = l1+1; l2 < this.seed.length; l2++){
        if(this.seed[l2].length > 0){
          for(let n1 = 0; n1 < this.seed[l1].length; n1++){
            let condition = Math.random() > 0.5;
            let randNode = Math.floor(Math.random()*this.seed[l2].length);
            if(condition) this.connections.push({
                from: { node:this.seed[l1][n1] , pos:[l1,n1] } ,
                to: { node:this.seed[l2][randNode] , pos:[l2,randNode] },
                weight: 1 // Math.random()*2-1    test value 1
              })
          }
        }
      }
    }
  }
  // need to compile this down a lot later too much code for little task
  evaluateConnectionList(Input){
    // clears the structure and updates the inputs
    this.clearGraph(Input)
    //sorts array by layer and node before processing further
    this.connections.sort( (a,b)=>a.to.pos[0]-b.to.pos[0] || a.to.pos[1]-b.to.pos[1] );
    //handles first case exception sorta
    let [pre_layer1,pre_node1] = this.connections[0].from.pos;// n1
    let [pre_layer2,pre_node2] = this.connections[0].to.pos;// n2
    this.connect(this.connections[0].from.node,this.connections[0].to.node,this.connections[0].weight);

    console.log(this.connections[0].from.pos, this.connections[0].to.pos);

    for(let con  = 1; con < this.connections.length; con++){
      let [next_layer1,next_node1] = this.connections[con].from.pos; // n1
      let [next_layer2,next_node2] = this.connections[con].to.pos; // n2
      this.connect(this.connections[con].from.node,this.connections[con].to.node,this.connections[con].weight);//connects the nodes
      /*
        if there is a change in layer then activate the previous node as its job is done.
        if there is no change in layer, check if the node has changed.
          node changed then activated it cause its job is done
      */
      if(next_layer2 !== pre_layer2){
        this.seed[pre_layer2][pre_node2].value = this.activation.hidden(this.seed[pre_layer2][pre_node2].value);
      }else{
        if(next_node2 !== pre_node2)
          this.seed[pre_layer2][pre_node2].value = this.activation.hidden(this.seed[pre_layer2][pre_node2].value);
      }

      console.log(this.connections[con].from.pos, this.connections[con].to.pos);

      //updating the values
      [pre_layer1,pre_node1,pre_layer2,pre_node2] = [next_layer1,next_node1,next_layer2,next_node2];
    }
    this.seed[pre_layer2][pre_node2].value = this.activation.output(this.seed[pre_layer2][pre_node2].value); // last layer activation
  }
  //updates weights
  updateweight(layer1,node1,layer2,node2,updatedVal){
    let edge = this.seed[layer1][node1].edgeInfo(test.seed[layer2][node2])
    if(edge) edge.weight = updatedVal
    return edge
  }
  //sets all the hidden and output values to 0 and the inputs nodes to the inputArr
  clearGraph(inputArr){
    this.seed.map((e,i)=>{ e.map((n,k)=>{ n.value=(i==0)?inputArr[k]:0 }) })
  }
  // *Mutation functions below*
  mutateNode_helper(type,option={node,layer_add}){//changing actiavtion would be a nightmare so i will remove it for now
    if(type === "state_change"){option.node.state = !option.node.state} //it changes the state
    if(type === "add"){this.seed[option.layer_add].push(node)} //it addes the node into the specified layer
  }
  mutateEdge_helper(type,option={node1,node2}){
    let edge = option.node1.edgeInfo(option.node2);
    if(!edge) throw "WTF MAN" // when there is no connection, error
    if(type==="flip"){edge.weight = -edge.weight}
    if(type==="random"){edge.weight = Math.random()*2-1}
    if(type==="zero"){edge.weight = 0}
    if(type==="update"){edge.weight += Math.random()-0.5} // updates current weight value in range (-0.5,0.5)
  }
  //the main mutation function using the lil mutation helper function
  mutation(){
    let //gtg brb
  }
}

let test = new Neat(2,2,1)

test.seed[1].push( new Node(3) )
test.seed[1].push( new Node(4) )
test.seed[1].push( new Node(5) )

let inputs = [1,1];

test.connections = [
  {
    from: {node:test.seed[0][1] ,pos:[0,1] },
    to: {node:test.seed[3][0] ,pos:[3,0] },
    weight: 1
  },
  {
    from: {node:test.seed[0][0] ,pos:[0,0] },
    to: {node:test.seed[3][0] ,pos:[3,0] },
    weight: 1
  }
];

test.evaluateConnectionList(inputs);
console.log(test.seed);

/* output
 **viaulize the seed**
this.seed = [
  [node,node,...], // i  = 0  --->  inputs
  [node,node,...], // i = 1   ---|
  .                   .          |___ \  hidden
  .                   .          |    /   nodes
  .                   .       ---|
  [node,node,...]  // i = n   ---> outputs
]
**actual output**



*/
