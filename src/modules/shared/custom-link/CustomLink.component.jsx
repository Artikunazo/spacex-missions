import React from 'react';

export default function CustomLink({ link, name, btnSize, ...props }) {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="tag is-link"
      >
        <span className="icon-text">
          <span>{name}</span>
          <span className="icon">
            <i className="fa fa-external-link" aria-hidden="true"></i>
          </span>
        </span>
      </a>
    </>
  );
}
