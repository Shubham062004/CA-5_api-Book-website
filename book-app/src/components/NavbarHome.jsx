// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ searchText }) => {
  const handleSearch = (e) => {
    searchText(e.target.value); //getting search value
  };

  // html 
  return (
    <div className='flex nav justify align'>
      <div>
        <h2 className='h2' style={{ color: "white" , fontFamily:"'Nova Square', sans-serif"}}>Kalvium</h2>
      </div>
      <div className='flex align justify'>
        <div>
          <input type="text" placeholder='Search' onChange={handleSearch} />
        </div>
        <button id="searchBtn" style={{ backgroundColor: " rgba(255, 255, 255, 0.82)", borderRadius: "1px 5px 5px 1px", border: "1px solid black", borderLeft: "none" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>
      <div>
        <Link to={"/form"}>
          <button id='btn'>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;