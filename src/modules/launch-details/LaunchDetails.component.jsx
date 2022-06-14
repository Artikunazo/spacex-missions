import React, { useState, useEffect } from 'react';
import * as API from '../../services/launches';
import { useParams } from 'react-router-dom';

export default function LaunchDetails({ flightNumber, ...props }) {
  const [launchDetails, setLaunchDetails] = useState();

  useEffect(() => {
    API.getLaunchByFlight().then(setLaunchDetails);
  });
  return (
    <>
      <p>More details works!</p>
      <p>{launchDetails}</p>
    </>
  );
}
