import React, { useMemo, useRef, useState } from "react";
import styles from "./MakeoverShowcase.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

const beforeImages = [
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1600&auto=format&fit=crop",
];

const afterImages = [
  "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
];

export default function MakeoverShowcase() {
  const [tab, setTab] = useState("after");
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = useMemo(
    () => (tab === "after" ? afterImages : beforeImages),
    [tab]
  );

  return (
    <section className={`container ${styles.section}`}>
      <h2 className={styles.title}>
        MODERN COASTAL LIVING ROOM AND BEDROOM MAKEOVER
      </h2>

      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tabBtn} ${
            tab === "before" ? styles.active : ""
          }`}
          onClick={() => setTab("before")}
        >
          BEFORE
        </button>
        <button
          className={`${styles.tabBtn} ${tab === "after" ? styles.active : ""}`}
          onClick={() => setTab("after")}
        >
          AFTER
        </button>
      </div>

      <div className="row g-4 align-items-center">
        {/* Slider (Left) */}
        <div className="col-12 col-lg-7 position-relative">
          {/* arrows */}
          <button
            className={`${styles.navBtn} ${styles.prev}`}
            ref={prevRef}
            aria-label="Previous"
          >
            <LuChevronLeft />
          </button>
          <button
            className={`${styles.navBtn} ${styles.next}`}
            ref={nextRef}
            aria-label="Next"
          >
            <LuChevronRight />
          </button>

          <Swiper
            modules={[Navigation, Pagination, A11y]}
            onBeforeInit={(swiper) => {
              // attach external buttons
              // eslint-disable-next-line no-param-reassign
              swiper.params.navigation.prevEl = prevRef.current;
              // eslint-disable-next-line no-param-reassign
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            pagination={{ clickable: true }}
            spaceBetween={16}
            className={styles.swiper}
          >
            {slides.map((src, i) => (
              <SwiperSlide key={i}>
                <div className={styles.card}>
                  <span className={styles.badge}>
                    Modern Coastal Living Room and Bedroom Online and AI
                    Interior Design
                  </span>
                  <img src={src} alt={`Slide ${i + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right content */}
        <div className="col-12 col-lg-5">
          <div className={styles.side}>
            <div className="mb-4">
              <div className={styles.sideTitle}>Client&apos;s Challenge</div>
              <p className={styles.text}>
                We would like a more minimal look with Feng Shui and natural
                elements that highlight our beautiful green view.
              </p>
            </div>

            <div className="mb-4">
              <div className={styles.sideTitle}>Result</div>
              <p className={styles.text}>
                "We got the relaxing dream home we always wanted. Wanda was fun
                to work with and paid attention to every single detail."
              </p>
              <div className={styles.meta}>- Kris</div>

              <div className="mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={styles.star} />
                ))}
              </div>
            </div>

            <a href="#" className={styles.link}>
              VIEW MORE DETAILS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
