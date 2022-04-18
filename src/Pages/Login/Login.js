import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import auth from '../../firebase.init'
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [sendEmailVerification, sending, EmailVerificationError] = useSendEmailVerification(
        auth
      );

    const  GitHubProvider = new GithubAuthProvider();
    const  GoogleProvider = new GoogleAuthProvider();

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    }
    const handleFormSubmit = event =>{

        
        const EmailVerification = async () => {
            await sendEmailVerification();
            alert('Sent email');
          }

        event.preventDefault();
        createUserWithEmailAndPassword(email, password)
        
    }

    const handleGitHubSignIn = () =>{
        signInWithPopup(auth,  GitHubProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const handleGoogleSignIn =() =>{
        signInWithPopup(auth,  GoogleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log(error);
        })
    }

  return (
    <div>
      <div className="registration w-50 mx-auto my-5">
        <Form onSubmit={handleFormSubmit}>
          <h1>Please !! Login to send your child</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button  variant="primary" type="submit">
            Login
          </Button>

          <div className="extra">
            <hr />
            <p>or</p>
            <hr />
          </div>
          <div className="signin-button">
            <button onClick={handleGoogleSignIn}>Google SignIn</button>
            <button  onClick={handleGitHubSignIn}>GitHub SignIn</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
