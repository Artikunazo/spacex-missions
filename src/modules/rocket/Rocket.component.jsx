import React, { useState } from 'react';

export default function Rocket(...props) {
  const [data] = props || [];
  const { rocketInfo } = data || {};
  const { rocket_name, rocket_type } = rocketInfo || {};
  const { cores } = rocketInfo?.first_stage || {};
  const { payloads } = rocketInfo?.second_stage || {};

  const firstStageRender = (firstStage, index) => {
    const {
      core_serial,
      flight,
      land_success,
      landing_type,
      landing_vehicle,
      reused,
    } = firstStage || {};
    return (
      <>
        <div
          className={`column has-text-centered ${
            index % 2 === 0 && index > 0 ? 'is-full' : 'is-half'
          }`}
        >
          <p>
            Core Serial: <strong>{core_serial}</strong>
          </p>
          <p>Flight: {flight}</p>
          <p>
            Landing:{' '}
            <span
              className={` ${
                land_success ? 'tag is-success' : 'tag is-danger'
              }`}
            >
              {land_success ? 'Success' : 'Failure'}
            </span>
          </p>
          <p>Landing type: {landing_type}</p>
          <p>Landing vehicle: {landing_vehicle}</p>
          <p>It was reused?: {reused.toString()}</p>
        </div>
      </>
    );
  };

  const secondStageRender = (secondStage) => {
    // const {
    //   customers,
    //   manufacturer,
    //   nationality,
    //   orbit,
    //   payload_type,
    //   payload_mass_kg,
    //   payload_mass_lbs,
    //   cargo_manifest,
    // } = second_stage?.payloads || {};
  };

  console.log(cores);
  return (
    <>
      <div className="columns">
        <div className="column">
          <div class="is-flex is-justify-content-space-between">
            <p class="subtitle is-4">{rocket_name}</p>
            <p className="subtitle">Type: &nbsp;{rocket_type}</p>
          </div>
        </div>
      </div>

      <div className="columns" data-name="first-stage">
        <div className="column">
          <p className="has-text-centered">
            <strong>First Stage</strong>
          </p>
          <div className="columns is-flex is-multiline is-mobile">
            {cores?.map((item, index) => {
              return firstStageRender(item, index);
            })}
          </div>
        </div>
      </div>
      <div className="columns" data-name="second-stage"></div>
    </>
  );
}
