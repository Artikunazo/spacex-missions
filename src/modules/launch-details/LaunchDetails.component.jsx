import React, { useState, useEffect } from 'react';
import * as API from '../../services/launches';
import { useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';

export default function LaunchDetails({ ...props }) {
  const { launchId } = useParams();
  const [launchDetails, setLaunchDetails] = useState({});

  useEffect(() => {
    API.getLaunchByFlight(launchId).then(setLaunchDetails);
  }, {});

  const { details, launch_date_local, rocket, launch_failure_details, links } =
    launchDetails || {};

  return (
    <>
      {console.log(launchDetails)}
      <section className="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src={links?.mission_patch_small} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <h2 class="title is-3 is-flex is-justify-content-space-between">
              {launchDetails.mission_name}
              <small>
                <span
                  className={` ${
                    launchDetails.launch_success
                      ? 'tag is-success'
                      : 'tag is-danger'
                  }`}
                >
                  {launchDetails.launch_success ? 'Success' : 'Failure'}
                </span>
              </small>
            </h2>
            <hr />
          </div>

          <div className="content">
            <p>Rocket: {rocket?.rocket_name}</p>
            <p>Details: {details || 'No details especified'}</p>
            {launch_failure_details?.reason
              ? `<p>Reason: ${launch_failure_details?.reason}</p>`
              : ''}
            {/* {Object.entries(links || {}).map((link) => {
              const [name, value] = link || [];
              if (value || value?.length > 0) {
                console.log(value);
                <Link to={value} target="_blank" rel="noopener noreferrer">
                  a
                </Link>;
              }
            })} */}
          </div>
        </div>
      </section>
    </>
  );
}
