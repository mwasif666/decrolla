import { Link } from "react-router-dom";
import "./Footer.module.css"; // Use a CSS Module for styles

export default function FooterAreaSection() {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-up">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Link to="/" className="logo">
                Decorilla
              </Link>
              <p>
                Design your Dream House <br />
                Beautify your space with ease.
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5>ABOUT US</h5>
              <ul>
                <li>
                  <Link to="/team">The Team</Link>
                </li>
                <li>
                  <Link to="/company">Company</Link>
                </li>
                <li>
                  <Link to="/reviews">Reviews</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/careers">Design Careers</Link>
                </li>
                <li>
                  <Link to="/press">Press</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5>EXPLORE</h5>
              <ul>
                <li>
                  <Link to="/style-quiz">Style Quiz</Link>
                </li>
                <li>
                  <Link to="/blog">Interior Design Blog</Link>
                </li>
                <li>
                  <Link to="/projects">Sample Projects</Link>
                </li>
                <li>
                  <Link to="/portfolios">Designer Portfolios</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5>LOCATIONS</h5>
              <ul>
                <li>
                  <Link to="/new-york">New York</Link>
                </li>
                <li>
                  <Link to="/miami">Miami</Link>
                </li>
                <li>
                  <Link to="/los-angeles">Los Angeles</Link>
                </li>
                <li>
                  <Link to="/austin">Austin</Link>
                </li>
                <li>
                  <Link to="/chicago">Chicago</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Decorilla. All Rights Reserved.</p>
          <div className="footer-links">
            <Link to="/terms">Our Terms & Conditions</Link> |
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
