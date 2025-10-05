import React, { useMemo } from "react";
import styles from "./VendorsShowcase.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Dummy logo images (replace with your brand assets later)
const logos = [
  "Herman+Miller",
  "Lillian+August",
  "tilebar",
  "Children+Inspire+Design",
  "BoConcept",
  "Jonathan+Adler",
  "CB2",
  "Made+Goods",
  "Layla+Grayce",
  "Z+Gallerie",
  "West+Elm",
  "Room+%26+Board",
  "Article",
  "Crate+%26+Barrel",
  "Design+Within+Reach",
].map(
  (label) => `https://dummyimage.com/260x80/ffffff/000000.png&text=${label}`
);

// utility: chunk array into pages (e.g., 10 logos per slide on lg)
const chunk = (arr, size) =>
  arr.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);

export default function VendorsShowcase() {
  // per slide counts for desktop/tablet/mobile (grid 5x2, 4x2, 3x2)
  const pagesDesktop = useMemo(() => chunk(logos, 10), []);
  const pagesTablet = useMemo(() => chunk(logos, 8), []);
  const pagesMobile = useMemo(() => chunk(logos, 6), []);

  return (
    <section className={styles.wrap}>
      <div className="container">
        <h2 className={`text-center ${styles.title}`}>
          Decorilla Pays for Itself
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          We pass on our furniture discount at +350 vendors so you save money
        </p>

        {/* Desktop ≥992px */}
        <div className="d-none d-lg-block">
          <Swiper
            modules={[Pagination, A11y]}
            pagination={{ clickable: true }}
            className={styles.swiper}
          >
            {pagesDesktop.map((page, idx) => (
              <SwiperSlide key={`desk-${idx}`}>
                <div className="row justify-content-center g-4">
                  {page.map((src, i) => (
                    <div
                      key={i}
                      className="col-6 col-lg-2 d-flex justify-content-center"
                    >
                      <img src={src} alt="brand logo" className={styles.logo} />
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Tablet 768–991 */}
        <div className="d-none d-md-block d-lg-none">
          <Swiper
            modules={[Pagination, A11y]}
            pagination={{ clickable: true }}
            className={styles.swiper}
          >
            {pagesTablet.map((page, idx) => (
              <SwiperSlide key={`tab-${idx}`}>
                <div className="row justify-content-center g-4">
                  {page.map((src, i) => (
                    <div
                      key={i}
                      className="col-6 col-md-3 d-flex justify-content-center"
                    >
                      <img src={src} alt="brand logo" className={styles.logo} />
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile <768 */}
        <div className="d-block d-md-none">
          <Swiper
            modules={[Pagination, A11y]}
            pagination={{ clickable: true }}
            className={styles.swiper}
          >
            {pagesMobile.map((page, idx) => (
              <SwiperSlide key={`mob-${idx}`}>
                <div className="row justify-content-center g-4">
                  {page.map((src, i) => (
                    <div
                      key={i}
                      className="col-6 d-flex justify-content-center"
                    >
                      <img src={src} alt="brand logo" className={styles.logo} />
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-4">
          <a href="#" className={styles.concierge}>
            + WHITE GLOVE CONCIERGE ACCESS
          </a>
        </div>
      </div>
    </section>
  );
}
