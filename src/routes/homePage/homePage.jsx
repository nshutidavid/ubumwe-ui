import SearchBar from "../../components/searchBar/SearchBar"
import "./homepage.scss"

const HomePage = () => {
  return (
    <div className="homePage">
        <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">A Place for Learning & Remembrance</h1>
          
          <p> Welcome to our memorial site commemorating the genocide against Tutsi.
             Explore our platform to learn about this tragic history and book your visit to the memorial sites.
             Join us in honoring the lives lost and ensuring their stories are remembered.
          </p>
          <h1>Remember - Unite - Renew </h1>
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
        <img src="/bg.png" alt="" />
      </div>

    </div>
  )
}

export default HomePage