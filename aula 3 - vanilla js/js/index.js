"use strict";

var shurikens = document.getElementsByClassName("shuriken");

var NOME_CLASSE_VISIVEL = "js-detalhe-visivel";
var NOME_CLASSE_SHURIKEN = "shuriken";

for (var i = 0, len = shurikens.length; i < len; i++) {
  shurikens[i].addEventListener('click', function() {
    if (this.className.indexOf(NOME_CLASSE_VISIVEL) === -1) { // não está visivel
      this.className = NOME_CLASSE_VISIVEL + " " + NOME_CLASSE_SHURIKEN;
    }
    else {
      if (this.className.indexOf(NOME_CLASSE_VISIVEL) > -1) { // está visivel
        this.className = NOME_CLASSE_SHURIKEN;
      }
    }
  });
}
