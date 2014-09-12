var Buried, Cinema, Clustal, Clustal2, Colors, Helix, Hydro, Lesk, Mae, Nucleotide, Purine, Strand, Taylor, Turn, Zappo;

Taylor = require("./taylor");

Zappo = require("./zappo");

Hydro = require("./hydrophobicity");

Clustal = require("./clustal");

Clustal2 = require("./clustal2");

Buried = require("./buried");

Cinema = require("./cinema");

Nucleotide = require("./nucleotide");

Helix = require("./helix");

Lesk = require("./lesk");

Mae = require("./mae");

Purine = require("./purine");

Strand = require("./strand");

Turn = require("./turn");

module.exports = Colors = {
  mapping: {
    taylor: Taylor,
    zappo: Zappo,
    hydro: Hydro,
    clustal: Clustal,
    clustal2: Clustal2,
    buried: Buried,
    cinema: Cinema,
    nucleotide: Nucleotide,
    helix: Helix,
    lesk: Lesk,
    mae: Mae,
    purine: Purine,
    strand: Strand,
    turn: Turn
  },
  getColor: function(g) {
    var color, scheme;
    scheme = g.colorscheme.get("scheme");
    color = Colors.mapping[scheme];
    if (color === void 0) {
      console.log("warning. no color scheme found.");
      color = {};
    }
    return color;
  }
};
