import React from 'react'
import './Header.css'
import NPCLogo from '../../assets/logo1.JPG'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg = "light" expand = "lg">
      <Container className='nav__bar'>
        <Navbar.Brand href = '#home'><img src = {NPCLogo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id = 'basic-navbar-nav'>
          <Nav.Link href = "#home" className='nav__list'>Home</Nav.Link>
          <NavDropdown title = "About Us" id = 'basic-nav-dropdown' className='nav__list'>
            <NavDropdown.Item href = "#about">Structure</NavDropdown.Item>
            <NavDropdown.Item href = "#about">Departments</NavDropdown.Item>
            <NavDropdown.Item href = "#about">Census Technical Teams</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href = "#2023Census" className='nav__list'>2023 Census</Nav.Link>
          <NavDropdown title = 'Activities' id = 'basic-nav-dropdown' className='nav__list'>
            <NavDropdown.Item href = "#activities">Census Enumeration</NavDropdown.Item>
            <NavDropdown.Item href = "#activities">Enumeration Area Demarcation (EAD)</NavDropdown.Item>
            <NavDropdown.Item href = "#activities">Civil Registration & Vital Statistics</NavDropdown.Item>
            <NavDropdown.Item href = "#activities">Survey DATA</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title = 'News' id = 'basic-nav-dropdown' className='nav__list'>
            <NavDropdown.Item href = "#news">Photo Gallery</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href = '#publications' className='nav__list'>Publications</Nav.Link>
          <Nav.Link href = '#RapidSMS' className='nav__list'>Rapid SMS</Nav.Link>
          <Nav.Link href = '#contact' className='nav__list'>Contact Us</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header