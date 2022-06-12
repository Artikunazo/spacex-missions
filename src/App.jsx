import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import * as API from './services/launches';
import Card from './modules/card/Card.component';
import { distanceAndSkiddingToXY } from '@popperjs/core/lib/modifiers/offset';

export default function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <h1>SpaceX Launches</h1>
      <section className="container-fluid 
      ">
        <div className="row">
          <div className="col">
            {launches.map((launch) => (
              <div key={launch.flight_number}>
                <Card 
                  flightNumbert={launch.fligh_number}
                  missionName={launch.mission_name}
                  missionDate={launch.launch_year}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
