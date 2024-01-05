import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import FormPage from '../components/FormPage';

const BookRoute = () => {
  return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/form" element={<FormPage/>} />
        </Routes>
      </div>
  );
};

export default BookRoute;