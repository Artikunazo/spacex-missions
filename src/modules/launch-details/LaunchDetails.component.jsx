import React, { useState, useEffect } from 'react';
import * as API from '../../services/launches';
import { useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';
import { isUrlValid } from '../../services/utils';
import Gallery from '../gallery/Gallery.component';
import CustomLink from '../shared/custom-link/CustomLink.component';

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
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={links?.mission_patch_small} alt="Placeholder image" />
            </figure>
          </div>

          <div className="content">
            <p>Rocket: {rocket?.rocket_name}</p>
            <p>Details: {details || 'No details especified'}</p>
            {launch_failure_details?.reason
              ? `<p>Reason: ${launch_failure_details?.reason}</p>`
              : ''}
            <div class="columns is-mobile">
              <div class="column is-flex is-justify-content-center">
                <a
                  href={article_link}
                  className="button is-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon-text">
                    <span>See article</span>
                    <span className="icon">
                      <i className="fa fa-external-link" aria-hidden="true"></i>
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

            {reddit_campaign &&
            reddit_launch &&
            reddit_media &&
            reddit_recovery ? (
              <div className="box">
                <h4 className="title is-4 has-text-centered">Reddit</h4>
                <div className="is-flex is-justify-content-space-between">
                  {reddit_campaign ? (
                    // <a
                    //   href={reddit_campaign}
                    //   target="_blank"
                    //   rel="noopener noreferrer"
                    //   className={`tag is-link`}
                    // >
                    //   <span className="icon-text">
                    //     <span>Campaign</span>
                    //     <span className="icon">
                    //       <i
                    //         className="fa fa-external-link"
                    //         aria-hidden="true"
                    //       ></i>
                    //     </span>
                    //   </span>
                    // </a>
                    <CustomLink link={reddit_campaign} name={'Campaign'} />
                  ) : (
                    ''
                  )}
                  {reddit_launch ? (
                    <a
                      href={reddit_launch}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tag is-link"
                    >
                      <span className="icon-text">
                        <span>Launch</span>
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

                  {reddit_media ? (
                    <a
                      href={reddit_media}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tag is-link"
                    >
                      <span className="icon-text">
                        <span>Media</span>
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

                  {reddit_recovery ? (
                    <a
                      href={reddit_recovery}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tag is-link"
                    >
                      <span className="icon-text">
                        <span>Recovery</span>
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
            ) : (
              ''
            )}

            <Gallery imagesList={flickr_images} />
          </div>
          {/* Content end */}
        </div>
      </section>
    </>
  );
}
