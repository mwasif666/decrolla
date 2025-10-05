import React from "react";
import styles from "./Founder.module.css";
// import authorImg from "./martha.jpg";

export default function Testimonial() {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className="row align-items-center justify-content-start">
          {/* Avatar */}
          <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-start mb-4 mb-md-0">
            <img
              src="https://cdn.decorilla.com/imgp/jpg/d28e76cb-139a-49e3-83c8-ccadfd1a99aa/Martha-Stewart-virtual-interior-design-review.jpg"
              alt="Martha Stewart"
              className={styles.avatar}
            />
          </div>

          {/* Quote + Author */}
          <div className="col-12 col-md-9">
            <blockquote className={styles.quote}>
              “We recommend Decorilla as the best online interior design service
              due to its comprehensive full-service offerings.”
            </blockquote>

            <div className={styles.authorRow}>
              <span className={styles.dash} aria-hidden="true">
                –
              </span>
              <span className={styles.author}>martha stewart</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
