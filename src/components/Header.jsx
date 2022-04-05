import React from 'react';
import './../index.css';
import Divider from './Divider';
import SsbLogo from './SsbLogo';
import Input from './Input';
import SearchField from './SearchField';

function Header() {
  return (
    <div className="container">
      <div
        className="global-links"
        style={{ float: 'right', marginBottom: '12px', marginTop: '10px' }}
      >
        <a href=" " className="ssb-link link-text">
          top-item 3
        </a>
        <a href=" " className="ssb-link link-text">
          top-item 2
        </a>
        <a href=" " className="ssb-link link-text">
          top-item 1
        </a>
      </div>
      <div
        className="top-row flex-row justify-space-between flex-wrap"
        style={{ width: '100%' }}
      >
        <SsbLogo />
        <div
          className="searchfield"
          style={{ width: '285px', alignSelf: 'flex-end' }}
        >
          <Input placeholder="Søk" searchField={true} />
        </div>
      </div>
      <div
        className="header-content"
        style={{ marginBottom: '20px', marginTop: '14px' }}
      >
        <nav id="mainMenu" className="ssb-tabs" aria-label="hovedmeny">
          <ul className="tabItems">
            <li className="tabItem">
              <span className="navigation-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <span>Arbeid, lønn og utdanning</span>
              </span>
            </li>
            <li className="tabItem">
              <span className="navigation-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <span>Befolkning og bolig</span>
              </span>
            </li>
            <li className="tabItem">
              <span className="navigation-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <span>Helse og samfunn</span>
              </span>
            </li>
            <li className="tabItem">
              <span className="navigation-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <span>Miljø og transport</span>
              </span>
            </li>
            <li className="tabItem">
              <span className="navigation-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <span>Næringsliv og teknologi</span>
              </span>
            </li>
            <li className="tabItem">
              <span className="navigation-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <span>Økonomi</span>
              </span>
            </li>
          </ul>
        </nav>
        <Divider />
      </div>
    </div>
  );
}

export default Header;
