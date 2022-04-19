
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleFormSubmit = (event) => {
    // const EmailVerification = async () => {
    //     await sendEmailVerification();
    //     alert('Sent email');
    //   }

    event.preventDefault();
    createUserWithEmailAndPassword(email, password ,name);
    setEmail("");
    setPassword("");
  };

  const navigate = useNavigate();
  const navigatelogin = () => {
    navigate("/login");
  };

  if(user){
      navigate('/home')
  }
  return (
    <div>
      <div className="registration w-50 mx-auto my-5">
        <Form onSubmit={handleFormSubmit}>
          <h1>Please !! Register to send your child</h1>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              onBlur={handleNameBlur}
              type="text"
              placeholder="Your Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onBlur={handleEmailBlur}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onBlur={handlePasswordBlur}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
          <p>
            Already Registered ?{" "}
            <span
              style={{ cursor: "pointer" }}
              className="text-danger"
              onClick={navigatelogin}
            >
              Please Log In!!
            </span>
          </p>

          <div className="extra">
            <hr />
            <p>or</p>
            <hr />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
