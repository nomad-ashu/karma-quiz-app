import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../basic/Button";

const NavAvatarDetails = ({user}) => {
    let navigate = useNavigate()
    const handleLogInClick = () => {navigate("/SignIn")}

  return (
    <div className="relative bg-black bg-opacity-50">
      <div className="absolute top-2 right-2 mx-0 p-5 border w-60 shadow-lg rounded-md bg-gray-100 text-center">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{`Hello ${user}!`}</h3>
        {user.toUpperCase() === "GUEST" && (
          <div className="my-5">
            <Button onButtonClick={handleLogInClick} className={"text-sm"}>Log In</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavAvatarDetails;
