import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LaunchDetails from './modules/launch-details/LaunchDetails.component';
import LaunchesList from './modules/launches-list/LaunchesList.component';

export default function Routes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LaunchesList />} />
        <Route path="/flight/:launchId" element={<LaunchDetails />} />
      </Routes>
    </>
  );
}
