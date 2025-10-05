import React, { useState } from "react";
import styles from "./HowItWorks.module.css";
// import heroImage from "./how-it-works.jpg";

export default function HowItWorks() {
  const [show, setShow] = useState(false);

  return (
    <section className={`container ${styles.section}`}>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <h1 className={`text-center ${styles.title}`}>
            How it Works: Our Easy Process
          </h1>

          <p className="text-center text-muted mb-4">
            Choose from unique design concepts from multiple accomplished online
            interior designers
          </p>

          <div className={styles.mediaWrapper}>
            <img
              src="https://cdn.decorilla.com/images/1600/c6673df8-9b4c-4f47-adab-e96978885f08/How-Online-Interior-Design-Works.jpeg?cv=1"
              alt="Modern living room thumbnail"
              className={`img-fluid ${styles.heroImage}`}
            />
            <button
              type="button"
              className={styles.playBtn}
              aria-label="Play video"
              onClick={() => setShow(true)}
            >
              <span className={styles.playTriangle} />
            </button>
          </div>

          {/* Modal */}
          {show && (
            <div className="modal fade show d-block" tabIndex="-1">
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body p-0">
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                        title="Demo video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary m-3"
                    onClick={() => setShow(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
