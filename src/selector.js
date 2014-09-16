var Buried = require("./buried");
var Cinema = require("./cinema");
var Clustal = require("./clustal");
var Clustal2 = require("./clustal2");
var Helix = require("./helix");
var Hydro = require("./hydrophobicity");
var Lesk = require("./lesk");
var Mae = require("./mae");
var Nucleotide = require("./nucleotide");
var Purine = require("./purine");
var Strand = require("./strand");
var Taylor = require("./taylor");
var Turn = require("./turn");
var Zappo = require("./zappo");

module.exports = Colors = {
  mapping: {
    buried: Buried,
    buried_index: Buried,
    cinema: Cinema,
    clustal2: Clustal2,
    clustal: Clustal,
    helix: Helix,
    helix_propensity: Helix,
    hydro: Hydro,
    lesk: Lesk,
    mae: Mae,
    nucleotide: Nucleotide,
    purine: Purine,
    purine_pyrimidine: Purine,
    strand: Strand,
    strand_propensity: Strand,
    taylor: Taylor,
    turn: Turn,
    turn_propensity: Turn,
    zappo: Zappo,
  },
  getColor: function(scheme) {
    var color = Colors.mapping[scheme];
    if (color === undefined) {
      color = {};
    }
    return color;
  }
};
