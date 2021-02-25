import React, { useState, useMemo } from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { UserContext } from "./context/User";

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <UserContext.Provider value={value}>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
