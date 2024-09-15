import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth/index";

import Layout from "./components/Layout/index";
import Main from "./pages/Main/index";
import About from "./pages/About/index";
import Signin from "./pages/Signin/index";
import Signup from "./pages/Signup/index";
import Temap from "./pages/Temap/index";
import Ptstur from "./pages/PtsTur/index";
import Hist from "./pages/Hist/index";
import Fauflo from "./pages/Fauflo/index";

//import Header from "./components/header/index";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/about" element={<RequireAuth element={<About />} />} />
          <Route path="/tema" element={<RequireAuth element={<Temap />} />} />
          <Route
            path="/historia"
            element={<RequireAuth element={<Hist />} />}
          />
          <Route
            path="/faunaflora"
            element={<RequireAuth element={<Fauflo />} />}
          />
          <Route
            path="/pturisticos"
            element={<RequireAuth element={<Ptstur />} />}
          />
        </Route>
        <Route path="/" element={<Main />} />
        <Route path="/cultura" element={<Hist />} />
        <Route path="/faunaflora" element={<Fauflo />} />
        <Route path="/pturisticos" element={<Ptstur />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
