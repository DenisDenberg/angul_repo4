(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemListController', ItemListController);
ItemListController.$inject = ['$stateParams','MenuDataService', 'items'];
function ItemListController($stateParams, MenuDataService, items) {
  var $ctrl = this;
  $ctrl.items = items.menu_items;
  $ctrl.category = items.category;
}

})();
