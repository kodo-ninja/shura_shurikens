"use strict";

var shuriken1 = document.getElementById("shuriken01");
var shuriken2 = document.getElementById("shuriken02");
var shuriken3 = document.getElementById("shuriken03");
var shuriken4 = document.getElementById("shuriken04");

var NOME_CLASSE_VISIVEL = "js-detalhe-visivel";
var NOME_CLASSE_INVISIVEL = "js-detalhe-invisivel";

shuriken1.addEventListener('click', function() {
  if (this.className === NOME_CLASSE_VISIVEL) {
    this.className = NOME_CLASSE_INVISIVEL;
  }
  else {
    if (this.className === NOME_CLASSE_INVISIVEL) {
      this.className = NOME_CLASSE_VISIVEL;
    }
  }
});

shuriken2.addEventListener('click', function() {
  if (this.className === NOME_CLASSE_VISIVEL) {
    this.className = NOME_CLASSE_INVISIVEL;
  }
  else {
    if (this.className === NOME_CLASSE_INVISIVEL) {
      this.className = NOME_CLASSE_VISIVEL;
    }
  }
});

shuriken3.addEventListener('click', function() {
  if (this.className === NOME_CLASSE_VISIVEL) {
    this.className = NOME_CLASSE_INVISIVEL;
  }
  else {
    if (this.className === NOME_CLASSE_INVISIVEL) {
      this.className = NOME_CLASSE_VISIVEL;
    }
  }
});

shuriken4.addEventListener('click', function() {
  if (this.className === NOME_CLASSE_VISIVEL) {
    this.className = NOME_CLASSE_INVISIVEL;
  }
  else {
    if (this.className === NOME_CLASSE_INVISIVEL) {
      this.className = NOME_CLASSE_VISIVEL;
    }
  }
});
