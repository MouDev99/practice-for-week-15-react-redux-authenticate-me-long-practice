import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from "../../store/session";

import './ProfileButton.css';

function UserInfo() {
    const sessionUser = useSelector(state => state.session.user);
    const { username, email} = sessionUser;
    const dispatch = useDispatch();

    const handleLogout = () => dispatch(logoutUser());

    return (
        <div className="user-info">
            <p>{username}</p>
            <p>{email}</p>
            <button
              onClick={handleLogout}
            >
              Logout
            </button>
        </div>
    );
};

function ProfileButton() {
    const [showUserInfo, setShowUserInfo] = useState(false);

    return (
        <div className="profile-button">
            <div
              className="icon-div"
              onClick={() => setShowUserInfo(!showUserInfo)}
            >
                <i className="fa-solid fa-user"></i>
            </div>
            { showUserInfo && <UserInfo />}
        </div>
    );
};

export default ProfileButton;
