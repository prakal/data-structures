var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push({'value': value});
};

treeMethods.contains = function(target){
  console.dir(this.children);
  for (var i = 0; i < this.children.length; i++){
    if (this.children[i].value === target) {
      return true;
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
