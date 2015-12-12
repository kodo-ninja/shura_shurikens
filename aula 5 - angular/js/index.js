"use strict";

angular
  .module('shuraShurikens', [])
  .controller('ShurikensController', function($scope) {
      $scope.itens = [
        {nome: 'Shuriken Hachi', imagem: 'imagens/shuriken01.jpg', descricao: 'Shuriken Hachi', visivel: false},
        {nome: 'Shuriken Kuraidesu', imagem: 'imagens/shuriken02.jpg', descricao: 'Shuriken Kuraidesu', visivel: false},
        {nome: 'Shuriken Toge', imagem: 'imagens/shuriken03.jpg', descricao: 'Shuriken Toge', visivel: false},
        {nome: 'Shuriken Sokudo', imagem: 'imagens/shuriken04.jpg', descricao: 'Shuriken Sokudo', visivel: false}
      ];

      $scope.toggleItem = function(item) {
        item.visivel = !item.visivel;
      };
  });
