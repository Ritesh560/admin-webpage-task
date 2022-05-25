import React from "react"

//import css
import "./order.css"

//import images
import deleteIcon from "../../images/trash-solid.svg"

function Orders() {
  return (
    <div className="container">
      <div className="profile">Email: singlaritesh007@gamil.com</div>

      <div className="orders-section">
        <div className="orders">
          <button className="btn add-order">+ Add Order</button>

          <div className="order">
            <img className="delete-order" src={deleteIcon} alt="#" />
            <p className="id">Order ID: abckdksoeikld</p>
            <p className="name">Name: ramesh</p>
            <p className="email">Email: 123@gmail.com</p>
            <p className="product">Product: product 1</p>
            <p className="quantity">Quantity: 5</p>
          </div>
          <div className="order">
            <img className="delete-order" src={deleteIcon} alt="#" />
            <p className="id">Order ID: abckdksoeikld</p>
            <p className="name">Name: ramesh</p>
            <p className="email">Email: 123@gmail.com</p>
            <p className="product">Product: product 1</p>
            <p className="quantity">Quantity: 5</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders
