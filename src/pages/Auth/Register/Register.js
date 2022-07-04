import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useUpdateProfile
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Register = () => {
  const [regUser, setRegUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [checked, setChecked] = useState(false);
  const [user1] = useAuthState(auth);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const handleChange = (event) => {
    setRegUser({
      ...regUser,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = regUser;
    createUserWithEmailAndPassword(email, password);
    event.target.reset();
  };

  if (user) {
    updateProfile({ displayName: regUser.name });
    navigate("/");
  } else if (user1) {
    navigate("/");
  }

  return (
    <div>
      <h3 className="text-decoration-underline text-center fw-light">
        Register Here
      </h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Enter Your Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Please Enter Your Valid Email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          {regUser.password !== regUser.confirmPassword ? (
            <p className="text-danger">Password Not Matched!</p>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            disabled={regUser.password !== regUser.confirmPassword}
            onChange={() => setChecked(!checked)}
            type="checkbox"
            label="Agree with terms and conditons"
          />
        </Form.Group>
        <Button disabled={!checked} variant="primary" type="submit">
          Register
        </Button>
        {error && <p>Error: {error.message}</p>}
      </Form>
      <p>
        Already Have an Account! <Link to="/login">Login Here</Link>
      </p>
    </div>
  );
};

export default Register;
