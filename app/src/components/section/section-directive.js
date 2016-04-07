'use strict';

var wageringApp  = angular.module("wageringApp");

wageringApp.directive('section', function(){

  return {
    scope: {
      name: '@'
    },
    templateUrl: 'components/section/section.html',
    transclude: true,
    controller: function(){

      this.show = true;
      this.toggleSection = function () {
        this.show = !this.show;
        console.log(this.show);
        return this.show;
      }
    },
    controllerAs: 'ctrl',
    bindToController: {
    }
  };

});