'use strict';

angular.module('wageringApp')
    .directive('salesList', function () {
        return {
            scope: true,
            templateUrl: 'components/sales-list/sales-list.html',
            controller: function (WagerFactory) {
              this.WagerFactory = WagerFactory;
            },
            controllerAs: 'ctrl',
            bindToController: {
            }
        }
    });