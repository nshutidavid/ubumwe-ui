import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup className="popup">
        <div className="popupContainer">
          <img src={item.img} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`} className="linkPin">{item.title}</Link>
            <span>{item.address}</span>
            <b> {item.price} Victims</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;