import React, { useContext } from "react";

import { UserContext } from "../../context/User";

const Index = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>About</h2>
      <pre className="">{JSON.stringify(user)}</pre>
    </div>
  );
};

export default Index;
