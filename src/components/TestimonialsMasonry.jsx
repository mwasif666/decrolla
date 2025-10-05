import React from "react";
import styles from "./TestimonialsMasonry.module.css";

// dummy avatars
const AV = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&h=200&fit=crop",
];

const items = [
  {
    text: "From the moment we signed up, until we completed the entire house, we felt pampered, loved, and appreciated. The quality of the online decorators and people who work there is top-notch, highly skilled, caring and very professional.",
    name: "Debra Albert",
    role: "CEO, Continued Learning",
    avatar: AV[0],
  },
  {
    text: "I’m so impressed with the customer service. After all the stress from moving, it’s nice for something to be so easy. The ordering team helped coordinate deliveries and the discounts paid for the service many times over.",
    name: "David Linacre",
    role: "VP, Progressive Insurance",
    avatar: AV[1],
  },
  {
    text: "Let me start by saying, I love, love, love Decorilla. Thanks so much for capturing my vision and bringing my ordinary space to a level of brilliance!",
    name: "Evelyn Hanson",
    role: "CMO, Cowbell Plants",
    avatar: AV[2],
  },
  {
    text: "I can’t believe how great my 3D renderings looked! Susan completely understood what I wanted and got every little detail of my online interior design just perfect.",
    name: "Sara Patterson",
    role: "MD, Zenith Innovations",
    avatar: AV[3],
  },
];

export default function TestimonialsMasonry() {
  return (
    <section className={styles.wrap}>
      <div>
        <h2 className={`text-center ${styles.title}`}>
          Happy Clients. Beautiful Designs.
        </h2>

        <p className={`text-center ${styles.subtitle}`}>
          Our customers love our professional virtual interior design services
          and here is why.&nbsp;
          <a href="#" className={styles.link}>
            SEE MORE REVIEWS
          </a>
        </p>
      </div>
      <section className={styles.wrapimage}>
        <div className="container">
          {/* Cards grid — two columns on lg, stacked on mobile; staggered via CSS */}
          <div className="row gy-4 gx-4">
            <div className="col-12 col-lg-6">
              <div className={`${styles.card} ${styles.offsetTopLg}`}>
                <p className={styles.text}>{items[0].text}</p>
                <div className={styles.author}>
                  <img src={items[0].avatar} alt={items[0].name} />
                  <div>
                    <div className={styles.name}>{items[0].name}</div>
                    <div className={styles.role}>{items[0].role}</div>
                  </div>
                </div>
              </div>

              <div className={`${styles.card} ${styles.offsetBottomLg}`}>
                <p className={styles.text}>{items[2].text}</p>
                <div className={styles.author}>
                  <img src={items[2].avatar} alt={items[2].name} />
                  <div>
                    <div className={styles.name}>{items[2].name}</div>
                    <div className={styles.role}>{items[2].role}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className={`${styles.card} ${styles.offsetTopSm}`}>
                <p className={styles.text}>{items[1].text}</p>
                <div className={styles.author}>
                  <img src={items[1].avatar} alt={items[1].name} />
                  <div>
                    <div className={styles.name}>{items[1].name}</div>
                    <div className={styles.role}>{items[1].role}</div>
                  </div>
                </div>
              </div>

              <div className={`${styles.card} ${styles.offsetBottomSm}`}>
                <p className={styles.text}>{items[3].text}</p>
                <div className={styles.author}>
                  <img src={items[3].avatar} alt={items[3].name} />
                  <div>
                    <div className={styles.name}>{items[3].name}</div>
                    <div className={styles.role}>{items[3].role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
