import { Link } from "react-router-dom";
import "./card.scss";
import { FaArchive, FaBookOpen, FaHistory, FaPeopleArrows, FaSave, FaSms, FaSpeakap } from "react-icons/fa";


function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price"> {item.price} Victims</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
            <FaHistory />
             {/*  <img src="/bed.png" alt="" /> */}
              <span>{item.bedroom} Testimonies</span>
            </div>
            <div className="feature">
              <FaBookOpen />
              {/* <img src="/bath.png" alt="" /> */}
              <span>{item.bathroom} Archive</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <FaSave className="iconImage"/>
              {/* <img src="/save.png" alt="" /> */}
            </div>
            <div className="icon">
              <FaSms className="iconImage"/>
              {/* <img src="/chat.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;