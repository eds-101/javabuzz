class Javabuzz {

  _isDivisibleBy(number, divisor) { 
    return (number % divisor === 0);
  }

  says(number){
    if (this.isDivisibleByFifteen(number)){
      return "JavaBuzz";
    }
    if (this.isDivisibleByThree(number)){
      return "Java";
    }
    if (this.isDivisibleByFive(number)){
      return "Buzz";
    }
    return number;
  }

  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }
  // isDivisibleByThree(number) {
  //   return (number % 3 === 0);
  // }
  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  }
  // isDivisibleByFive(number) {
  //     return (number % 5 === 0);
  // }

  isDivisibleByFifteen(number) {
    return this._isDivisibleBy(number, 15);
  }
  // isDivisibleByThreeAndFive(number) {
  //   return ((number % 5 === 0) && 
  //   (number % 3 === 0 ) )
  // }

  }
