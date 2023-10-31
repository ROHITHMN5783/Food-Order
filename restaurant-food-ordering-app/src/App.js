import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Authentication from "./components/Auth/Authentication";
import { useState } from "react";
import Passwordreset from "./components/Resetpassword/Passwordreset";
import MyModal from "./components/Navbar/Modal";
import FoodHome from "./components/FoodHome/FoodHome";
import MenuItems from "./components/MenuFood/MenuItems";
import { useSelector } from "react-redux";
import About from "./components/About/About";

function App() {
  const [isLogin, setisLogin] = useState(true);
  const auth = useSelector((state) => state.auth);
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <FoodHome />
            </>
          }
        />
        <Route
          path="/auth"
          element={
            <>
              <Navbar />
              <Authentication isLogin={isLogin} setisLogin={setisLogin} />
            </>
          }
        />
        <Route
          path="/reset"
          element={
            <>
              <Navbar />
              <Passwordreset />
            </>
          }
        />

        {auth.isAuthenticated && (
          <Route
            path="/menu"
            element={
              <>
                <Navbar />
                <MyModal />
                <MenuItems />
              </>
            }
          />
        )}
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
