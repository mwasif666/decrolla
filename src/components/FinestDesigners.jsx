import React from "react";
import styles from "./FinestDesigners.module.css";

// react-icons (lucide)
import {
  LuArmchair,
  LuLightbulb,
  LuPhoneCall,
  LuBox,
  LuPalette,
} from "react-icons/lu";

const features = [
  {
    icon: <LuArmchair />,
    text: (
      <>
        Up to 45% off at
        <br />
        350+
        <br /> furniture stores
      </>
    ),
  },
  {
    icon: <LuLightbulb />,
    text: (
      <>
        Concepts from multiple
        <br /> top designers
      </>
    ),
  },
  {
    icon: <LuPhoneCall />,
    text: (
      <>
        One-on-one interior
        <br /> design consultation
      </>
    ),
  },
  {
    icon: <LuBox />,
    text: <>3D model of your space</>,
  },
  {
    icon: <LuPalette />,
    text: (
      <>
        Color palette &amp; floor
        <br /> plan
      </>
    ),
  },
];

export default function FinestDesigners() {
  return (
    <section className={`container ${styles.section}`}>
      <div className="row justify-content-center">
        <div className="col-12 col-xl-10">
          <h2 className={`text-center ${styles.title}`}>
            Work Online With The Finest Interior Designers
          </h2>
          <p className={`text-center ${styles.subtitle}`}>
            Get award-winning personalized online interior design help
          </p>

          <div className="row justify-content-between gy-5 gx-4 mt-4">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center text-center mx-lg-2"
              >
                <div className={styles.iconWrap}>{f.icon}</div>
                <p className={styles.featureText}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
