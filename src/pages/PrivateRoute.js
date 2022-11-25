import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children }) => {
  //const { myUser } = useUserContext();
  const { user } = useAuth0();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  return children;
};
export default PrivateRoute;
