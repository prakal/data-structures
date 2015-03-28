var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  // invokes hashing function to provide i from array size and key
  var i = getIndexBelowMaxForKey(k, this._limit);

  // If there's no bucket in 'i', make it;
  this._storage[i] = this._storage[i] || [];
  // push the 'tuple' array into the bucket array.
  this._storage[i].push([k,v]);
  console.dir(this._storage[i]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // While j is smaller than bucket length, iterate over
  // the bucket array to find the key in the tuple
  for (var j = 0; j < this._storage[i].length; j++){
    if (k === this._storage[i][j][0]){
      return this._storage[i][j][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var j = 0; j < this._storage[i].length; j++){
    this._storage[i][j][1] = null;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
