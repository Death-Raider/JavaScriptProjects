//DIRECTED WEIGHTED ACYCLIC GRAPH
const activation = {
  hidden:(x)=>1/(1+Math.exp(-x)),
  output:(x)=>1/(1+Math.exp(-x))
}
class Node{
  constructor(id, state=true, value=0){
    this.id = id
    this.state = state;
    this.value = value;
    this.connects = [];
  }
  //connect to another node with unique path and weight
  edge(node,path,weight){
    node.value += this.value*weight;
    this.edgeInfo(node)? this.edgeInfo(node).weight = weight : this.connects.push({ node, weight, path });
  }
  //returns all paths from self to target
  walkTo(target){
    function allPath(n,t){
      return ((n===t)?[[t]]:n.connects.map(c=>allPath(c.node,t).map(p=>[n,...p])).flat())
    }
    return allPath(this,target).filter(e=>(e.indexOf(target)>0));
  }
  edgeInfo(node){
    return (this.connects.length > 0 && node != undefined )?this.connects.filter(e=>e.node === node)[0]:false;
  }
  /*  hidden feature
  //gives the information of the connection from self to another node with distance 1
  connection(node2){
    let pathArr = this.walkTo(node2);
    let connectionArr = [];
    for(let path = 0; path < pathArr.length; path++){
      connectionArr[path] = { nodes: [], ids: [], path: [], path_cost: 0, weighted_path_cost: 0 };
      for(let node = 0; node < pathArr[path].length; node++){
        let n1 = pathArr[path][node], n2 = pathArr[path][node+1]; // n1 and n2 are the current and the next node respectively
        let selectedConnection = (n1.connects.length > 0 && n2 != undefined )? n1.connects.filter(e=>e.node === n2)[0]:{weight:0};
        connectionArr[path].nodes[node] = n1;
        connectionArr[path].ids[node] = n1.id;
        if(n1.connects.length > 0 && n2 != undefined )
          connectionArr[path].path[node] = selectedConnection.path
        connectionArr[path].path_cost += selectedConnection.weight;
        connectionArr[path].weighted_path_cost += selectedConnection.weight*n1.value;
      }
    }
    return connectionArr;
  }
  */
}

// graph[layer][node] < might not need it in 2D array as id alone might >
let graph = [
  [
    new Node(0, true, 1),
    new Node(1, true, 2)
  ],
  [
    new Node(2, true, 0),
    new Node(3, true, 0)
  ],
  [
    new Node(4, true, 0),
  ]
];

//connections and feed forward (happens when declaring edges)

//input 1 connections
graph[0][0].edge(graph[1][0], "n0->n2", 1);
graph[0][0].edge(graph[1][0], "n0->n2", 1);
graph[0][0].edge(graph[1][0], "n0->n2", 1);
graph[0][0].edge(graph[1][1], "n0->n3", 1);
//input 2 connections
graph[0][1].edge(graph[1][0], "n1->n2", 1);
graph[0][1].edge(graph[1][1], "n1->n3", 1);

graph[1][0].value = activation.hidden(graph[1][0].value)
graph[1][1].value = activation.hidden(graph[1][1].value)

//hidden 1 connections
graph[1][0].edge(graph[2][0], "n2->n4", 1);
//hidden 2 connections
graph[1][1].edge(graph[2][0], "n3->n4", 1);

graph[2][0].value = activation.output(graph[2][0].value)//output value


console.log( graph[2][0].value );

// console.log( graph[0][0].edgeInfo(graph[1][0]) ); //info of the edges between 2 nodes
graph[0][0].edgeInfo(graph[1][0]).weight = 999999; //updating edges between 2 nodes

console.log( graph[0][0].connects);
