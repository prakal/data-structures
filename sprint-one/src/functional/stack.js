var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  // initializing size with 0
  var size=0;
  someInstance.push = function(value){
    size++;
  };

  someInstance.pop = function(){
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
