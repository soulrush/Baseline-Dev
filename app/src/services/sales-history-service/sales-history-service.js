angular.module('wageringApp')
    .service('SalesHistoryService', function () {
      this.salesList = [];
      this.autoIncrements = 1;

      this.addSale = function (numberOfwagers, total, wagers){
          this.salesList.push(new Sale(this.autoIncrements++, numberOfwagers, total, wagers));
          console.log(this.salesList);
          };

      this.grandTotal = function (){
        return this.salesList.reduce(function (sum, curr) {
          return sum+curr.total;
      }, 0);};
    });