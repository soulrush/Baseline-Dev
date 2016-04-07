'use strict';

angular.module('wageringApp')
    .directive('wagerForm', function () {
        return {
            scope: true,
            templateUrl: 'components/wager-form/wager-form.html',
            controller: function (WagerFactory, prompt) {

                this.game = null;
                this.price = null;
                this.repeats = 1;

                this.onSubmit = function(){
                    var that = this;
                    if(this.repeats > 1){
                      prompt({
                        "title": "Are you really, really sure?",
                        "message": "More than one repeat was selected ("+this.repeats+"), do you want to continue?",
                      }).then(function(result){
                        for(var i=0; i<that.repeats; i++)
                          WagerFactory.placeWager(that.game, that.price);
                        that.defaultValues();
                      });
                    } else {
                        WagerFactory.placeWager(this.game, this.price);
                        that.defaultValues();
                    }
                  };

                  this.defaultValues = function() {
                    this.game = null;
                    this.repeats = 1;
                    this.price = null;
                  }
            },
            controllerAs: 'ctrl',
            bindToController: {
                games: '='
            }
        }
    });