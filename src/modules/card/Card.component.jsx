import React from 'react';
import './Card.component.css';

export default function Card ({
  flightNumber,
  missionName,
  missionDate,
  launchSuccess,
  ...props
}) {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">
            {missionName} ({missionDate})
            <small> Flight # {flightNumber} </small>
          </h3>
          <span className="successFlag"  className={launchSuccess ? "green accent-3" : "red lighten-3"}>{launchSuccess ? 'Success' : 'Failure'}</span>
        </div>
        <div className="card-action">
          <a href="#">View details</a>
        </div>
      </div>
    </>
  )
}