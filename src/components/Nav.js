import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from 'styled-components';

const NavWrap = style.nav`
  display: flex;
  background: #7fc1ca;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
  width: 100%;

  h3 {
    align-self: flex-start;
    color: #fff;
    padding: 1rem 0 1rem 1rem;
  }

  ul {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    list-style: none;
    padding: 0;
    text-align: center;
    width: 50%;
  }

  ul li {
    background-color: #fff;
    border: 1px solid #7fc1ca;
    margin-right: .5rem;

    &:hover {
      background-color: #3C4C55;
      color: #7FC1CA;

      a {
        color: #fff;
      }
    }
  }

  a {
    color: #83afe5;
    display: block;
    font-size: 1.1em;
    height: 100%;
    padding: .5rem 1rem;
    text-decoration: none;
  }
`;

const Nav = ({ active, links }) => {
  return (
    <NavWrap>
      <h3>ReacttoFire</h3>
      <ul>
        {links.map((l, i) =>
          <li key={i}>
            <Link to={l.href}>
              {l.text}   
            </Link>
          </li>
        )} 
      </ul>
    </NavWrap>
  );
};

Nav.propTypes = {
  active: PropTypes.number, 
  links: PropTypes.array.isRequired
};

export default Nav;
