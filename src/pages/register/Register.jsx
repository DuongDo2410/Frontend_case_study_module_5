import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerAction } from "../../redux/actionThunk";
import "./register.css";
import Alert from "../../components/alert/Alert";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { YouTube } from "@material-ui/icons";

const schema = yup
  .object({
    name: yup.string().trim().required(),
    username: yup.string().trim().required(),
    email: yup.string().trim().required().email(),
    password: yup.string().trim().required(),
    confirm_password: yup
      .string()
      .label("confirm password")
      .required()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    dob: yup
      .date()
      .transform(function (value, originalValue) {
        if (this.isType(value)) {
          return value;
        }
        console.log(value);
        return value;
      })
      .typeError("The value must be a date (YYYY-MM-DD)")
      .max(new Date(), "must not exceed the current date"),
    gender: yup.string().required(),
  })
  .required();

export default function Register() {
  let { status } = useSelector((state) => state.auth);
  const disPatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    data.dob = data.dob.toLocaleDateString("en-GB");
    disPatch(registerAction(data));
  };
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
            <div className="bg-white p-8 rounded-lg">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" grid gap-6 my-6 md:grid-cols-2">
                  <div>
                    <div>
                      <input
                        type="text"
                        id="success"
                        className={
                          errors.name
                            ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                            : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        }
                        {...register("name")}
                        placeholder="Full name"
                      />
                      {errors.name && (
                        <p className=" text-sm text-red-600 dark:text-red-500">
                          {errors.name?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="username"
                      className={
                        errors.username
                          ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                          : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      }
                      {...register("username")}
                      placeholder="User name"
                    />
                    {errors.username && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {errors.username?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    id="email"
                    className={
                      errors.email
                        ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                        : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    }
                    {...register("email")}
                    placeholder="doe@company.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {errors.email?.message}
                    </p>
                  )}
                </div>
                <div className=" grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <input
                      type="password"
                      id="password"
                      className={
                        errors.password
                          ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                          : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      }
                      {...register("password")}
                      placeholder="Password"
                    />
                    {errors.password && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {errors.password?.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="password"
                      id="confirm_password"
                      className={
                        errors.confirm_password
                          ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                          : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      }
                      {...register("confirm_password")}
                      placeholder="Confirm password"
                    />
                    {errors.confirm_password && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {errors.confirm_password?.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <input
                    type="date"
                    id="dob"
                    className={
                      errors.dob
                        ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                        : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    }
                    {...register("dob")}
                  />
                  {errors.dob && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {errors.dob?.message}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <div className="grid md:grid-cols-3 ">
                    <div className="flex items-center">
                      <input
                        defaultChecked
                        id="default-radio-1"
                        type="radio"
                        defaultValue
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        {...register("gender")}
                      />
                      <label
                        htmlFor="default-radio-1"
                        className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-300"
                      >
                        Male
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="default-radio-2"
                        type="radio"
                        defaultValue
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        {...register("gender")}
                      />
                      <label
                        htmlFor="default-radio-2"
                        className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-300"
                      >
                        Famale
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="default-radio-2"
                        type="radio"
                        defaultValue
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        {...register("gender")}
                      />

                      <label
                        htmlFor="default-radio-2"
                        className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-300"
                      >
                        Custom
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-36 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Create an account
                  </button>
                </div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400 ml-2 my-3">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
