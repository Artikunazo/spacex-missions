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
            (index % 2 === 0 && index > 0) || index + 1 === cores.length
              ? 'is-full'
              : 'is-half'
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
          <p>It was reused?: {reused ? 'Yes' : 'No'}</p>
        </div>
      </>
    );
  };

  const secondStageRender = (secondStage, index) => {
    const {
      customers,
      manufacturer,
      nationality,
      orbit,
      payload_id,
      payload_type,
      payload_mass_kg,
      payload_mass_lbs,
      cargo_manifest,
      reused,
    } = secondStage || {};

    return (
      <>
        <div className="column has-text-centered">
          <p>{payload_id}</p>
          <p>Type: {payload_type}</p>
          <p>
            Mass: {payload_mass_kg}kg ({payload_mass_lbs}lbs)
          </p>
          <p>Manufacturer: {manufacturer}</p>
          <p>Nationality: {nationality}</p>
          <p>Orbit: {orbit}</p>
          <p>Costumers: {customers?.map((customer) => customer)}</p>
          <p className={`${cargo_manifest ? 'is-block' : 'is-hidden'}`}>
            Cargo: {cargo_manifest}
          </p>
          <p>Reused: {reused ? 'Yes' : 'No'}</p>
        </div>
      </>
    );
  };

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
      <hr />
      <div className="columns" data-name="second-stage">
        <div className="column">
          <p className="has-text-centered">
            <strong>Second Stage</strong>
          </p>
          <div className="columns is-flex is-multiline is-mobile">
            {payloads?.map((item, index) => {
              return secondStageRender(item, index);
            })}
          </div>
        </div>
      </div>
    </>
  );
}
