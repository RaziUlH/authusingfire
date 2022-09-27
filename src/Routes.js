import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { useAuth } from "./hooks/useAuth";
import Login from "./view/auth/Login";
import Signup from "./view/auth/Signup";
import Home from "./view/viewer/home/Home";

function Index() {
  const { user } = useAuth();

  return (
    <Routes>
      {user == null ? (
        <>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      )}
    </Routes>
  );
}

export default Index;
