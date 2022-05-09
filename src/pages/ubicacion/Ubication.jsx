import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './ubication.scss';
import 'leaflet/dist/leaflet.css';
import Title from '../../components/sectionMenu/Title';

function Ubication() {
  return (
    <section id="ubication">
      <Title title="Nuestra" subtitle="Ubicación" />
      <MapContainer
        center={[14.592594, -88.587456]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[14.592594, -88.587456]}>
          <Popup>
            <h2>La Capitalina.</h2>
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default Ubication;
