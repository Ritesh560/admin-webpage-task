import React, { useState } from "react"

//import css
import "./order.css"

//import database
import Database from "../Database/database"

//import images
import deleteIcon from "../../images/trash-solid.svg"

function Orders() {
  const { database, setDatabase } = Database()

  const handelDelete = (e) => {
    setDatabase(database.filter((order) => order.id !== e.id))
  }

  return (
    <div className="container">
      <div className="profile">Email: singlaritesh007@gamil.com</div>

      <div className="orders-section">
        <div className="orders">
          <button className="btn add-order">+ Add Order</button>

          {database.map((data) => {
            return (
              <div className="order" key={data.id}>
                <img className="delete-order" src={deleteIcon} alt="#" onClick={(e) => handelDelete(data)} />
                <p className="id">
                  <b>Order ID: </b> {data.id}{" "}
                </p>
                <p className="name">
                  <b>Name:</b> {data.customer_name}{" "}
                </p>
                <p className="email">
                  <b>Email:</b> {data.customer_email}{" "}
                </p>
                <p className="product">
                  <b>Product:</b> {data.product}{" "}
                </p>
                <p className="quantity">
                  <b>Quantity:</b> {data.quantity}{" "}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Orders
