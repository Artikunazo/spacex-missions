import React from 'react';
import './style.css';
import Routes from './Routes';

export default function App() {
  return (
    <>
      <section className="container px-3 py-2">
        <h1 className="title is-1">SpaceX Launches</h1>
        <Routes />
      </section>
    </>
  );
}
