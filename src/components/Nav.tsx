import React from 'react'; 
import { Link } from 'react-router-dom';

export default function Nav() {
    const navStyle = {
        color: 'white'
    }

    return (
        <nav className="absolute flex top-0 text-center justify-center items-center left-[50%] right-[50%]">
            <ul className="nav-links flex gap-52 flex-row">
                <Link style={navStyle} to={'/'}>
                    <li>Home</li>
                </Link>
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