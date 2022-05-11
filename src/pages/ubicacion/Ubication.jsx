import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './ubication.scss';
import 'leaflet/dist/leaflet.css';
import Title from '../../components/sectionMenu/Title';

function Ubication() {
  const myIcon = L.icon({
    iconUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png',
    iconSize: [20, 35],
  });
  return (
    <section id="ubication">
      <Title title="Nuestra" subtitle="Ubicación" />
      <MapContainer
        center={[14.592268, -88.587173]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker icon={myIcon} position={[14.592268, -88.587173]}>
          <Popup>
            <h2>La Capitalina.</h2>
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default Ubication;
