import React from 'react'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';


function Header({text}) {
  return (
    <Link to="/" style={{textDecoration: 'none'}}>
      <header style={{backgroundColor: 'black'}}>
        <div className="container">
            <h2>{text}</h2>
        </div>
      </header>
    </Link>
  )
}


Header.defaultProps = {
  text: "Feedback UI"
};

Header.propTypes ={
  text: PropTypes.string
};

export default Header
