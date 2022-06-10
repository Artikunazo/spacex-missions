import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import * as API  from './services/launches';

export default function App() {
  const [] = useState(null);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
