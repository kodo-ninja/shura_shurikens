"use strict";

var NOME_CLASSE_VISIVEL = "js-detalhe-visivel";
var NOME_CLASSE_SHURIKEN = "shuriken";

var shurikens = document.getElementsByClassName(NOME_CLASSE_SHURIKEN);

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
