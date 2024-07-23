import { useContext } from 'react'
import UserContext from '../contexts/userContext'

export const useAuth = () => {
    const context = useContext(UserContext)
    return context
}
