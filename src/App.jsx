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
      <h1 className="title is-1">SpaceX Launches</h1>
      <section className="container
      ">
        <div className="columns">
          <div className="column">
            {launches.map((launch) => (
              <div key={launch.flight_number}
              className="py-2 px-2">
                <Card 
                  flightNumber={launch.flight_number}
                  missionName={launch.mission_name}
                  missionDate={launch.launch_year}
                  launchSuccess={launch.launch_success}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
