import React from 'react';
import './Card.component.css';

export default function Card ({
  flightNumber,
  missionName,
  missionDate,
  ...props
}) {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h3 classNames="card-title">
            {missionName} ({missionDate})
            <small> Flight # {flightNumber} </small>
          </h3>
        </div>
      </div>
    </>
  )
}