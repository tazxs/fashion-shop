/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import logo from '../../image/icons/logo.svg'
import './header.css';
function Header(){
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    return(
        <header className='header'>
            <div className="container">
                <div className="header_line">
                    <div className="header_line__logo">
                        <a href="#" className="logo_link"><img src={logo} alt="Logo" /></a>
                        <span className="logo_text">Fashion</span>
                    </div>
                    <nav className="header_line__nav">
                        <a href="#!" className="nav_link">CATALOGUE</a>
                        <a href="#!" className="nav_link">FASHION</a>
                        <a href="#!" className="nav_link">FAVOURITE</a>
                        <a href="#!" className="nav_link">LIFESTYLE</a>
                        <a href="#!" className="nav_btn" onClick={openModal}>SIGN UP</a>
                    </nav>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal_overlay" onClick={closeModal}>
                    <div className="modal_content" onClick={e => e.stopPropagation()}>
                        <h2>Sign Up</h2>
                        <p>Please register to continue.</p>
                        <button className="close_btn" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;