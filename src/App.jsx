import React from 'react';
import './style.css';
import Routes from './Routes';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <section className="container px-3 py-2">
        <section className="hero">
          <div className="hero-body">
            <p className="title">
              <Link to="/">
                <figure className="image">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/2560px-SpaceX-Logo.svg.png"
                    alt="Placeholder image"
                  />
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
