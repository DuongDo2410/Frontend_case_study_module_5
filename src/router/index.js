import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";

export const publicRouter = [
  { path: "/", component: Home },
  { path: "/profile", component: Profile },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

export const privateRouter = [];
