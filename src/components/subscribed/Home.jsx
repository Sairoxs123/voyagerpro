import React from "react";
import { isLoggedIn, getUser, clearAuth } from "../../utils/api";

const Home = () => {

  if (!isLoggedIn()) {
    return (window.location.href = "/signin");
  }

  const user = getUser();

  function upperCaseFirstLetters(str) {
    return str
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }

  const logout = () => {
    clearAuth();
    return (window.location.href = "/signin");
  };

  return (
    <div>
      <h1>{upperCaseFirstLetters(user.name)}</h1>

      <button type="button" onClick={logout}>
        Log out
      </button>
    </div>
  );
};
};

export default Home;
