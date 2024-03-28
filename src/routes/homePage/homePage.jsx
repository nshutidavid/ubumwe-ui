import SearchBar from "../../components/searchBar/SearchBar"
import "./homepage.scss"

const HomePage = () => {
  return (
    <div className="homePage">
        <div className="textContainer">
          
        <div className="wrapper">
          <h1 className="title">A Place for Learning & Remembrance</h1>          
          <p>Welcome to our memorial website, a platform dedicated to preserving the memory of the genocide against the Tutsi.
             Here, visitors can explore the history and significance of these tragic events.
              We offer various tour options, from complimentary visits to premium experiences, allowing individuals to engage with the memorials in their own way.
               Through our website, booking a visit is made simple,
              ensuring that paying respects and learning about the memorials is accessible to all. 
              Join us as we honor the lives lost and strive to promote remembrance and understanding.
          </p>
          
          {/* <h1>Remember - Unite - Renew </h1> */}
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1> + 1 Million</h1>
              <h2>Victims</h2>
            </div>
            <div className="box">
              <h1>Over 250</h1>
              <h2>Memorial Sites</h2>
            </div>
            <div className="box">
              <h1>4</h1>
              <h2>World Heritage Sites</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/backg.png" alt="" />
      </div>

    </div>
  )
}

export default HomePage