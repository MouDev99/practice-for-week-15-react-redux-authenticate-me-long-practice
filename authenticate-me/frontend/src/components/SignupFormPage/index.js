import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signupUser } from '../../store/session';
import { MDBBtn, MDBContainer, MDBInput } from 'mdb-react-ui-kit';

function SignupFormPage() {
    const sessionUser = useSelector( state => state.session.user);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [signupErrors, setSignupErrors] = useState([]);
    const dispatch = useDispatch();

    if (sessionUser) return (<Redirect to='/' />);

    const handleSignupBtn = async (e) => {
        e.preventDefault();

        const errors = [];

        if (!username.length) errors.push('Username field cannot be empty!');
        if (!email.length) errors.push('Email field cannot be empty!');
        if (!password.length) errors.push('Password field cannot be empty');

        if (password.length && password !== confirmPassword) {
            errors.push("Confirm Password field must be the same as the Password field");
        };

        if (errors.length) {
            setSignupErrors(errors)
            return
        };

        try {
            const user = { username, email, password };
            await dispatch(signupUser(user));
            setSignupErrors([])
        } catch(err) {
            const errData = await err.json();
            setSignupErrors(errData.errors);
        };
    };

    return (
        <MDBContainer className="my-5 gradient-form d-flex justify-content-center">
            <div className="d-flex flex-column ms-5">
                <div className="text-center">
                    <h4 className="mt-1 mb-5 pb-1">Authenticate Me</h4>
                </div>

                <div className="text-center" style={{ width: "250px"}}>
                    <p>Create A New Account</p>
                </div>

                <div>
                    {signupErrors.length > 0 &&
                        <ul style={{ color: "red", padding: 0 }}>
                            {signupErrors.map((error, i) =>
                                <li key={i} style={{ display: 'flex', alignItems: 'center'}}>
                                    {error}
                                </li>
                            )}
                        </ul>
                    }
                </div>

                <MDBInput wrapperClass='mb-4 mt-2' label='Username' type='text'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <MDBInput wrapperClass='mb-4 mt-2' label='Email' type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <MDBInput wrapperClass='mb-4' label='Password' type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <MDBInput wrapperClass='mb-4' label='Confirm Password' type='password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                />

                <div className="text-center pt-1 mb-2 pb-1">
                    <MDBBtn className="w-100 gradient-custom-2"
                        onClick={handleSignupBtn}
                    >
                        Sign Up
                    </MDBBtn>
                </div>
            </div>
        </MDBContainer>
    );
};

export default SignupFormPage;
