import React, { Component } from "react";
import "./App.css";
import { PaymentService } from "./payment.service";
import { Member, Product } from "./app.classLibrary";
import MemberComponent from "./member.component";
import PaymentComponent from './payment.component'

import ProductComponent from './product.component'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      member: Member,
      products: [],
      selectedProduct: Product,

    };
    this.onUpdateSelectedProduct = this.onUpdateSelectedProduct.bind(this);
    this.onProductListChange= this.onProductListChange.bind(this); 

  }
  getMember() {
    PaymentService.getMember(1)
      .then(res => {
        this.setState({
          member: res.data
        });
      })
      .catch(error => {
        console.log("There is an error in Get API call." + error);
      });
  }

  getProductList() {
    PaymentService.getProductList()
      .then(res => {
        console.dirxml( res.data);
        this.setState({
          products: res.data
        });
      })
      .catch(error => {
        console.log("There is an error in Get API call." + error);
      });
  }

  onUpdateSelectedProduct(value) {
    this.selectedProduct.setState({ selectedProduct: { value } });
  }
  onProductListChange(event){
    let  value= JSON.parse(event.target.value);
     this.setState({selectedProduct : value});
     console.log(value)
   }
  componentDidMount() {
    this.getMember();
    this.getProductList();
  }

  render() {
    return (
      <div className="paymentbody">
        <h2>Payment Process</h2>
        <MemberComponent member={this.state.member} />
        <ProductComponent state={this.state} onProductListChange={this.onProductListChange}/>
        <PaymentComponent state={this.state} />

        <hr />
        Provided by -SmartIT, John Kocer
      </div>
    );
  }
}

export default App;
