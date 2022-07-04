import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
    const [inputValue, setInputValue] = useState({
        email:"",
        password:""
    })
  const location = useLocation();
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  const handleChange = event =>{
    setInputValue({
        ...inputValue,
        [event.target.name]: event.target.value
    })
};
const handleSubmit = event => {
    event.preventDefault();
    console.log(inputValue)
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
      </Form>
      <p>
        Not have any account! <Link to="/register">Registration Here</Link>
      </p>
    </div>
  );
};

export default Login;
