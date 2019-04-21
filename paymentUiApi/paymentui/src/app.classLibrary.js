export class Product {
  constructor() {
    this.productId = "";
    this.price = 0;
    this.name = "";
  }
}

export class Member {
  constructor() {
    this.id = "100";
    this.fullName = "Jen Smart";
    this.zipCode = "84223";
    this.errorMessage = "OK";
    this.isSuccess = true;
  }
}

export class Payment {
  constructor() {
    this.id = 0;
    this.paymentAmount = 0;
    this.paymentDate = Date;
    this.nameOnCard = "";
    this.creditCardNumber = "4111111111111111";
    this.cvv = "123";
    this.paymentSource = "";
    this.expirationDate = "01-10-2022";
    this.isSuccess = false;
    this.errorMessage = "";
    this.paymentMessage = "";
    this.paymentConfirmationId = "";
    this.member = Member;
  }
}
