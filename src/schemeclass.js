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

var DynSchemeClass = function(fun){
  this.default = "#ffffff";
  this.type = "dyn";
  this.getColor = fun;
}
module.exports.stat = StaticSchemeClass;
module.exports.dyn = DynSchemeClass;
