import React, { useState, useEffect } from 'react';
import * as API from '../../services/launches';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { locale } from 'date-fns/locale';

export default function LaunchDetails({ ...props }) {
  const { launchId } = useParams();
  const [launchDetails, setLaunchDetails] = useState({});

  useEffect(() => {
    API.getLaunchByFlight(launchId).then(setLaunchDetails);
  }, {});
  return (
    <>
      {console.log(launchDetails)}
      <section className="card">
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
            <p>
              {format(new Date(launchDetails.launch_date_local), 'P', {
                locale: locale.enEN,
              })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
