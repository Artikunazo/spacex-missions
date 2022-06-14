import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MoreDetails from '../more-details/MoreDetails.component';

export default function Card({
  flightNumber,
  missionName,
  missionDate,
  launchSuccess,
  ...props
}) {
  return (
    <>
      <div className="card px-2 py-2">
        <div className="card-content">
          <h3 className="card-title is-flex is-justify-content-space-around">
            <span>
              {missionName} ({missionDate})
            </span>
            &nbsp;
            <span
              className={` ${
                launchSuccess ? 'tag is-success' : 'tag is-danger'
              }`}
            >
              {launchSuccess ? 'Success' : 'Failure'}
            </span>
          </h3>
        </div>
        <div className="card-footer">
          <Link to={`/flight/${flightNumber}`} className="card-footer-item">
            More details
          </Link>
        </div>
      </div>
    </>
  );
}
