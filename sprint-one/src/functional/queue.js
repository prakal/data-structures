var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {},
      startQ = 0,
      endQ = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[endQ] = value;
    endQ++;
  };

  someInstance.dequeue = function(){
    if ((endQ - startQ) > 0) {
      var temp = storage[startQ];
      delete storage[startQ];
      startQ++;
      return temp;
    }
  };

  someInstance.size = function(){
    return endQ - startQ;
  };

  return someInstance;
};
