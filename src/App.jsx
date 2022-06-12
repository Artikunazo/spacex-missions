import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import * as API from './services/launches';
import Card from './modules/card/Card.component';

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
            <li key={launch.flight_number}>
              <Card   
                flightNumber={launch.flight_number}
                missionName={launch.mission_name}
                missionDate={launch.launch_year}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
