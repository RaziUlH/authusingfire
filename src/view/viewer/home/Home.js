import React from "react";
import { useAuth } from "../../../hooks/useAuth";

function Home() {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default Home;
