import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <>
      <h1 className="display-6">Contact</h1>
      <p>Ronaldroo44@gmail.com</p>
      <p>(647)-524-8260</p>
      <div className="button-container">
        <a
          className="btn btn-primary mb-4"
          href="mailto:Ronaldroo44@gmail.com"
          role="button"
        >
          Send Email
        </a>
        <br></br>
        <a
          className="btn btn-primary"
          href="https://www.linkedin.com/in/ron-de-roo-26043b31/"
          role="button"
        >
          LinkedIn
        </a>
      </div>
    </>
  );
}

export default Contact;
