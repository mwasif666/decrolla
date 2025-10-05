import { Link } from "react-router-dom";

export default function HeroSectionTwo() {
  return (
    <div id="home-1" className="hero-area">
      <div className="hero-area-banner">
        <div className="hero-area-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <div className="heading-animation">
                    <h1>
                      Transform your <br /> Space with Archipix
                    </h1>
                    <div>
                      <button
                        className="btn text-white px-5 py-2"
                        style={{
                          backgroundColor: "#b19f6f",
                          marginTop: "20px",
                          fontWeight: "500",
                        }}
                      >
                        Start my Transformation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              =
            </div>
            {/* <div className="row">
              <div className="offset-xl-5 col-xl-7 offset-md-4 col-md-6 text-lg-end">
                <div className="p-animation">
                  <p>
                    Welcome to Archipix, a full service architecture and
                    interior design firm. We specialize in creating beautiful,
                    functional spaces that reflect your unique style and
                    personality. Let us help you transform your space into a
                    work of art.
                  </p>
                </div>
                <Link to="/about" className="theme-btn mt-20">
                  Start a Project
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
