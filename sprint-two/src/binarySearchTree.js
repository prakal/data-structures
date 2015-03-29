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
  console.dir(remainingTree);

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

  // var position = this.instance.topValue;
  // while (position.left && position.right) {
  //   if (value > position.value){
  //     postion = position.right;
  //   }
  // }
  // if (value < this.tree)
  // inner recursive function
};
Methods.contains = function(value){

};
Methods.depthFirstLog = function(){

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
