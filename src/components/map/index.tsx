import { MapContainer, Marker, Popup, TileLayer,useMap } from "react-leaflet";
import "./styles.css";
import 'leaflet/dist/leaflet.css';

function Map(){
  return(
    <MapContainer center={[51.049999, -114.066666]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.042757, -114.076645]}>
        <Popup>
          Tu ubicación
        </Popup>
      </Marker>
  </MapContainer>
  )
}

export default Map