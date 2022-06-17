import React from 'react';
import './style.css';
import Routes from './Routes';
import { Link } from 'react-router-dom';
import SpaceXLogo from '../assets/images/spacex-logo.png';

export default function App() {
  return (
    <>
      <section className="container px-3 py-2">
        <section className="hero">
          <div className="hero-body">
            <p className="title">
              <Link to="/">
                <img src="../assets/images/spacex-logo.png" alt="SpaceX Logo" />
              </Link>
            </p>
            <p className="subtitle"></p>
          </div>
        </section>
        <h1 className="title is-1">SpaceX Launches</h1>
        <Routes />
      </section>
    </>
  );
}
