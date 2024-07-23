import React, { useState } from "react";
import NavAvatarDetails from "./NavAvatarDetails";
import { useAuth } from "../../hooks/useAuth";

const NavAvatar = () => {
  const [showDetails, setShowDetails] = useState(false);
  const {userId} = useAuth()

  const userDetails = JSON.parse(localStorage.getItem('userDetails'))

  let user = userDetails ? userDetails['userId'] : userId

  return (
    <div className="flex-row">
    <button onClick={() => setShowDetails(!showDetails)}>
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full mr-6">
        <span className="font-medium text-gray-600">
          {user.charAt(0).toUpperCase()}
        </span>
      </div>
    </button>
    {showDetails && <NavAvatarDetails user={user}/>}
    </div>
  );
};

export default NavAvatar;
