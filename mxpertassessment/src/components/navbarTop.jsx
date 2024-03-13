import React from 'react';
import { Link } from 'react-router-dom';

function NavbarTop() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded ms-3">
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav w-100 justify-content-around">
                    <li className="nav-item">
                        <Link className="nav-link text-white font-weight-bold" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white font-weight-bold" to="/">Gers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white font-weight-bold" to="/">LeaderBoard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white font-weight-bold" to="/">DailyQuiz</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white font-weight-bold" to="/">LogOut</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavbarTop;
