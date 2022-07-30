import React from 'react';

const Nav = ({currentPage, handlePageChange}) => {
    return (
        <header className="sticky-top">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <h1 className="text-black"><a className="text-decoration-none" href="index.html">News Feed</a></h1>
                    <div className="justify-content-end">
                    <ul className="nav nav-tabs navbar-text navbar-right mb-2">
                    <li className="nav-item d-flex flex-column text-center">
                    {/*<a href="#" onClick={() => {handlePageChange('News')}} className={currentPage === 'News' ? 'nav-link active' : 'nav-link'}>News</a>*/}
                    </li>
                    <li className="nav-item d-flex flex-column text-center">
                    {/*<a href="#" onClick={() => {handlePageChange('About')}} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Us</a>*/}
                    </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Nav;