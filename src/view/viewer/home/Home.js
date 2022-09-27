import React from "react";
import Footer from "../../../components/home/Footer";
import NavBar from "../../../components/home/NavBar";
import TodoList from "../../../components/home/TodoList";
import { useAuth } from "../../../hooks/useAuth";

function Home() {
  const { logout } = useAuth();

  return (
    <div>
      <NavBar />
      <TodoList />
      <Footer />
    </div>
  );
}

export default Home;
