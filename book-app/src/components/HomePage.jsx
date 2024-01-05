import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './NavbarHome';

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
 
  const handleSearch = (e) => {
    setSearch(e);
    console.log(e);
  };

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } })
      .then((res) => {
        setBooks(res.data.books);
        console.log("data:", books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchBooks =books.filter(book=>{
    return book.title.toLowerCase().startsWith(search.toLowerCase())
  })

  return (
    <>
      <Navbar searchText={handleSearch} />
      <div className='grid' style={{ marginTop: "50px", position: "absolute", width: "100%" }} >
        {searchBooks.map((book) => (
          <div id="searchBookDiv" style={{ width: "300px", textAlign: "center", padding: "30px 10px", border: "3px solid black", borderRadius: "10px", boxShadow: "2px 2px 2px 2px  rgba(0, 0, 0, 0.363)" }}>
            <div>
              <div key={book.id}>
                <img style={{ width: "200px", height: "270px", border: "1px solid black" }} src={book.imageLinks.thumbnail} alt="" />
                <h4 style={{ width: "200px", height: "70px", fontSize: "18px", margin: "10px 35px" }}>{book.title}</h4>
                <div className='flex' style={{ justifyContent: "center", color: "grey" }}>
                  <h5 style={{ padding: "0 5px" }}>{book.averageRating ? book.averageRating+"⭐": "⭐"}</h5>
                  <h5 style={{ paddingTop: "2px" }}>Free</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;