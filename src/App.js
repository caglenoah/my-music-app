import './App.css';
import React, { useState } from "react";
import Header from "./components/Header"
import SignIn from "./components/SignIn"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="App">
      <Header />
      {isLoggedIn ? (
        <p>You are logged in</p>
      ) : (
          <SignIn setIsLoggedIn = { setIsLoggedIn } />
      )
    }
    </div>
  );
}

export default App;
