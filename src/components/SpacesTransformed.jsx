import React, { useMemo, useRef, useState } from "react";
import styles from "./SpacesTransformed.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const CATEGORIES = [
  "Living Room",
  "Dining Room",
  "Combined Living/Dining",
  "Bedroom",
  "Bathroom",
  "Office",
  "Kitchen",
  "Hallway",
  "Kids",
  "Outdoor",
  "Business",
  "Other",
];

const img = (q) =>
  `https://images.unsplash.com/${q}?q=80&w=1600&auto=format&fit=crop`;

const IMAGES = {
  "Living Room": [
    img("photo-1505691938895-1758d7feb511"),
    img("photo-1522708323590-d24dbb6b0267"),
    img("photo-1493666438817-866a91353ca9"),
    img("photo-1501045661006-fcebe0257c3f"),
    img("photo-1537726235470-8504e3beef77"),
    img("photo-1549187774-b4e9b0445b41"),
  ],
  "Dining Room": [
    img("photo-1503602642458-232111445657"),
    img("photo-1532375810709-75b1da00537c"),
    img("photo-1540575467063-178a50c2df87"),
    img("photo-1519710164239-da123dc03ef4"),
  ],
  "Combined Living/Dining": [
    img("photo-1524758631624-e2822e304c36"),
    img("photo-1493666438817-866a91353ca9"),
    img("photo-1600585154526-990dced4db0d"),
  ],
  Bedroom: [
    img("photo-1505691720157-9869c1ff0a8c"),
    img("photo-1616594039964-ae9021e75d2f"),
    img("photo-1616596872726-96b3056a3b8d"),
    img("photo-1505691723518-36a5ac3b2d95"),
  ],
  Bathroom: [
    img("photo-1552321554-5fefe8c9ef14"),
    img("photo-1604882737403-6f4f7f2a7bc2"),
  ],
  Office: [
    img("photo-1593642634524-b40b5baae6c4"),
    img("photo-1524758631624-e2822e304c36"),
    img("photo-1524758631624-e2822e304c36"),
  ],
  Kitchen: [
    img("photo-1507089947368-19c1da9775ae"),
    img("photo-1507089947368-19c1da9775ae"),
  ],
  Hallway: [
    img("photo-1519710164239-da123dc03ef4"),
    img("photo-1501045661006-fcebe0257c3f"),
  ],
  Kids: [
    img("photo-1540575467063-178a50c2df87"),
    img("photo-1532375810709-75b1da00537c"),
  ],
  Outdoor: [
    img("photo-1469474968028-56623f02e42e"),
    img("photo-1500530855697-b586d89ba3ee"),
  ],
  Business: [
    img("photo-1582582494700-6ce3b0e9d7e8"),
    img("photo-1496307042754-b4aa456c4a2d"),
  ],
  Other: [
    img("photo-1493666438817-866a91353ca9"),
    img("photo-1501045661006-fcebe0257c3f"),
  ],
};

export default function SpacesTransformed() {
  const [activeCat, setActiveCat] = useState("Living Room");
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const slides = useMemo(() => IMAGES[activeCat] || [], [activeCat]);

  return (
    <section className={styles.wrap}>
      <div className="container">
        <h2 className={`text-center ${styles.title}`}>
          Explore Real Spaces We’ve Transformed
        </h2>

        {/* Tabs */}
        <div
          className={`d-flex flex-wrap justify-content-center ${styles.tabs}`}
        >
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`${styles.tabBtn} ${
                activeCat === c ? styles.active : ""
              }`}
              onClick={() => setActiveCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="position-relative">
          {/* Arrows */}
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

          {/* Slider */}
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            // centeredSlides={true}
            loop={true}
            initialSlide={1} // 🔹 4th image by default
            breakpoints={{
              0: { slidesPerView: 1.1 },
              576: { slidesPerView: 1.6 },
              768: { slidesPerView: 2.3 },
              992: { slidesPerView: 3.3 },
              1200: { slidesPerView: 4.1 },
            }}
            className={styles.swiper}
          >
            {slides.map((src, i) => (
              <SwiperSlide key={i}>
                <figure className={styles.card}>
                  <img src={src} alt={`portfolio ${i + 1}`} />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-4">
          <button className={styles.cta}>VIEW PORTFOLIO</button>
        </div>
      </div>
    </section>
  );
}
