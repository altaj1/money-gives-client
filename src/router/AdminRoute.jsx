import { Navigate } from "react-router-dom"
import useRole from "../hooks/useRole"
import LoadingSpinner from "../Components/ReUseCom/LoadingSpinner"


const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <LoadingSpinner />
  if (role === 'Admin') return children
  return <Navigate to='/dashboard' />
}

export default AdminRoute


