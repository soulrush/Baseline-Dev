"use strict";

angular.module('wageringApp').factory("WagerFactory", function(SalesHistoryService){
  var factory = {};

  var incrementalIndex = 0;

  factory.placeWager = function(game, price, qped) {
    this.add({
      name: game,
      price: price,
      id: incrementalIndex++,
      qped: qped | false
    });
  };

  factory.removeProduct = function(idToRemove) {
    for(var i=0; i<this.products.length; i++){
      if(this.products[i].id == idToRemove)
        this.products.splice(i,1);
    }
  };

  factory.calcTotal = function() {
    return this.products.reduce(function(sum, curr){
      return sum+curr.price;
    }, 0);
  };

  factory.quickPick = function($event) {
    var game = $event.currentTarget.getAttribute("data-game");
    var amount = $event.currentTarget.getAttribute("data-amount");

    this.placeWager(game, parseInt(amount), true);
  };

  factory.add =  function(game){
    this.products.push(game);
  };

  factory.sellWagers =  function(){
    SalesHistoryService.addSale(this.products.length, this.calcTotal(), this.products);
    this.products = [];
  };

  factory.clearWagers = function () {
    this.products = [];
  }
  factory.products = [];

  return factory;
});