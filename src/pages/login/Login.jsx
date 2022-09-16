import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, setStatusAction } from "../../redux/actionThunk";
import { useForm } from "react-hook-form";
export default function Login() {
  let { status } = useSelector((state) => state.auth);
  const disPatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => disPatch(loginAction(data));
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="Username"
                className="loginInput"
                {...register("username")}
              />
              <input
                placeholder="Password"
                className="loginInput"
                {...register("password")}
              />
              <button className="loginButton">Log In</button>
            </form>
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
