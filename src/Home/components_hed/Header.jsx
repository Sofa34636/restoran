import React from 'react';
import './Header.css';

function Header() {
  return (
    <div href='#header' className='header'>
      <div className='header__body'>
        <a href='/' className='header__logo'>
        </a>
        <div className='header__burger'>
          <span></span>
        </div>
        <nav className='header__menu'>
          <ul className='header__list'>
            <li>
            <a href='/About' className='header__link'>О нас</a>
              
            </li>
            <li>
            <a href='/Menu' className='header__link'>Меню</a>
            </li>
            <li>
              <a href='/Reviews' className='header__link'>Отзывы</a>
            </li>
            
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;