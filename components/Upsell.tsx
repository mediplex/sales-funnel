import React from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from "./Alert";

export const Upsell = () => {
  return (
    <div className="section">
      <Alert/>
      <progress className="progress" value="75" max="100">
        75%
      </progress>
      <h1 className="title">Step 2</h1>
      <p className="subtitle">We are ready to ship your Product</p>

      <section className="section">
        <UpSellCard
          grade={"One time offer"}
          productName={"Amazing Product"}
          currentPrice={497}
          oldPrice={999}
          currency={"$"}
          discountPhrase={"70% OFF - 60 per unit"}
          quantity={3}
        />
      </section>

      <Cart />
    </div>
  );
};

const UpSellCard = ({
  highlighted,
  grade,
  productName,
  currentPrice,
  oldPrice,
  currency,
  discountPhrase,
  quantity,
  addToCard,
}) => {
  return (
    <div
      className="card"
      style={{ border: highlighted ? "solid hsl(141, 71%, 48%)" : "" }}
    >
      <div className="card-content">
        <p className="text-block is-capitalized has-text-success has-text-weight-bold is-family-code">
          {grade}
        </p>
        <div className="columns">
          <div className="column">
            <div className="columns is-mobile">
              <div className="column">
                <strong>
                  {quantity} x {productName}
                </strong>
                <br />
                <span>{discountPhrase}</span>
              </div>
              <div className="column is-narrow">
                {/* <strong>
                  {currency}
                  {currentPrice}
                </strong>
                <br />
                <del>
                  {currency}
                  {oldPrice}
                </del> */}
                <button className="button is-success  is-uppercase">
                  <FontAwesomeIcon icon={faCartPlus} />
                  &nbsp;&nbsp;Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <section className="section">
      <table className="table is-fullwidth is-hoverable">
        <thead>
          <tr>
            <th className="is-expanded">Items</th>
            <th className="has-text-right">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Amazing Product</td>
            <td className="has-text-right">$99</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="has-text-weight-bold">
            <td>Order Total:</td>
            <td className="has-text-right">$997</td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};
