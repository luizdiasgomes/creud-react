import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className='fa fa-home'></i> inicio
            </Link>

            <Link to="/users">
                <i className='fa fa-users'></i> usuarios
            </Link>
        </nav>
    </aside>
