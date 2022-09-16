import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerAction } from "../../redux/actionThunk";
import "./register.css";
import Alert from "../../components/alert/Alert";

export default function Register() {
  const disPatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  let { status } = useSelector((state) => state.auth);
  const onSubmit = (data) => disPatch(registerAction(data));
  status == "fulfilled" && navigate("/login");

  return (
    <>
      {status == "pending" && <Alert />}
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Lamasocial</h3>
            <span className="loginDesc">
              Connect with friends and the world around you on Lamasocial.
            </span>
          </div>
          <div className="loginRight">
            <form className="loginBox" onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="Username"
                className="loginInput"
                {...register("username")}
              />
              <input
                placeholder="Full name"
                className="loginInput"
                {...register("name")}
              />
              <input
                placeholder="Email"
                className="loginInput"
                {...register("email")}
              />
              <input
                placeholder="Password"
                className="loginInput"
                {...register("password")}
              />
              <input
                placeholder="Password Again"
                className="loginInput"
                // {...register("comfirmPassword")}
              />
              <button className="loginButton">Sign Up</button>
              <Link to={"/login"} className="loginRegisterButton">
                Log into Account
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
