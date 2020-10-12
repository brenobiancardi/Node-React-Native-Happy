import React from "react";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";

import mapMarker from "../images/map-marker.svg";

import "leaflet/dist/leaflet.css";

import "../styles/pages/orphanages-map.css";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Vitória</strong>
          <span> Espirito Santo</span>
        </footer>
      </aside>

      <Map
        center={[-20.2894354, -40.2957702]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="/" className="create-orphanage">
        <FiPlus fontSize={38} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
