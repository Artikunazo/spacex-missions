import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import * as API from './services/launches';

export default function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <h1>SpaceX Launches</h1>
      <section>
        {
          launches.map(launch => {
            
          })
        }
      </section>
    </>
  );
}
