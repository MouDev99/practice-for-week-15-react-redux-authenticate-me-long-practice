import {
    MDBNavbar,
    MDBContainer,
    MDBBreadcrumb,
    MDBBreadcrumbItem
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from '../LoginFormModal';

import './index.css';

function Navigation() {
    const sessionUser = useSelector(state => state.session.user);

    if (sessionUser) return (<ProfileButton />);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <nav aria-label='breadcrumb' className='my-3'>
                    <MDBBreadcrumb>
                        <MDBBreadcrumbItem>
                            <NavLink exact to='/'>Home</NavLink>
                        </MDBBreadcrumbItem>
                        <LoginFormModal />
                        <MDBBreadcrumbItem active aria-current='page'>
                            <NavLink to='/signup'>Sign Up</NavLink>
                        </MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                </nav>
            </MDBContainer>
        </MDBNavbar>
    );
};

export default Navigation;
