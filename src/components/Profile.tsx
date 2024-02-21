import "bootstrap/dist/css/bootstrap.min.css";

function Profile() {
  return (
    <>
      <div>
        <h1 className="h4">Profile</h1>
        <p>
          A passion for providing elite customer service in corporate and
          leisure travel.
        </p>
        <a
          className="btn btn-secondary"
          href="public/pdf/Ron_de_Roo_Trip_Director_resume.pdf"
          download="Ron_de_Roo_Trip_Director_resume.pdf"
        >
          Download Resume PDF
        </a>
      </div>
    </>
  );
}

export default Profile;
