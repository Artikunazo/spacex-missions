import React, { useEffect, useState } from 'react';
import Card from './modules/card/Card.component';
import * as API from './services/launches';

export default function LaunchesList() {
  const [launches, setLaunches] = useState([]);
  let flightNumber = 0;

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <div className="columns">
        <div className="column">
          {launches.map((launch) => (
            <div key={launch.flight_number} className="py-2 px-2">
              <Card
                flightNumber={launch.flight_number}
                missionName={launch.mission_name}
                missionDate={launch.launch_year}
                launchSuccess={launch.launch_success}
              />
              {(flightNumber = launches.flight_number)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
