import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
    return (
        <nav className='nav'>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li>
                    <Link to="/" style={{ backgroundColor:'none', textDecoration: 'none' }}>Home</Link>
                </li>
                <li style={{marginBottom: '20px'}}>
                    <Link to="/academic" style={{ textDecoration: 'none' }}>Academic</Link>
                </li>
                <li style={{margin: '30px 0'}}>
                    <Link to="/programming" style={{ textDecoration: 'none' }}>Programming</Link>
                </li>
                <li>
                    <Link to="/leadership" style={{ textDecoration: 'none' }}>Leadership</Link>
                </li>
                <li>
                    <Link to="/art" style={{ textDecoration: 'none' }}>Art</Link>
                </li>
                <li>
                    <Link to="/design" style={{ textDecoration: 'none' }}>Design</Link>
                </li>
                <li style={{marginBottom: '60px'}}>
                    <Link to="/leisure" style={{ textDecoration: 'none' }}>Leisure</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;