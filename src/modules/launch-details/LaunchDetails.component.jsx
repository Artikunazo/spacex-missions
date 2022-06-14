import React, { useState, useEffect } from 'react';
import * as API from '../../services/launches';
import { useParams } from 'react-router-dom';

export default function LaunchDetails({ flightNumber, ...props }) {
  const { launchId } = useParams();
  const [launchDetails, setLaunchDetails] = useState([]);

  useEffect(() => {
    API.getLaunchByFlight(launchId).then(setLaunchDetails);
  });
  return (
    <>
      <p>{launchDetails[0]}</p>
    </>
  );
}
