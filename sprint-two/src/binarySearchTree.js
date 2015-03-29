var BinarySearchTree = function(value){
  var instance = Object.create(Methods);

  instance.topValue = true;
  instance.value = value;
  instance.left = null;
  instance.right = null;

  return instance;
};

Methods = {};
Methods.insert = function(value){
  var template = {
      'topValue': false,
      'value': value,
      'left': null,
      'right': null
  };

/* Create a boolean variable 'assigned' that
 checks if object has been assigned.
 Initialize boolean as false. */
  var assigned = false;

/* Create a local variable 'remainingTree' that
    contains the object that we are at.
    Initialize its value as the tree */
  var remainingTree = this;
  // console.dir(remainingTree);

// Loop while 'assigned' is false and
while (!assigned) {
  // Check which side value goesIf it's true, go right
  if (value > remainingTree.value) {
    // check if right is null
    if (remainingTree.right === null){
      // create a new Object tree inside right propertie
      remainingTree.right = template;
      // set 'assigned' as true
      assigned = true;
      // break out of loop
      break;
    // if right is not null, then go deeper into tree
    } else {
      // set 'remainingTree' as the Object in the right property of current remainingTree
      remainingTree = remainingTree.right;
    }
  // If it's not, go left
  } else {
    // check if left is null
    if (remainingTree.left === null){
      // create a new Object tree inside left propertie
      remainingTree.left = template;
      // set 'assigned' as true
      assigned = true;
      // break out of loop
      break;
    // if left is not null, then go deeper into tree
    } else {
      // set 'remainingTree' as the Object in the left property of current remainingTree
      remainingTree = remainingTree.left;
    }
  }
}


};
Methods.contains = function(value){
  // initiate a result variable to check if value exists in tree
  var result = false;
  // create an inner function to be used recursively
  var recursiveFunction = function (object){
    // check if value equals value in object
    if (value === object.value){
    // if check is true
      // then set result to true
      result = true;
      // stop recursion with an empty return
      return
    }
    // if check is not true
    else{
      // check if left is not null
      if (object.left !== null){
        // then invoke inner function (recursion) with left parameter
        recursiveFunction(object.left);
      }
      // check if right is not null
      if (object.right !== null){
        // then invoke inner function (recursion) with right parameter
        recursiveFunction(object.right);
      }
    }
    // the inner function base case is implicit
  };
  // call recursive function with initial parameter as 'this'.
  recursiveFunction(this);
  // return the result variable
  return result;
};
Methods.depthFirstLog = function(){

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
