import React from "react";
import styles from "./ConsultationCTA.module.css";
// dummy image (replace with your asset if you want)
// import hero from "./living-room.jpg";

export default function ConsultationCTA() {
  return (
    <section className="container-fluid px-0">
      <div className="row g-0 align-items-stretch">
        {/* Left: Image */}
        <div className="col-12 col-lg-6">
          <div className={styles.imgWrap}>
            <img
              src="https://cdn.decorilla.com/images/960/5184b656-9917-4c16-bd90-f1a2b7a8c93b/HighEnd-Online-Interior-Design-Help.jpg?cv=1"
              alt="Cozy living room with marble fireplace and leather sofa"
              className={styles.img}
            />
          </div>
        </div>

        {/* Right: Copy + CTA */}
        <div className="col-12 col-lg-6 d-flex">
          <div className={styles.content}>
            <h2 className={styles.heading}>
              Think you can&apos;t afford
              <br />
              beautiful interior design?
              <br />
              Think again.
            </h2>

            <button type="button" className={styles.cta}>
              SCHEDULE A CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
