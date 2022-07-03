import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            this is header
        </div>
    );
};

export default Header;