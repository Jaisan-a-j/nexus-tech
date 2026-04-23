import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state: RootState) => state.user);
  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
