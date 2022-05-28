import React, { useState } from "react"

//import css
import "./order.css"

//import database
import Database from "../Database/database"

//import images
import deleteIcon from "../../images/trash-solid.svg"

//main function

function Orders() {
  //database
  const { database, setDatabase } = Database()

  //form data
  const [id, setId] = useState()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [product, setProduct] = useState()
  const [quantity, setQuantity] = useState()

  const handelDelete = (e) => {
    setDatabase(database.filter((order) => order.id !== e.id))
  }

  const handelAddOrder = (e) => {
    e.preventDefault()
    if (!id || !email || !name || !product || !quantity) {
      alert("All Fields are mendatory.")
      return
    }

    setDatabase([
      {
        id,
        customer_name: name,
        customer_email: email,
        product,
        quantity,
      },
      ...database,
    ])

    //setting the form back to empty cells
    setName("")
    setId("")
    setEmail("")
    setProduct("")
    setQuantity("")
  }

  //Edit Data
  function handelEditOrder(data) {
    handelDelete(data)

    setId(data.id)
    setName(data.customer_name)
    setEmail(data.customer_email)
    setProduct(data.product)
    setQuantity(data.quantity)
  }

  //Google Data
  const AdminEmail = localStorage.getItem("email")
  const AdminName = localStorage.getItem("userName")
  const AdminId = localStorage.getItem("googleId")

  return (
    <div className="container">
      <div className="profile">
        <h2>Admin</h2>
        <p>Email: {AdminEmail} </p>
        <p>Name: {AdminName} </p>
        <p>googleId: {AdminId} </p>
      </div>

      <div className="orders-section">
        <div className="orders">
          <form className="addOrder" onSubmit={handelAddOrder}>
            <div className="order-Data">
              <p>Order id:</p>
              <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
              <p>customer name:</p>
              <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
              <p>customer email:</p>
              <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
              <p>product:</p>
              <input type="text" onChange={(e) => setProduct(e.target.value)} value={product} />

              <p>quantity:</p>
              <input type="number" onChange={(e) => setQuantity(e.target.value)} value={quantity} />
              <br />
              <br />
              <button className="btn submit">ADD / UPDATE</button>
            </div>
          </form>

          {database.map((data) => {
            return (
              <div className="order" key={data.id}>
                <img className="delete-order" src={deleteIcon} alt="#" onClick={(e) => handelDelete(data)} />

                <div className="editOrder" onClick={() => handelEditOrder(data)}>
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
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Orders
