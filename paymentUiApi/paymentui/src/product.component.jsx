import React, { Component } from "react";
class ProductComponent extends Component {

  render() {
    const { state, onProductListChange } = this.props;

    return (
      <fieldset>
        <legend>
          <span>Products:</span>{" "}
        </legend>
        <table>
          <tbody>
            <tr>
              <th className="paymentTHBold">Products</th>
              <th className="paymentTHBold">&nbsp;&nbsp;&nbsp;Total Price</th>
              <th className="paymentTHBold">
                &nbsp;&nbsp;&nbsp;Monthly Payment
              </th>
            </tr>
            <tr>
              <td>
                <select onChange={onProductListChange}>
                  {this.props.state.products.map(option => (
                    <option key={option.id} value={JSON.stringify(option)}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                $
                <input
                  className="paymentTHBold"
                  disabled={true}
                  readOnly
                  value={state.selectedProduct.price || ""}
                />
              </td>
              <td>
                $
                <input
                  className="paymentTHBold"
                  disabled={true}
                  readOnly
                  value={
                    state.selectedProduct.price > 0
                      ? state.selectedProduct.price / 12
                      : 0
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    );
  }
}
export default ProductComponent;
