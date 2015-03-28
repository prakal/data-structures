

var Graph = function(){
  this.storage = {};
};

Graph.prototype.addNode = function(node){
  this.storage[node] = {'name': node};
};

Graph.prototype.contains = function(node){
  if (this.storage[node] !== undefined){
    return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var node = this.storage;
  if (node[fromNode].link === toNode || node[toNode].link === fromNode){
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].link = toNode;

  // console.log('this,storage',this.storage);
  // console.log('fromNode',this.storage[fromNode]);
  // console.log('toNode',this.storage[toNode]);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.storage[fromNode].link;
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.storage){
    // debugger
    cb(key);
    // debugger
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */



