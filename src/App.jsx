import React from 'react';
import './style.css';
import Routes from './Routes';
import { Link } from 'react-router-dom';
import logo from './assets/images/spacex-logo.png';

export default function App() {
  return (
    <>
      <section className="container px-3 py-2">
        <section className="hero">
          <div className="hero-body">
            <p className="title">
              <Link to="/">
                <figure className="image is-4by3">
                  <img src={logo} alt="Placeholder image" />
                </figure>
              </Link>
            </p>
            <p className="subtitle">SpaceX Launches</p>
          </div>
        </section>
        <Routes />
      </section>
    </>
  );
}
