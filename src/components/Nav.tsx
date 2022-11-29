import React from 'react'; 
import { Link } from 'react-router-dom';

export default function Nav() {
    const navStyle = {
        color: 'white'
    }

    return (
        <nav className="sticky flex top-0 text-center justify-center items-center w-[150%] bg-emerald-500 opacity-50 hover:opacity-100">
            <ul className="nav-links flex gap-5 flex-row">
                <Link className="text-white" to={'/categories'}>
                    <li>Categories</li>
                </Link>
                <Link className="text-white" to={'/topgames'}>
                    <li>Top Games</li>
                </Link>
                <Link className="text-white" to={'/search'}>
                    <li>Search</li>
                </Link>
            </ul>
        </nav>
    )
}