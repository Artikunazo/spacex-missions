import React from 'react';
import './style.css';
import Routes from './Routes';

export default function App() {
  return (
    <>
      <h1 className="title is-1">SpaceX Launches</h1>
      <section className="container">
        <Routes />
      </section>
    </>
  );
}
