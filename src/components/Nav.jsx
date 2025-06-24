import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const menuItems = [
  { name: 'Создать анкету', path: '/' },
  { name: 'Публикация', path: '/publication' },
  { name: 'Библиотека', path: '/library' },
  { name: 'Анализ', path: '/analysis' },
  { name: 'Справка', path: '/help' },
];

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__title">
        <p>Автоматизированная система опросов ФСО России</p>
      </div>
      <div className="nav__logo">
        <img src="gerbAFSO.png" alt="logo" />
      </div>
      <ul className="nav__list">
        {menuItems.map(({ name, path }) => (
          <li key={name} className="list__item">
            <NavLink
              to={path}
              end
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
