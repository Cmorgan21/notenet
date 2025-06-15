import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { useState, useEffect } from "react";
import api from "../api";
import Loading from "./Loading";

function ProtectedRoute({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const auth = async () => {
      const token = localStorage.getItem(ACCESS_TOKEN);
      if (!token) return isMounted && setIsAuthorized(false);

      try {
        const { exp } = jwtDecode(token);
        const now = Date.now() / 1000;

        if (exp < now) {
          const refresh = localStorage.getItem(REFRESH_TOKEN);
          if (!refresh) return isMounted && setIsAuthorized(false);

          const res = await api.post("/api/token/refresh/", {
            refresh,
          });

          localStorage.setItem(ACCESS_TOKEN, res.data.access);
        }

        if (isMounted) setIsAuthorized(true);
      } catch (err) {
        console.error("Auth error:", err);
        if (isMounted) setIsAuthorized(false);
      }
    };

    auth();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isAuthorized === null) return <Loading />;

  return isAuthorized ? children : <Navigate to="/signin" />;
}

export default ProtectedRoute;
