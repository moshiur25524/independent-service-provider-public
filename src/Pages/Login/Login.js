import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css'

const Login = () => {
  return (
    <div>
      <div className="registration w-50 mx-auto my-5">
      <Form >
          <h1>Please !! Login to send your child</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>

        <div className="extra">
            <hr />
            <p>or</p>
            <hr />
        </div>
       <div className="signin-button">
       <button>Google SignIn</button>
        <br />
        <button>GitHub SignIn</button>
       </div>

      </Form>
      </div>
    </div>
  );
};

export default Login;
