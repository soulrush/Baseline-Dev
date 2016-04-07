'use strict';

angular.module('wageringApp')
    .directive('salesReports', function () {
        return {
            scope: true,
            templateUrl: 'components/sales-reports/sales-reports.html',
            controller: function (SalesHistoryService, GAMES) {
                this.SalesHistoryService = SalesHistoryService;

                this.salesPerGame = {};

                for(var i=0; i<GAMES.length; i++){
                    this.salesPerGame[GAMES[i].name] = 0;
                }

                for(var i=0; i<SalesHistoryService.salesList.length; i++) {
                    var wagers = SalesHistoryService.salesList[i].wagers;
                    var tempArray = [];

                    for(var j=0; j<wagers.length; j++){
                        this.salesPerGame[wagers[j].name] = this.salesPerGame[wagers[j].name] + wagers[j].price;
                    }
                };
            },
            controllerAs: 'ctrl',
            bindToController: {
                salesPerGame: '@'
            }
        }
    });