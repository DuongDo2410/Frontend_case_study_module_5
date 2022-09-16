import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { setStatusAction } from "../../redux/actionThunk";

export default function Login() {
  let { status } = useSelector((state) => state.auth);
  const disPatch = useDispatch();

  const notify = () => {
    toast.success("🦄 Login success!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  if (status == "fulfilled") {
    console.log("done");
    notify();
    disPatch(setStatusAction());
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to={"/register"} className="loginRegisterButton">
              Create a New Account
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
