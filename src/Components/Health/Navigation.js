import React from 'react';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Navbar, Container } from 'react-bootstrap'
import UseAuth from '../Farebase/UseAuth';
const Navigation = () => {
    const Style = { fontWeight: "bold", color: "red" }
    const { users, logOut } = UseAuth()
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home">HealthCare</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavLink className='me-5 text-decoration-none ' to="/home" activeStyle={Style}>Home</NavLink>
                        <NavLink className='me-5 text-decoration-none ' to="/services" activeStyle={Style}>Services</NavLink>
                        <NavLink className='me-5 text-decoration-none ' to="/medical" activeStyle={Style}>Medical</NavLink>
                        <NavLink className='me-5 text-decoration-none ' to="/technology" activeStyle={Style}>Technology</NavLink>
                        {
                            users.email ?
                                <button onClick={logOut} className='btn btn-outline-danger'> LogOut</button> :
                                <NavLink className='me-5' to="/register" activeStyle={Style}>Login</NavLink>
                        }
                        <div>
                            Signed in as: <a href="#login">{users.displayName || users.email}</a>
                        </div>
                    </div>
                </div>
            </nav>




            {/* <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">HealthCare</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ">
                        <NavLink className='me-5 text-decoration-none ' to="/home" activeStyle={Style}>Home</NavLink>
                        <NavLink className='me-5 text-decoration-none ' to="/services" activeStyle={Style}>Services</NavLink>
                        <NavLink className='me-5 text-decoration-none ' to="/medical" activeStyle={Style}>Medical</NavLink>
                        <NavLink className='me-5 text-decoration-none ' to="/technology" activeStyle={Style}>Technology</NavLink>
                        {
                            users.email?
                            <button onClick={logOut} className='btn btn-outline-danger'> LogOut</button>:
                            <NavLink className='me-5' to="/register" activeStyle={Style}>Login</NavLink>

                        }
                        <Navbar.Text className=''>
                            Signed in as: <a href="#login">{users.email}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </div>
    );
};

export default Navigation;


// import React from 'react';
// import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import useFirebase from '../../../Hooks/useFirebase';
// import logo from '../../../images/logoloaded.png'
// import './header.css';

// const Header = () => {
//     const { logout, googleSignIn, user } = useFirebase()
//     return (
//         <div className='d-flex justify-content-between'>
//             <img className="me-5" style={{ height: "100px" }} src={logo} alt="" />

//             <div className="me-5">
//                 <Navbar expand="lg">
//                     <Container fluid>
//                         {/* <Navbar.Brand ><i className='text-warning'>Sunshine Hospital</i></Navbar.Brand> */}
//                         <Navbar.Toggle aria-controls="navbarScroll" />
//                         <Navbar.Collapse id="navbarScroll">
//                             <Nav
//                                 className="me-auto my-2 my-lg-0"
//                                 style={{ maxHeight: '100px' }}
//                                 navbarScroll
//                             >

//                                 <Nav.Link ><Link to='/home'>Home</Link></Nav.Link>
//                                 <Nav.Link ><Link to='/aboutus'>About Us</Link></Nav.Link>
//                                 <Nav.Link ><Link to='/doctors'>Doctors</Link></Nav.Link>
//                                 <Nav.Link ><Link to='/packages'>Packages</Link></Nav.Link>
//                                 <Nav.Link ><Link to='/contactus'>Contact Us</Link></Nav.Link>


//                                 <Link to='/login'><Button variant="warning">Login</Button></Link>
//                             </Nav>


//                         </Navbar.Collapse>
//                     </Container>
//                 </Navbar>
//             </div>
//         </div>
//     );
// };

// export default Header;