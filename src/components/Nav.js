import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <ul className='nav'>
      <li>
        <NavLink activeClassName='active' to='/popular'>
          Popular
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/counter'>
          Counter
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/todolist'>
          TodoList
        </NavLink>
      </li>
    </ul>
  )
}

export default Nav;
