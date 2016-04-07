'use strict';

angular.module('wageringApp')
    .directive('salesHistory', function () {
        return {
            scope: true,
            templateUrl: 'components/sales-history/sales-history.html',
            controller: function (SalesHistoryService) {
                this.SalesHistoryService = SalesHistoryService;
            },
            controllerAs: 'ctrl',
            bindToController: {
            }
        }
    });