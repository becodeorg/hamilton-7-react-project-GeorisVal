import React from 'react'; 
import { Link } from 'react-router-dom';

export default function Nav() {
    const navStyle = {
        color: 'white'
    }

    return (
        <nav>
            <ul className="nav-links">
                <Link style={navStyle} to={'/topgames'}>
                    <li>Top Games</li>
                </Link>
                <Link style={navStyle} to={'/search'}>
                    <li>Search</li>
                </Link>
            </ul>
        </nav>
    )
}