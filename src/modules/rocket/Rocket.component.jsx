import React, { useState } from 'react';

export default function Rocket(...props) {
  const [data] = props || [];
  const { rocketInfo } = data || {};
  const { rocket_name, rocket_type } = rocketInfo || {};
  const { cores } = rocketInfo?.first_stage || {};
  const { payloads } = rocketInfo?.second_stage || {};

  // const {
  //   core_serial,
  //   flights,
  //   land_success,
  //   landing_type,
  //   landing_vehicle,
  //   legs,
  //   reused,
  // } = first_stage?.cores || {};
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
  console.log(payloads);
  return (
    <>
      <div className="columns">
        <div className="column">
          <p class="is-flex is-justify-content-space-between">
            <span>
              Rocket:&nbsp;
              {rocket_name}
            </span>
            <span>Type: &nbsp;{rocket_type}</span>
          </p>
        </div>
      </div>
    </>
  );
}
