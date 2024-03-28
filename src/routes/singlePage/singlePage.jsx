import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummydata";
import { FaBars, FaBookOpen, FaBus, FaHistory, FaHotel, FaPersonBooth, FaServer, FaServicestack, FaStore } from "react-icons/fa";

function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price"> {singlePostData.price} Victims</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
          <div className="feature">
              <FaPersonBooth />
              {/* <img src="/utility.png" alt="" /> */}
              <div className="featureText">
                <span>Commemoration Day</span>
                <p>11th April</p>
              </div>
            </div>
            <div className="feature">
              <FaPersonBooth />
              {/* <img src="/utility.png" alt="" /> */}
              <div className="featureText">
                <span>Guided Tours</span>
                <p>Available during the commemoration Days</p>
              </div>
            </div>
            <div className="feature">
              <FaStore />
              {/* <img src="/pet.png" alt="" /> */}
              <div className="featureText">
                <span>Memorial Resources</span>
                <p>Available on working days</p>
              </div>
            </div>
            <div className="feature">
              <FaServer />
             {/*  <img src="/fee.png" alt="" /> */}
              <div className="featureText">
                <span>Visitor Services</span>
                <p>Available</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <FaHistory />
              {/* <img src="/bed.png" alt="" /> */}
              <span>2 Testimonies</span>
            </div>
            <div className="size">
              <FaBookOpen />
              {/* <img src="/bath.png" alt="" /> */}
              <span>1 Archive</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <FaHotel />
              {/* <img src="/school.png" alt="" /> */}
              <div className="featureText">
                <span>Hotel</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <FaBus />
              {/* <img src="/pet.png" alt="" /> */}
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <FaBars />
              {/* <img src="/fee.png" alt="" /> */}
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;