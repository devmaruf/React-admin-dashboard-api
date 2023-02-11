import { Navigate, Outlet } from "react-router-dom";
const useAuth = () => false;
export default function PrivateOutlet() {
  const auth = useAuth();

  return  auth ? <Outlet /> : <Navigate to="/login" replace/>
}