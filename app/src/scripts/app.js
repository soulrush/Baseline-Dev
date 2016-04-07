'use strict';

var wageringApp = angular.module('wageringApp', ['ui.router','ui.bootstrap','cgPrompt']);

wageringApp.constant('GAMES',   [
                                  {name: 'Lotto', price: 10, id:0},
                                  {name: 'Keno', price: 20, id:0},
                                  {name: 'Pick3', price: 5, id:0},
                                ]);

wageringApp.controller("MainCtrl", function($scope, WagerFactory, SalesHistoryService, $state, GAMES){

  this.WagerFactory = WagerFactory;
  this.SalesHistoryService = SalesHistoryService;

  this.games = GAMES;

  this.changeState = function (place) {
      $state.go(place);
  };
});

wageringApp.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state("dashboard", {
    url: "/dashboard",
    views: {
      "dashboard": {
        templateUrl : "views/dashboard.html"
      }
    }
  });

  $stateProvider.state("history", {
    url: "/history",
    views: {
      "dashboard": {
        templateUrl : "views/history.html"
      }
    }
  });

  $stateProvider.state("reports", {
    url: "/reports",
    views: {
      "dashboard": {
        templateUrl : "views/report.html"
      }
    }
  });

  $urlRouterProvider.otherwise("/dashboard");
});

function Sale(id, numberOfWagers, total, wagers){
  this.id = id;
  this.numberOfWagers = numberOfWagers;
  this.total = total;
  this.wagers = wagers;
}
