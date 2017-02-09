import React from 'react';

import Link from 'react-router/Link';

import '../styles/VerticalMenu.css';

const VerticalMenu = ({ banners, bannersPathname }) => (
  <div className='ui secondary vertical menu'>
    <div className='header item'>
      Banners
    </div>
    {
      banners.map((banner) => (
        <Link
          to={`${bannersPathname}/${banner.id}`}
          key={banner.id}
        >
        {
          ({ onClick, href, isActive }) => (
            <a
              className={isActive ? 'active item' : 'item'}
              onClick={onClick}
              href={href}
            >
              {banner.name}
            </a>
          )
        }
        </Link>
      ))
    }
  </div>
);

export default VerticalMenu;
