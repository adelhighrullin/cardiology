import React from 'react';
import { Link } from 'react-router-dom';
import { YMaps, Map, Placemark, FullscreenControl, ZoomControl } from 'react-yandex-maps';

function About() {
  return (
    <div className="column">
      <p>О нас........</p>
      <YMaps>
        <div id="map">
          
          <Map defaultState={{ center: [55.748579, 49.224803], zoom: 16 }}>
            <FullscreenControl />
            <Placemark geometry={[55.748579, 49.224803]} />
            <ZoomControl options={{ float: 'right' }} />
            </Map>
        </div>
      </YMaps>
      <Link to="/"><button>Вернуться на главную страницу</button></Link>
    </div>
  )
}

export default About;