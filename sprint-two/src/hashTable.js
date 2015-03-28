var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};
HashTable.prototype.getStorageLength = function(){
  return Object.keys(this._storage).length;
};

HashTable.prototype.insert = function(k, v){
  // console.log('storageLength:',storageLength);
  // Check if there's enough spots in the storage array
  // if not, double the limit of the storage array.
  if (this.getStorageLength() === this._limit){
    this._limit *= 2;
  }

  // invokes hashing function to provide i from array size and key
  var i = getIndexBelowMaxForKey(k, this._limit);

  // If there's no bucket in 'i', make it;
  this._storage[i] = this._storage[i] || [];
  // push the 'tuple' array into the bucket array.
  this._storage[i].push([k,v]);
  // console.dir(this._storage[i]);
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
  console.log('key length',Object.keys(this._storage));
  if (this.getStorageLength() < this._limit/2 + 3){
    this._limit /= 2;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
