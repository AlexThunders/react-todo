import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/appsR7/2021/todo">Home</Link>
      <Link to="/appsR7/2021/todo/Reminder">Calendar</Link>
  </div>
  )
}

export default Navbar
