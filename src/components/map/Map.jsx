import { MapContainer, TileLayer } from 'react-leaflet'
import './map.scss'
import "leaflet/dist/leaflet.css";
import Pin from '../pin/Pin';

//1.930374209570244, 30.060279236450754
function Map({items}){
  return (
    <MapContainer center={[-1.9403, 29.8739]} zoom={8} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item => (
      <Pin item={item} key={item.id} />
    ))}
  </MapContainer>
  
  )
}

export default Map