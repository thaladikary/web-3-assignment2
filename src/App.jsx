import { useContext, useState } from "react";
import Login from "./views/Login";
import Home from "./views/Home";
import { AppContext } from "./Context";

function App() {
  const { loggedIn, setLoggedIn } = useContext(AppContext);

  return <div>{loggedIn ? <Home /> : <Login />}</div>;
}

export default App;
