import React from "react";
import styles from "./FeaturedTrusted.module.css";

const logos = [
  {
    alt: "Architectural Digest",
    src: "https://dummyimage.com/220x80/ffffff/000000.png&text=AD",
  },
  {
    alt: "The New York Times",
    src: "https://dummyimage.com/260x80/ffffff/000000.png&text=The+New+York+Times",
  },
  {
    alt: "dwell",
    src: "https://dummyimage.com/200x80/ffffff/000000.png&text=dwell",
  },
  {
    alt: "New York Magazine",
    src: "https://dummyimage.com/260x80/ffffff/000000.png&text=New+York+Magazine",
  },
  {
    alt: "HGTV",
    src: "https://dummyimage.com/180x80/ffffff/000000.png&text=HGTV",
  },
  {
    alt: "The Wall Street Journal",
    src: "https://dummyimage.com/220x80/ffffff/000000.png&text=WSJ",
  },
];

export default function FeaturedTrusted() {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <h2 className={`text-center ${styles.title}`}>
          Featured &amp; Trusted By
        </h2>

        <div className="row justify-content-center align-items-center g-4 g-lg-5 mt-2">
          {logos.map((l, i) => (
            <div
              key={i}
              className="col-6 col-md-4 col-lg-2 d-flex justify-content-center"
            >
              <img className={styles.logo} src={l.src} alt={l.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
