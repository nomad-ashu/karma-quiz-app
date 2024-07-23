import React, { useState, useEffect } from "react";

import { useAuth } from "../../hooks/useAuth";

import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { userId, isLoggedIn, userRole, login } = useAuth();

  const handleButtonClick = (e) => {
    e.preventDefault();
    login(userName, password);
  };

  useEffect(() => {
    localStorage.setItem(
      "userDetails",
      JSON.stringify({
        userId: userId,
        isLoggedIn: isLoggedIn,
        userRole: userRole,
      })
    );
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <div>
      <div className="w-full h-screen bg-gray-300">
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white p-8 rounded shadow-md w-96">
            <h1 className="text-center">Log In</h1>
            <form>
              <div className="bg-teal-100 m-2 p-2 rounded shadow-lg">
                <div className="flex align-middle items-center">
                  <label
                    htmlFor="userName"
                    className="inline-block m-2 w-16 font-thin"
                  >
                    User
                  </label>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="h-6 mr-2 flex-auto p-2 text-sm font-mono"
                    placeholder="Enter User Name"
                  />
                </div>
                <div className="flex align-middle items-center mt-4">
                  <label
                    htmlFor="password"
                    className="inline-block m-2 w-16 font-thin"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-6 mr-2 flex-auto p-2 text-sm font-mono"
                  />
                </div>
                <div className="flex justify-center items-center my-2">
                  {!isLoggedIn && (
                    <Button
                      onButtonClick={handleButtonClick}
                      className={"text-sm"}
                    >
                      Log In
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
