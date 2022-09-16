import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouter } from "./router";
function App() {
  return (
    <Router>
      <Routes>
        {publicRouter.map((router, index) => {
          const Element = router.component;
          return <Route key={index} path={router.path} element={<Element />} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
