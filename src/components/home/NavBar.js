import React from "react";
import { useAuth } from "../../hooks/useAuth";

function NavBar() {
  const { logout } = useAuth();
  return (
    <div
      style={{
        display: "flex",
        height: "80px",
        background: "yellow",
        justifyContent: "space-between",
        padding: "0px 20px",
        alignItems: "center",
        position: "sticky",
      }}
    >
      <h1>TodoList</h1>
      <button
        onClick={logout}
        style={{
          backgroundColor: "#00a1ff",
          height: "34px",
          border: "none",
          color: "white",
          transition: "0.5s",
          fontWeight: "bold",
        }}
      >
        logout
      </button>
    </div>
  );
}

export default NavBar;
