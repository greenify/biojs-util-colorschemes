var StaticSchemeClass = function(map){
  this.default = "#ffffff";
  this.type = "static";
  this.map = map;
  this.getColor = function(letter){
    if(this.map[letter] != undefined){
      return this.map[letter]; 
    }else{
      return this.default;
    }
  }
}

var DynSchemeClass = function(fun,opt){
  this.default = "#ffffff";
  this.type = "dyn";
  this.opt = opt;
  // init
  if(fun.init != undefined){
    fun.init.call(this);
    this.getColor = fun.run;
    this.reset = fun.init;
  }else{
    this.getColor = fun;
  }
}
module.exports.stat = StaticSchemeClass;
module.exports.dyn = DynSchemeClass;
