module.exports = function(letter,opts){
  if(opts.conservation > 0.8){
    return "#6464ff";
  }else if(opts.conservation > 0.8){
    return "#9da5ff";
  }else if(opts.conservation > 0.8){
    return "#cccccc";
  }else{
    return "#ffffff";
  }
}
