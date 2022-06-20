import React from 'react';

export default function DescriptionLaunch(...props) {
  return (
    <>
      <p>{props?.details || 'No details especified'}</p>
      &nbsp;
      <p className={props?.reason ? 'is-block' : 'is-hidden'}>
        Reason launch failure: {props?.reason}
      </p>
      <div className="columns is-mobile">
        <div className="column is-flex is-justify-content-center">
          <a
            href={props?.article_link}
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
            props?.wikipedia ?? 'is-hidden'
          }`}
        >
          <a
            href={props?.wikipedia}
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
