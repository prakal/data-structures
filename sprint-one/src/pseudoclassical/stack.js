var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.total = 0;
};

Stack.prototype.size = function(){
  return this.total;
};

Stack.prototype.push = function(value){
  this.total++;
  this[this.total] = value;
};
Stack.prototype.pop = function(){
  if (this.total > 0){
    var temp = this[this.total];
    delete this[this.total];
    this.total--;
  }
  return temp;
};
