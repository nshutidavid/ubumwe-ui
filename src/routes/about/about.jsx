import "./about.scss";

const About = () => {
  return (
    <div className="about-page">
      <div className="aboutContainer">
        <div className="wrapper">
            <h2>Welcome to our memorial site dedicated to commemorating the lives lost during the genocide against the Tutsi.</h2>
          <div className="about-content">
            <h2>Our Vision</h2>
            <p>
            Our vision is to create a world where the atrocities of the past serve as lessons for the future.
             We envision a society built on understanding, empathy, and remembrance, where the memory of
             the victims of the genocide against the Tutsi inspires positive change and promotes peace.
            </p>
            <h2>Our Mission</h2>
            <p>
            Our mission is to provide a platform for remembrance, education, and reflection. Through this website, 
            we aim to honor the memory of the victims and ensure that their stories are never forgotten.          
            </p>
            <p>
            Established by a team passionate about preserving history and promoting understanding, 
            our site offers a comprehensive resource for learning about the genocide against the Tutsi.
             From historical background to personal testimonies,
             we strive to provide a nuanced and informative portrayal of this tragic chapter in human history.
            </p>
            <p>
            We believe that by engaging with the past, we can build a better future. 
            That's why we offer various ways for visitors to interact with the memorials, whether through virtual tours,
             educational resources, or booking visits to physical sites.
            </p>
            <p>
            Join us in our mission to commemorate the victims, educate future generations, 
            and work towards a world free from such atrocities. Together, 
            we can ensure that the lessons learned from the genocide against the Tutsi are never forgotten.
            </p>
            
            
            {/* Add more sections as needed */}
          </div>
        </div>
      </div>
     
        <div className="about-image">
        <img src="/bg2.png" alt="" />
        </div>
        
    </div>
    
  );
 
  
}

export default About