import React, { useState, useEffect } from 'react';
import * as API from '../../services/launches';

export default function MoreDetails({ flightNumber, ...props }) {
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
