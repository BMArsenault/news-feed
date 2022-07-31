import React from 'react';

const Nav = ({currentPage, handlePageChange}) => {
    return (
        <header>
            <nav className="navbar">
                <div className="center text-white"><a className="text-decoration-none" href="index.html">News Feed</a></div>
            </nav>
        </header>
    );
}

export default Nav;