import React, { useState, useEffect } from 'react';
import * as API from '../../services/launches';
import { useParams, Link } from 'react-router-dom';
import Gallery from '../shared/gallery/Gallery.component';
import CustomLink from '../shared/custom-link/CustomLink.component';
import Rocket from '../rocket/Rocket.component';
import './LaunchDetails.component.css';

export default function LaunchDetails({ ...props }) {
  const { launchId } = useParams();
  const [launchDetails, setLaunchDetails] = useState({});

  useEffect(() => {
    API.getLaunchByFlight(launchId).then(setLaunchDetails);
  }, {});

  const { details, launch_date_local, rocket, launch_failure_details, links } =
    launchDetails || {};

  const {
    wikipedia,
    flickr_images,
    article_link,
    reddit_campaign,
    reddit_launch,
    reddit_media,
    reddit_recovery,
    video_link,
  } = links || {};
  const haveRedditLinks =
    reddit_campaign || reddit_launch || reddit_media || reddit_recovery;

  let isModalOpened = false;
  const TABS = [...document.querySelectorAll('#tabs ul li')];
  const CONTENT = [...document.querySelectorAll('#tab-content section')];
  const ACTIVE_CLASS = 'is-active';

  function initTabs() {
    TABS.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        let selected = tab.getAttribute('data-tab');
        updateActiveTab(tab);
        updateActiveContent(selected);
      });
    });
  }

  function updateActiveTab(selected) {
    TABS.forEach((tab) => {
      if (tab && tab.classList.contains(ACTIVE_CLASS)) {
        tab.classList.remove(ACTIVE_CLASS);
      }
    });
    selected.classList.add(ACTIVE_CLASS);
  }

  function updateActiveContent(selected) {
    CONTENT.forEach((item) => {
      if (item && item.classList.contains(ACTIVE_CLASS)) {
        item.classList.remove(ACTIVE_CLASS);
      }
      let data = item.getAttribute('data-content');
      if (data === selected) {
        item.classList.add(ACTIVE_CLASS);
      }
    });
  }

  initTabs();

  return (
    <>
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
          <div className="card-image">
            <figure className="image">
              <img src={links?.mission_patch_small} alt="Patch Launch Image" />
            </figure>
          </div>

          <div className="content mt-5">
            <div className="tabs is-fullwidth" id="tabs">
              <ul>
                <li className="is-active" data-tab="1">
                  <a>Rocket</a>
                </li>
                <li data-tab="2">
                  <a>Launch details</a>
                </li>
                <li
                  data-tab="3"
                  className={`${haveRedditLinks ? 'is-block' : 'is-hidden'}`}
                >
                  <a>Reddit</a>
                </li>
                <li data-tab="4">
                  <a>Gallery</a>
                </li>
              </ul>
            </div>
            <div id="tab-content">
              <section className="is-active" data-content="1">
                <Rocket rocketInfo={rocket} />
              </section>
              <section data-content="2">
                <p>{details || 'No details especified'}</p>
                &nbsp;
                <p
                  className={
                    launch_failure_details?.reason ? 'is-block' : 'is-hidden'
                  }
                >
                  Reason: {launch_failure_details?.reason}
                </p>
                <div className="columns is-mobile">
                  <div className="column is-flex is-justify-content-center">
                    <a
                      href={article_link}
                      className="button is-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon-text">
                        <span>See article</span>
                        <span className="icon">
                          <i
                            className="fa fa-external-link"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div class="column is-flex is-justify-content-center">
                    {wikipedia ? (
                      <a
                        href={wikipedia}
                        className="button is-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon-text">
                          <span>See wikipedia</span>
                          <span className="icon">
                            <i
                              className="fa fa-external-link"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </span>
                      </a>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </section>
              <section data-content="3" data-name="reddit">
                <div className="box">
                  {/* <h4 className="title is-4 has-text-centered">Reddit</h4> */}
                  <div className="is-flex is-justify-content-space-between">
                    {reddit_campaign ? (
                      <CustomLink link={reddit_campaign} name={'Campaign'} />
                    ) : (
                      ''
                    )}
                    {reddit_launch ? (
                      <CustomLink link={reddit_launch} name={'Launch'} />
                    ) : (
                      ''
                    )}

                    {reddit_media ? (
                      <CustomLink link={reddit_media} name={'Media'} />
                    ) : (
                      ''
                    )}

                    {reddit_recovery ? (
                      <CustomLink link={reddit_recovery} name={'Recovery'} />
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </section>
              <section data-content="4">
                {flickr_images?.length > 0 ? (
                  <Gallery imagesList={flickr_images} />
                ) : (
                  ''
                )}
              </section>
            </div>
          </div>
          {/* Content end */}
        </div>
      </section>
    </>
  );
}
