import React, { useState } from 'react';

export default function Rocket({ rocketInfo, ...props }) {
  const { rocket_name } = rocketInfo || {};

  return (
    <>
      <div className="columns">
        <div className="column">
          <p class="is-flex is-justify-content-space-between">
            <span>
              Rocket:&nbsp;
              {rocket_name}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
