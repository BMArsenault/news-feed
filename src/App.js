import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import News from './components/News';
import Footer from './components/Footer';


function App() {
  const [currentPage, setCurrentPage] = useState('News');
  const renderPage = () => {
    switch(currentPage) {
      case 'News': 
        return <News/>;
      case 'About':
        return <About/>;
      default: 
        return <News/>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
      <main id="main">
        {renderPage()}
      </main>
      <br/>
      <Footer></Footer>
    </div>
  );
}

export default App;
