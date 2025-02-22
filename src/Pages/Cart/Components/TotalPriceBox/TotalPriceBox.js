import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TotalPriceBox.scss';

class TotalPriceBox extends React.Component {
  render() {
    const {
      productPrice,
      totalProductPrice,
      cartProductData,
      totalPrice,
      checkedProductTotalPrice,
    } = this.props;
    return (
      <div className="totalPriceBox">
        <section className="totalPriceText">
          <div>상품금액</div>
          <div>즉시할인</div>
          <div>배송비</div>
          <div>주문예정 금액</div>
        </section>
        <section className="totalPriceNum">
          <div>{totalPrice}원</div>
          <div>0원</div>
          <div>3,000원</div>
          <div>
            <span className="equal">=</span>
            <span>
              {/* {(checkedProductTotalPrice(isChecked) + 3000).toLocaleString()} */}
            </span>
            원
          </div>
        </section>
      </div>
    );
  }
}
export default TotalPriceBox;
