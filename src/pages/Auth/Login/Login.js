import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Social from "../Social/Social";
import './Login.css';

const Login = () => {
    const [inputValue, setInputValue] = useState({
        email:"",
        password:""
    });
    const [
        signInWithEmailAndPassword,
        user,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const [user1] = useAuthState(auth);

  let from = location.state?.from?.pathname || "/";

  if (user||user1) {
    navigate(from, { replace: true });
  }
  const handleChange = event =>{
    setInputValue({
        ...inputValue,
        [event.target.name]: event.target.value
    })
};
const handleGoogleSignIn=()=>{
  signInWithGoogle();
}
const handleSubmit = event => {
    event.preventDefault();
    const {email, password} = inputValue;
    signInWithEmailAndPassword(email, password);
}
  return (
    <div>
      <h3 className="text-decoration-underline text-center fw-light">
        Login Here
      </h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Please Enter Your Valid Email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handleChange}
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        {
            error ? <p className="text-danger my-2 fs-5">Error: {error.message}</p> : ''
        }
      </Form>
      <p>
        Not have any account! <Link to="/register">Registration Here</Link>
      </p>
      <div className="d-flex align-items-center justify-content-center single-line">
        <div></div>
        <p>Or</p>
        <div></div>
      </div>
      <div>
        <Social handleGoogleSignIn={handleGoogleSignIn}/>
      </div>
    </div>
  );
};

export default Login;
