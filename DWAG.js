//DIRECTED WEIGHTED ACYCLIC GRAPH

class Node{
  constructor(id, state, value){
    this.id = id
    this.state = state;
    this.value = value;
    this.connects = [];
  }
  //connect to another node with unique path and weight
  edge(node,path,weight){
    this.connects.push({ node, weight, path })
  }
  //gives the information of the connection from self to another node with distance 1
  connection(node2){
    let pathArr = this.walkTo(node2);
    let connectionArr = [];
    for(let path = 0; path < pathArr.length; path++){
      connectionArr[path] = { nodes: [], ids: [], path: 0, weight_path: 0 };
      for(let node = 0; node < pathArr[path].length; node++){
        let n1 = pathArr[path][node], n2 = pathArr[path][node+1]; // n1 and n2 are the current and the next node respectively
        let selectedConnection = (n1.connects.length > 0 && n2 != undefined )? n1.connects.filter(e=>e.node === n2)[0]:{weight:0};
        connectionArr[path].nodes[node] = n1;
        connectionArr[path].ids[node] = n1.id;
        connectionArr[path].path += selectedConnection.weight;
        connectionArr[path].weight_path += selectedConnection.weight*n1.value;
      }
    }
    return connectionArr;
  }
  //returns all paths from self to target
  walkTo(target){
    function allPath(n,t){
      return ((n===t)?[[t]]:n.connects.map(c=>allPath(c.node,t).map(p=>[n,...p])).flat())
    }
    return allPath(this,target).filter(e=>(e.indexOf(target)>0));
  }
}

let graph = [
  new Node(0, true, 1),
  new Node(1, true, 1),
  new Node(2, true, 1),
  new Node(3, true, 1),
  new Node(4, true, 1),
];

graph[0].edge(graph[2], "n0->n2", 1);
graph[0].edge(graph[3], "n0->n3", 1);

graph[1].edge(graph[2], "n1->n2", 2);
graph[1].edge(graph[3], "n1->n3", 2);

graph[2].edge(graph[4], "n2->n4", 3);
graph[3].edge(graph[4], "n3->n4", 3);


console.log( graph[1].walkTo(graph[4]) )
console.log( graph[1].connection(graph[4]) );
