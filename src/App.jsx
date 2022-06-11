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
        <ul>
          {launches?.map((launch) => (
            <li key={launch.fight_number}>
              {launch.mission_name} ({launch.launch_year})
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
