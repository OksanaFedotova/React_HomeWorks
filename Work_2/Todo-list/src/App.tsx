import "./App.css";
import type { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import User from "./pages/User/User";
import Form from "./components/Form/Form";
import Todos from "./pages/Todos/Todos";
import Main from "./pages/Main/Main";

function App() {
  const user = useSelector((state: RootState) => state.user);
  const token = localStorage.getItem("accessToken");
  const [textBanner, setTextBanner] = useState("Ожидаем действия...");
  let isLogin = false;
  if(user?.username)
    isLogin = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main setTextBanner={setTextBanner} isLogin={isLogin} textBanner={textBanner}/>} />
        <Route path="/signin" element={<Form signup={false} />} />
        <Route path="/signup" element={<Form signup={true}/>} />
        <Route
          path="/user"
          element={!user?.username ? <Navigate to="/" /> : <User />}
        />
        <Route
          path="/todos"
          element={!token ? <Navigate to="/" /> : <Todos />}
        />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
