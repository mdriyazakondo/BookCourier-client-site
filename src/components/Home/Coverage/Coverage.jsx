import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Container from "../../../shared/Container/Container";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const rangpurDistricts = [
  { name: "Rangpur", position: [25.7439, 89.2752] },
  { name: "Dinajpur", position: [25.6217, 88.635] },
  { name: "Kurigram", position: [25.8054, 89.636] },
  { name: "Nilphamari", position: [25.931, 88.856] },
  { name: "Lalmonirhat", position: [25.9923, 89.2847] },
  { name: "Thakurgaon", position: [26.033, 88.4617] },
  { name: "Panchagarh", position: [26.3354, 88.5516] },
  { name: "Gaibandha", position: [25.3287, 89.528] },
];

const Coverage = () => {

  const center = [25.7439, 89.2752];

  return (
    <Container>
      <h1 className="text-center font-bold text-purple-500 text-3xl mb-3">
        Our Delivery Coverage Areas
      </h1>
      <div style={{ height: "500px" }} className="">
        <MapContainer
          center={center}
          zoom={8}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {rangpurDistricts.map((d, idx) => (
            <Marker key={idx} position={d.position}>
              <Popup>{d.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </Container>
  );
};

export default Coverage;
