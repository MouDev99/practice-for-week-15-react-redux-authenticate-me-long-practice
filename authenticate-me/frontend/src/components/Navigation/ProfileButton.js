import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from "../../store/session";

import './ProfileButton.css';

function UserInfo() {
    const sessionUser = useSelector(state => state.session.user);
    const { username, email} = sessionUser;
    const dispatch = useDispatch();

    const handleLogout = () => dispatch(logoutUser());

    return (
        <div className="user-info" onClick={e => e.stopPropagation()}>
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
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = (e) => {
        e.stopPropagation();
        setShowMenu(true);
    };

    useEffect(() => {
        const closeMenu = () => setShowMenu(false)
        if (showMenu) {
            document.addEventListener('click', closeMenu);
            return () => document.removeEventListener('click', closeMenu);
        };
    }, [showMenu]);

    return (
        <div className="profile-button">
            <div
              className="icon-div"
              onClick={openMenu}
            >
                <i className="fa-solid fa-user"></i>
            </div>
            { showMenu && <UserInfo />}
        </div>
    );
};

export default ProfileButton;
