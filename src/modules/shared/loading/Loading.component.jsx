import React from 'react';
import './Loading.component.css';

export default function Loading() {
  return (
    <>
      <div class="lds-dual-ring"></div>
      <div>
        <p>Loading...</p>
      </div>
    </>
  );
}
