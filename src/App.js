import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { privateRouter } from "./router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { setStatusAction } from "./redux/actionThunk";
import { useEffect } from "react";
function App() {
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
  useEffect(() => {
    if (status == "fulfilled") {
      notify();
      disPatch(setStatusAction());
    }
  }, [status]);
  return (
    <Router>
      <Routes>
        {privateRouter.map((router, index) => {
          const Element = router.component;
          return <Route key={index} path={router.path} element={<Element />} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
