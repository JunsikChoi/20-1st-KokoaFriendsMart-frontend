import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './ProductItem.scss';
class ProductItem extends Component {
  gotoProduct = () => {
    this.props.history.push(`/product/${this.props.list.id}`);
  };

  render() {
    const { list, size } = this.props;
    return (
      <div className="ProductItem">
        <div className={`item ${size}`}>
          <div onClick={this.gotoProduct} className="thum">
            <div>
              <img
                src={list.thumbnail_url}
                alt="이미지 섬네일"
                className={`productImg ${size}`}
              />
            </div>
            <span className={`label ${list.is_sale ? 'sale' : 'hide'}`}>
              SALE
            </span>
            <span className={`label ${list.is_soldout ? 'soldOut' : 'hide'}`}>
              SOLD
              <br />
              OUT
            </span>
            <span className={`label ${list.is_set ? 'set' : 'hide'}`}>SET</span>
            <span className={`label ${list.is_new ? 'new' : 'hide'}`}>NEW</span>
          </div>
          <div className="itemDesc">
            <div className={`itemTitle ${size}`}>{list.name}</div>
            <i
              className={`fa-heart ${list.is_liked ? 'fas yellow' : 'far'}`}
            ></i>
            <div className={`itemPrice ${size}`}>
              {list.price.toLocaleString()}원
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductItem);
