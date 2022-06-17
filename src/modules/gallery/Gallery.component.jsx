import React from 'react';

export default function Gallery({ imagesList, ...props }) {
  return (
    <>
      <div className="box">
        <h4 class="title is-4 has-text-centered">Gallery</h4>
        <div className="columns">
          <div className="column">
            {imagesList?.map((image) => {
              return (
                <figure class="image">
                  <img src={image} />
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
