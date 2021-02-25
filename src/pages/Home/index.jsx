import React, { useContext } from "react";

import { UserContext } from "../../context/User";

import { login } from "../../utils/login";

const Index = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Home</h2>
      <pre className="">{JSON.stringify(user)}</pre>
      {user ? (
        <button
          onClick={() => {
            // call to server
            setUser(null);
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          login
        </button>
      )}
    </div>
  );
};

export default Index;
