import React from "react"
import GoogleLogin from "react-google-login"

//importing css
import "./login.css"

function Login() {
  const handelLogin = (e) => {
    localStorage.setItem("googleId", e.profileObj.googleId)
    localStorage.setItem("userName", e.profileObj.name)
    localStorage.setItem("email", e.profileObj.email)
    console.log(e.profileObj)
  }

  return (
    <>
      <div className="googleLogin">
        <p>Login with Google</p>
        <GoogleLogin clientId="446506585936-0ple409lo70vq4sv9s07kf7kp38suqqh.apps.googleusercontent.com" buttonText="Google" onSuccess={handelLogin} onFailure={handelLogin} cookiePolicy={"single_host_origin"} />
      </div>
    </>
  )
}

export default Login
