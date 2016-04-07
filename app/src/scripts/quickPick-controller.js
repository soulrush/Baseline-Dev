'use strict';

angular.module('wageringApp')
    .controller('quickPickController', function (WagerFactory) {
      this.WagerFactory = WagerFactory;
    });