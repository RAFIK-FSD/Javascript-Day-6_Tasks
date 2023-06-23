class UberPriceCalculator {
    constructor (ratePerKilometer) {
         return this.ratePerKilometer = ratePerKilometer;
    }
    calculatePrice (distanceInKilometer) {
          return this.ratePerKilometer * distanceInKilometer
    }

}


let calculator = new UberPriceCalculator(0.5);


let distance = 10;
console.log(calculator.calculatePrice(distance));






