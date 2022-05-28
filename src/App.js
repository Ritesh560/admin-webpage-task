import React, { useState } from "react"

//importing orders
import Orders from "./components/Orders/order"
import Login from "./components/GoogleLogin/login"

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("googleId"))

  if (!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} />
  }

  return (
    <>
      <Orders />
    </>
  )
}

export default App
