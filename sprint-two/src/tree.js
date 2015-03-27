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

treeMethods.contains = function(target, node){
  // console.dir(this.children);
  // for (var i = 0; i < this.children.length; i++){
  //   if (this.children[i].value === target) {
  //     return true;
  //   }
  // }
  // return false;
  //
  // using recursion to implement contains:
  //
  node = node || this.children[0];
  var result;


  // compares target with node.value
  if (target === node.value) {
    result = true;
  }
  // else{
  //   result = false;
  // }
  // termination case
  if (result) {
    return result;
  } else {
    // Iterate trhoughout the children array
    for (var i = 0; i < node.children.length; i++){
      // grab the child object
      var childObj = node.children[i];
      // run the recursion on the child object
      result =  this.contains(target, childObj);
    }
  }
  if (!result){
    return false;
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
