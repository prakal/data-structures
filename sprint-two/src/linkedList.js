var LinkedList = function(){
  var list = {};
  list.head = {};
  list.tail = {};
  list.positionTail = 0;
  list.positionHead = 0;
  list.element = {};
  list.head.value = null;

  list.resetHead = function(){
    var keys = Object.keys(list.element);
    list.head.value = list.element[keys[0]] || null;
  };

  list.addToTail = function(value){
    list.tail.value = value;
    list.element[list.positionTail] = value;
    // base case for list.element with one element
    list.resetHead();
    list.positionTail++;
  };

  list.removeHead = function(){
    // console.log('before delete, list looks like',list.element);
    var temp = list.element[list.positionHead];
    delete list.element[list.positionHead];
    list.resetHead();
    // console.log('after delete, list looks like', list.element);
    list.positionHead++;
    // console.log('head',list.head);
    return temp;
  };


  list.contains = function(target){
    for (var key in list.element) {
      if (list.element[key] === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
