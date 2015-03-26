//functional shared uses objects to store information

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance={};
  instance.size = stackMethods.size;
  instance.pop = stackMethods.pop;
  instance.push = stackMethods.push;
  instance.total = 0;
  return instance;
};

var stackMethods = {};

stackMethods.size = function(){
  return this.total;
};

stackMethods.push = function(value){
  this.total++;
  this[this.total] = value;
};
stackMethods.pop = function(){
  if (this.total > 0){
    var temp = this[this.total];
    delete this[this.total];
    this.total--;
  }
  return temp;
};
