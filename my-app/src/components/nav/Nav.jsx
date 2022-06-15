import React from 'react'
import {FiMenu} from 'react-icons/fi'
import './Nav.css'
import NPCLogo from '../../assets/logo1.JPG'
import {useState} from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav className='nav__bar'>
        <div className='nav__logo'>
            <img src = {NPCLogo} alt = "National Population Commission" className='nav__image' />
        </div>
        <FiMenu className= 'hamburger' />
        <div className='nav__items'>
            <ul className='nav__list'>
            <li><a href = "#" onClick={() => setActiveNav('#')} className = {activeNav ==='#' ? 'active' : ''}>Home</a></li>
            <li><a  href = "#about" onClick={() => setActiveNav('#about')} className = {activeNav ==='#about' ? 'active' : ''}>About Us</a></li>
            <li><a  href = "#" onClick={() => setActiveNav('#')} className = {activeNav ==='#' ? 'active' : ''}>2023 Census</a></li>
            <li><a  href = "#" onClick={() => setActiveNav('#')} className = {activeNav ==='#' ? 'active' : ''}>Activities</a></li>
            <li><a  href = "#" onClick={() => setActiveNav('#')} className = {activeNav ==='#' ? 'active' : ''}>News</a></li>
            <li><a  href = "#" onClick={() => setActiveNav('#')} className = {activeNav ==='#' ? 'active' : ''}>Publications</a></li>
            <li><a  href = "#" onClick={() => setActiveNav('#')} className = {activeNav ==='#' ? 'active' : ''}>Rapid SMS</a></li>
            <li><a  href = "#" onClick={() => setActiveNav('#')} className = {activeNav ==='#' ? 'active' : ''}>Contact Us</a></li>
            </ul>
        </div>
        </nav>
    )
}

export default Nav