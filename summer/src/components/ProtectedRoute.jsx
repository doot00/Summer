
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children, requireAdmin }) {
    const { user } = useAuthContext();

    // 사용자가 없거나, 어드민 유저가 아닌 경우
    if(!user || (requireAdmin && !user.isAdmin)) {
        return <Navigate to='/' replace />;
    }

    return children;
}
