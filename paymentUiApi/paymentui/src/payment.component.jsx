import React, { Component } from "react";
import { Payment } from "./app.classLibrary";
import { PaymentService } from "./payment.service";

const paymentType = [
  { text: "Visa", value: "Visa" },
  { text: "Mastercard", value: "Mastercard" },
  { text: "Discover", value: "Discover" },
  { text: "AmericanExpress", value: "AmericanExpress" },
  { text: "SearsCard", value: "SearsCard" },
  { text: "SearsGiftCard", value: "SearsGiftCard" }
];

class PaymentComponent extends Component {
  paymentAmount = 0;

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      payment: new Payment(),
      paymentMessage: "",
      paymentProcessStyle: "input-valid"
    };

    this.isPaymentClick = false;
    this.paymentAmountRef = React.createRef();
    this.paymentSourceRef = React.createRef();

    this.onHandleMakePaymentClick = this.onHandleMakePaymentClick.bind(this);
    this.onPaymentTypeChange = this.onPaymentTypeChange.bind(this);
    this.onCreditCartChange = this.onCreditCartChange.bind(this);
    this.onExpirationDateChange = this.onExpirationDateChange.bind(this);
    this.onCvvChange = this.onCvvChange.bind(this);
    this.onPaymentAmountChange = this.onPaymentAmountChange.bind(this);
  }

  onPaymentTypeChange(event) {
    let value = JSON.parse(event.target.value);
    let newPayment = this.state.payment;
    newPayment.paymentSource = value.paymentType;
    this.setState({ payment: newPayment });

    console.log(value);
  }

  onHandleMakePaymentClick() {
    this.isPaymentClick = true;
    let payment = Object.assign({}, this.state.payment);
    payment.nameOnCard = this.props.state.member.fullName;
    payment.member = this.props.state.member;
    payment.paymentAmount = this.paymentAmountRef.current.value;
    payment.paymentSource = JSON.parse(
      this.paymentSourceRef.current.value
    ).value;
    console.dirxml(payment);
    if (this.props.state.selectedProduct.price === undefined) {
      this.setState({ paymentMessage: "Select Payment!", payment: payment });
      this.setState({ paymentProcessStyle: "input-invalid" });
      return;
    } else if (this.paymentAmountRef.current.value === "") {
      this.setState({
        paymentMessage: "Enter Payment Amount!",
        payment: payment
      });
      this.setState({ paymentProcessStyle: "input-invalid" });

      return;
    }

    const res = this.makePayment(payment);
    console.dirxml(res);
    this.paymentAmount = 0;
  }

  onCreditCartChange(event) {
    let updatedPayment = Object.assign({}, this.state.payment);
    updatedPayment.creditCardNumber = event.target.value;
    this.setState({ payment: updatedPayment });
  }

  onPaymentAmountChange(event) {
    event.preventDefault();
    this.paymentAmount = event.target.value;
  }

  onExpirationDateChange(event) {
    let updatedPayment = Object.assign({}, this.state.payment);
    updatedPayment.expirationDate = event.target.value;
  }

  onCvvChange(event) {
    let updatedPayment = Object.assign({}, this.state.payment);
    updatedPayment.cvv = event.target.value;
    this.setState({ payment: updatedPayment });
  }

  makePayment(payment) {
    if (!payment) {
      return;
    }

    PaymentService.makePayment(payment)
      .then(data => {
        this.setState({
          paymentMessage: data.paymentMessage,
          paymentProcessStyle: "input-valid"
        });
        console.log("Payment processed: " + this.state.paymentMessage);
      })
      .catch(error => {
        console.log("Error in make payment" + error);
      });
  }

  componentDidUpdate() {
    console.log("In componentDidUpdate");
    if (
      this.props.state.selectedProduct.price !== undefined &&
      this.isPaymentClick === false
    ) {
      this.paymentAmountRef.current.value = this.props.state.selectedProduct.price;
    } else {
      this.isPaymentClick = false;
    }
  }

  getClassName() {
    return this.state.paymentProcessStyle;
  }
  render() {
    return (
      <fieldset>
        <legend>
          <span>Payment Info: </span>
        </legend>
        <table>
          <tbody>
            <tr>
              <td>
                <label className="paymentTH">Payment Type:</label>
              </td>
              <td>
                <select
                  onChange={this.onPaymentTypeChange}
                  ref={this.paymentSourceRef}
                >
                  {paymentType.map(option => (
                    <option key={option.text} value={JSON.stringify(option)}>
                      {option.value}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label className="paymentTH">Credit Card Number</label>
                <br />
                <input
                  type="text"
                  value={this.state.payment.creditCardNumber}
                  onChange={this.onCreditCartChange}
                  required
                  className="number - input"
                  size={16}
                  // maxsize={16}
                  //value={4111111111111111}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="paymentTH">Expiry Date</label>
                <br />
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={this.state.payment.expirationDate}
                  onChange={this.onExpirationDateChange}
                  placeholder="01/10/2022"
                  required
                  size={10}
                  maxsize={10}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="paymentTH">Security code</label>
                <br />
                <input
                  id="creditCardNumber"
                  name="creditCardNumber"
                  value={this.state.payment.cvv}
                  onChange={this.onCvvChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="paymentTH">Payment Amount:</label>
                <br />
                $
                <input
                  type="text"
                  id="paymentAmount"
                  name="paymentAmount"
                  size={5}
                  defaultValue={this.props.state.selectedProduct.price}
                  ref={this.paymentAmountRef}
                  onChange={this.onPaymentAmountChange}
                />
                <button onClick={this.onHandleMakePaymentClick}>
                  Process Payment
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <label className={this.state.paymentProcessStyle}>
          {this.state.paymentMessage}
        </label>
      </fieldset>
    );
  }
}
export default PaymentComponent;
