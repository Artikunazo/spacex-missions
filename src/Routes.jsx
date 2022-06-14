import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MoreDetails from './modules/more-details/MoreDetails.component';
import LaunchesList from './launches-list/LaunchesList.component';

export default function Routes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LaunchesList />} />
        <Route path="/flight/:number" element={<MoreDetails />} />
      </Routes>
    </>
  );
}
