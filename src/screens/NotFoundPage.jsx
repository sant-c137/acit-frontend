import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="NotFoundPage">
      <h1 className="NotFoundPage-title u-textCenter">404</h1>
      <p className="NotFoundPage-message u-textCenter">Oops! Page not found.</p>
      <NavLink to="/" className="NotFoundPage-link u-textCenter">
        Go to Home
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
