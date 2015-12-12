$(function() {

  "use strict";

  var shurikens = $(".shuriken");

  var NOME_CLASSE_VISIVEL = "js-detalhe-visivel";

  shurikens.on('click', function() {
    $(this).toggleClass(NOME_CLASSE_VISIVEL);
  });
});
