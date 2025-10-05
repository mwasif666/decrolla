import React from "react";
import styles from "./BenefitsThree.module.css";
import { FiCalendar, FiDollarSign, FiShoppingBag } from "react-icons/fi";

const items = [
  {
    icon: <FiCalendar />,
    title: "Save Time",
    desc: "Realistic 3D model & top professional help to take the guesswork out of the designing process.",
  },
  {
    icon: <FiDollarSign />,
    title: "Save Money",
    desc: "Top talent for up to 80% less than traditional interior design & trade discounts of 5% to 45% at the top vendors.",
  },
  {
    icon: <FiShoppingBag />,
    title: "Convenient & Stress Free",
    desc: "A fun and easy white-glove service including everything from design to convenient ordering.",
  },
];

export default function BenefitsThree() {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className="row g-4">
          {items.map((b, i) => (
            <div key={i} className="col-12 col-lg-4">
              <div className={styles.card}>
                <div className={styles.iconWrap}>{b.icon}</div>
                <h3 className={styles.title}>{b.title}</h3>
                <p className={styles.desc}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
