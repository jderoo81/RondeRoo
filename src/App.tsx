import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experince";
import PersonalTitle from "./components/PersonalTitle";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Interests from "./components/Interests";
import KeySkills from "./components/KeySkills";

function App() {
  return (
    <>
      <div className="container">
        <div className="row pt-4">
          {/*fist column */}
          <div className="col-md-4">
            <div className="image-container">
              <img
                className="img-fluid"
                src="src/assets/images/Ron_de_Roo_Trip_Director.jpg"
                alt="Image of Ron de Roo"
              ></img>
            </div>
            <PersonalTitle></PersonalTitle>
            <br></br>
            <Profile></Profile>
            <br></br>
            <Contact></Contact>
            <br></br>
            <Interests></Interests>
          </div>
          {/*second column */}
          <div className="col-md-8">
            <Experience></Experience>
            <Education></Education>
            <KeySkills></KeySkills>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
