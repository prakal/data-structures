var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[item] = item;
  console.dir(this._storage);
};

setPrototype.contains = function(item){
  for (var key in this._storage){
    console.log('key',this._storage[key]);
    if (this._storage[key] === item){
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
