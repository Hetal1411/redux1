import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
      <nav>
        <div className="topnav">
          <Link to="/PaginationPage">PaginationPage</Link>
          <Link to="/ReduxDemo">ReduxDemo</Link>
          <Link to="/ButtonClick">ButtonClick </Link>
        </div>
      </nav>
    </header>
  )
  
  export default Header