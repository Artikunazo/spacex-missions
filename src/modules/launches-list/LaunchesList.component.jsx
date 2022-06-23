import React, { useEffect, useState } from 'react';
import LaunchItem from '../launch-item/LaunchItem.component';
import * as API from '../../services/launches';
import { Loading } from '../shared/shared.module';
import './LaunchesList.component.css';

export default function LaunchesList() {
  const [launches, setLaunches] = useState([]);
  let flightNumber = 0;

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  //Get the button:
  const btnGoToTop = document.querySelector('.back-to-top');

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.documentElement.scrollTop > 350) {
      btnGoToTop.classList?.add('is-flex');
      btnGoToTop.classList?.remove('is-hidden');
    } else {
      btnGoToTop.classList?.remove('is-flex');
      btnGoToTop.classList?.add('is-hidden');
    }
  }

  return (
    <>
      <div
        className={`${
          launches?.length ? 'is-hidden' : 'is-block has-text-centered'
        }`}
      >
        <Loading />
      </div>
      <section className={`${!launches?.length ? 'is-hidden' : 'is-block'}`}>
        <div className="back-to-top is-hidden button is-success">
          <span onClick={() => (document.documentElement.scrollTop = 0)}>
            <i className="fa fa-arrow-up is-size-3" aria-hidden="true"></i>
          </span>
        </div>
        <div className="columns">
          <div className="column">
            {launches.map((launch) => (
              <div key={launch.flight_number} className="py-2 px-2">
                <LaunchItem
                  flightLogo={launch.links.mission_patch_small}
                  flightNumber={launch.flight_number}
                  missionName={launch.mission_name}
                  missionDate={launch.launch_year}
                  launchSuccess={launch.launch_success}
                />
                {(flightNumber = launches.flight_number)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
