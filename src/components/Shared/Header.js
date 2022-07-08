import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const location = useLocation();
  return (
    <div>
      <nav>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Warehouse</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
              {location.pathname !== "/register" && (
                <LinkContainer to="/register">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
              )}
              {location.pathname !== "/login" && (
                user?<span className="text-white mt-2" style={{cursor:"pointer"}} onClick={()=>signOut(auth)}>Logout</span>:<LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              )}
            </Nav>
          </Container>
        </Navbar>
      </nav>
    </div>
  );
};

export default Header;
