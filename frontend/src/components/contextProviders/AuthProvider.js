import React, {useState } from "react";
import UserContext from "../../contexts/userContext";

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("guest");
  const [userRole, setUserRole] = useState(null);

  const login = async (userId, password) => {
    fetch(`/api/users/${userId}`)
      .then((response) =>
        response.json().then((data) => {
          if (response.status === 200) {
            if (data["password"] === password) {
              return data;
            }
          }
          return false;
        })
      )
      .then((val) => {
        if (val) {
          setIsLoggedIn(true);
          setUserId(val.id);
          setUserRole(val.role);
        }
      })
      .catch((error) => setIsLoggedIn(false));
  };
  return (
    <UserContext.Provider value={{isLoggedIn, userId, userRole, login }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
