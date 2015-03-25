var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  // initializing size with 0
  var size=0;
  someInstance.push = function(value){
    storage[size]=value;
    size++;
  };

  someInstance.pop = function(){
    if (size>0){
      var temp=storage[size-1];
      console.log(storage,storage[size-1]);
      delete storage[size-1];

      size--;

      console.log('after',storage,temp);
      return temp;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
