import React, { useState, useEffect } from 'react';
import * as API from '../../services/launches';
import { useParams, Link } from 'react-router-dom';
import Gallery from '../shared/gallery/Gallery.component';
import CustomLink from '../shared/custom-link/CustomLink.component';
import Rocket from '../rocket/Rocket.component';
import './LaunchDetails.component.css';
import DescriptionLaunch from '../description-launch/DescriptionLaunch.component';

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
  } = links || {};
  const haveRedditLinks =
    reddit_campaign || reddit_launch || reddit_media || reddit_recovery;

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
                  <a>
                    <span className="icon is-small">
                      <i class="fa fa-rocket" aria-hidden="true"></i>
                    </span>
                    <span>Rocket</span>
                  </a>
                </li>
                <li data-tab="2">
                  <a>
                    <span className="icon is-small">
                      <i class="fa fa-info" aria-hidden="true"></i>
                    </span>
                    <span>Details</span>
                  </a>
                </li>
                <li
                  data-tab="3"
                  className={`${haveRedditLinks ? 'is-block' : 'is-hidden'}`}
                >
                  <a>
                    <span className="icon is-small">
                      <i class="fa fa-reddit-alien" aria-hidden="true"></i>
                    </span>
                    <span>Reddit</span>
                  </a>
                </li>
                <li
                  data-tab="4"
                  className={`${
                    flickr_images?.length ? 'is-block' : 'is-hidden'
                  }`}
                >
                  <a>
                    <span className="icon is-small">
                      <i class="fa fa-picture-o" aria-hidden="true"></i>
                    </span>
                    <span>Gallery</span>
                  </a>
                </li>
              </ul>
            </div>
            <div id="tab-content">
              <section className="is-active" data-content="1">
                <Rocket rocketInfo={rocket} />
              </section>
              <section data-content="2">
                <DescriptionLaunch
                  details={details}
                  failureDetails={launch_failure_details}
                  wikipedia={wikipedia}
                  articleLink={article_link}
                />
              </section>
              <section data-content="3" data-name="reddit">
                <div className="box">
                  <div className="is-flex is-justify-content-space-between">
                    <CustomLink
                      link={reddit_campaign}
                      name={'Campaign'}
                      className={`${
                        reddit_campaign ? 'is-block' : 'is-hidden'
                      }`}
                    />
                    <CustomLink
                      link={reddit_launch}
                      name={'Launch'}
                      className={`${reddit_launch ? 'is-block' : 'is-hidden'}`}
                    />

                    <CustomLink
                      link={reddit_media}
                      name={'Media'}
                      className={`${reddit_media ? 'is-block' : 'is-hidden'}`}
                    />

                    <CustomLink
                      link={reddit_recovery}
                      name={'Recovery'}
                      className={`${
                        reddit_recovery ? 'is-block' : 'is-hidden'
                      }`}
                    />
                  </div>
                </div>
              </section>
              <section data-content="4">
                <Gallery
                  imagesList={flickr_images}
                  className={`${
                    flickr_images?.length ? 'is-block' : 'is-hidden'
                  }`}
                />
              </section>
            </div>
          </div>
          {/* Content end */}
        </div>
      </section>
    </>
  );
}
