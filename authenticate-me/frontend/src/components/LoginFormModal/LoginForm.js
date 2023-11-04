import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { loginUser } from "../../store/session";

import { MDBBtn, MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import './LoginForm.css';

function LoginForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrors, setLoginErrors] = useState([]);

  const handleSigninBtn = async (e) => {
    e.preventDefault();

    const errors = [];

    if (!credential.length) errors.push('Please provide a username or email!');
    if (!password.length) errors.push('Please provide a password!');

    if (errors.length) {
      setLoginErrors(errors);
      return
    };

    try {
      const user = { credential, password };
      await dispatch(loginUser(user));
      setLoginErrors([]);
    } catch (err) {
      const errData = await err.json();
      setLoginErrors(errData.errors);
    };
  };

  return (
    <MDBContainer className="my-5">
      <div className="d-flex flex-column w-30">
        <div className="text-center">
          <h4 className="mt-1 mb-5 pb-1">Authenticate Me</h4>
        </div>

        <div className="text-center" style={{ width: "250px"}}>
          <p>Please login to your account</p>
        </div>

        <div>
          {loginErrors.length > 0 &&
            <ul style={{ color: "red", listStyle: "none", padding: 0 }}>
              {loginErrors.map((error, i) =>
                <li key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  {error}
                </li>
              )}
            </ul>
          }
        </div>

        <MDBInput wrapperClass='mb-4 mt-2' label='Email Or Username' type='text'
          onChange={(e) => setCredential(e.target.value)}
          value={credential}
        />
        <MDBInput wrapperClass='mb-4' label='Password' type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <div className="text-center pt-1 mb-2 pb-1">
          <MDBBtn className="w-100 gradient-custom-2"
            onClick={handleSigninBtn}
          >
            Log In
          </MDBBtn>
        </div>

        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mt-2">
          <p className="mb-0">Don't have an account?</p>
          <MDBBtn outline className='mx-2' color='danger'
           onClick={() => history.push('/signup')}
          >
            Create
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
};

export default LoginForm;
