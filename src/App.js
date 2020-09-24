import React from 'react';
import { useState } from 'react';

import api from './services/api';
import './main.css';

function App() {

  const [city, setCity] = useState('');
  const [svg, setSVG] = useState([]);
  const [viewBox, setViewBox] = useState([]);

async function getSVG(e){
    e.preventDefault();

    api.get('/getSVG/'+ city).then(response => {
      setSVG(response.data);
    });

    api.get('/getViewBox/' + city).then(response => {
      setViewBox(response.data);
    });
}
  return (
    <div className="main">
      <form onSubmit={getSVG}>
        <input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>    
      <svg viewBox={viewBox.map(item => (item.getviewbox))}>
          <path d={svg.map(item => item.st_assvg)} />
        </svg>
    </div>
  ); 
}

export default App;
