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
  var newObj = Object.create(this);
  newObj.value = value;
  newObj.children = [];
  this.children.push(newObj);
};

treeMethods.contains = function(target){

  var result = false;

  var innerFunc = function(target, node){
    // termination condition
    if (target === node.value) {
      result = true;
      return
    }

    // Iterate over the children
    for (var i = 0; i < node.children.length; i++){
      // Grab the child
      var childObj = node.children[i];
      // call the recursion over the children tree
      innerFunc(target, childObj);
    }

  };

  innerFunc(target, this);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
