import { createContext } from "react";

const UserContext = createContext({
    isLoggedIn: false,
    userId: 'guest',
    userRole: null,
    login: () => {},
})

export default UserContext