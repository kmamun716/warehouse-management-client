import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    let from = location.state?.from?.pathname || "/";

    if(user){
        navigate(from, { replace: true });
    }
    return (
        <div>
            This is Login <Link to="/">Home</Link>
        </div>
    );
};

export default Login;