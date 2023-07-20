// import React from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { NavLink } from 'react-router-dom';

// export default function Navigation({ data, handleLogout }) {
// 	return (
// 		<AppBar position="static">
// 			<Toolbar>
// 				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// 					My App
// 				</Typography>
// 				<Button color="inherit" component={NavLink} to="/" exact>
// 					Home
// 				</Button>
// 				<Button color="inherit" component={NavLink} to="/dashboard">
// 					Dashboard
// 				</Button>
// 				<Button color="inherit" component={NavLink} to="/contact">
// 					Contact
// 				</Button>
// 				{data ? (
// 					<Button color="inherit" onClick={handleLogout}>
// 						Sign-out
// 					</Button>
// 				) : (
// 					<Button color="inherit" component={NavLink} to="/login">
// 						Login
// 					</Button>
// 				)}
// 			</Toolbar>
// 		</AppBar>
// 	);
// }

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import './Navigation.css'

function Navigation( {data, handleLogout}) {
	return (
		<Navbar expand="lg">
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
					{/* <Nav.Link href="#thoiki">Các Thời Kì</Nav.Link> */}
					<Link style={{ textDecoration: 'none' }} to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
					<Link style={{ textDecoration: 'none' }} to="/dashboard"><Nav.Link href="#dashboard">DashBoard</Nav.Link></Link>
					<Link style={{ textDecoration: 'none' }} to="/contact"><Nav.Link href="#contact">Contact</Nav.Link></Link>
				</Nav>
				{/* <Link to="./login">
            <button style={{ backgroundColor: '#FFC701', color: 'black', padding: '10px 30px', borderRadius: '25px', fontWeight:'bold' }} className='btn'>
              Login 
            </button>
          </Link> */}
		  	{data ? (
					<Button style={{color:"black", backgroundColor:'yellow'}} color="inherit" onClick={handleLogout}>
						Sign-out
					</Button>
				) : (
					<Button style={{color:"black", backgroundColor:'yellow'}} color="inherit" component={NavLink} to="/login">
						Login
					</Button>
				)}
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Navigation
