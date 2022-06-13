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
          
          <span className={launchSuccess ? "tag is-success" : "tag is-danger"}>{launchSuccess ? 'Success' : 'Failure'}</span>
        </div>
        <div className="card-action">
          <a href="#">See rocket</a>
        </div>
      </div>
    </>
  )
}