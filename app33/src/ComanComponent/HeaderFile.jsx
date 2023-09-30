import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from 'react';
import "./Header.css"
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
  } from 'mdb-react-ui-kit';
  
import { Link } from 'react-router-dom';
import LoginPage from '../LoginPage';

const HeaderFile = () => {
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);

    return (
        <>
        
            <MDBNavbar expand='lg' dark bgColor='secondary'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'className='my'>navbar</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavColorSecond(!showNavColorSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
                        <MDBNavbarNav >
                            <MDBNavbarItem className='my'>
                                {/* <MDBNavbarLink aria-current='page' to='/'>
                                    Home
                                </MDBNavbarLink> */}
                                <Link className=' my' to='/'>Home</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className='my' to='/features'>Features</Link>
                                {/* <MDBNavbarLink to='/features'>Features</MDBNavbarLink> */}
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className=' my' to='/pricing'>Pricing</Link>
                                {/* <MDBNavbarLink href='/pricing'>Pricing</MDBNavbarLink> */}
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className=' my' to='/LoginPage' >LoginPage</Link>
                                {/* <MDBNavbarLink href='/about'>About</MDBNavbarLink> */}
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className=' my ' to='/examples'>Example</Link>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
};

export default HeaderFile;