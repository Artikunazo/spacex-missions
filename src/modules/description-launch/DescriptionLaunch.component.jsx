import React from 'react';

export default function DescriptionLaunch(...props) {
  const [data] = props;
  const { details, failureDetails, articleLink, wikipedia } = data || {};

  return (
    <>
      <p>{details || 'No details especified'}</p>
      &nbsp;
      <p className={failureDetails?.reason ? 'is-block' : 'is-hidden'}>
        Reason launch failure: {failureDetails?.reason}
      </p>
      <div className="columns is-mobile">
        <div className="column is-flex is-justify-content-center">
          <a
            href={articleLink}
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
        <div
          className={`column is-flex is-justify-content-center ${
            wikipedia ?? 'is-hidden'
          }`}
        >
          <a
            href={wikipedia}
            className="button is-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-text">
              <span>See wikipedia</span>
              <span className="icon">
                <i className="fa fa-external-link" aria-hidden="true"></i>
              </span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
