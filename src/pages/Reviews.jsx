import React, { useState } from "react";
import styles from "./ReviewsSection.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";

// Dummy data with real-looking placeholder images
const reviewsData = [
  {
    name: "Jennifer D.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Decorilla was recommended to me by someone I know personally. She showed me her latest renderings and I was blown away by how professional it all looked. I looked into the service and found it to be reasonably priced and...",
  },
  {
    name: "Evelyn Hanson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Let me start by saying, I love, love, love, Decorilla. Thanks so much for capturing my vision and bringing my ordinary space to a level of brilliance! Every detail looks absolutely amazing.",
  },
  {
    name: "Michelle F.",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
    review:
      "We initially had Decorilla put together a design for our living room but we LOVED the process and the results so we had our designer do two more rooms in our house. We get so many compliments from everyone who...",
  },
  {
    name: "Denisse B.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    review:
      "Absolutely loved Decorilla! The process was simple and the designers understood my vision and made it a reality. Communication was amazing. I'm now in the shopping stage and can't wait until it's all done. I will definitely use Decorilla for...",
  },
  {
    name: "Friederike N.",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    review:
      "Totally happy with Decorilla's service. We had a great designer and it took only three weeks from starting the project to ordering the furniture. Apart from helping with the design and selecting pieces, Decorilla helps with ordering, which is great...",
  },
  {
    name: "Evan M.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    review:
      "I own a small dental office and was having difficulty finding a designer who could quickly and effectively help me with my office design. Decorilla exceeded my expectations. Designers were great, and super friendly. My team and I absolutely love...",
  },
];

const ReviewsSection = () => {
  const [expanded, setExpanded] = useState(
    Array(reviewsData.length).fill(false)
  );

  const toggleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <>
      <div className={styles.bannerSection}>
        <div className={styles.bannerText}>
          <h1>Revolutionizing Interior Design</h1>
        </div>
      </div>

      <div className={`container ${styles.reviewsSection}`}>
        <div className="row">
          {reviewsData.map((item, index) => (
            <div key={index} className="col-md-6 mb-5">
              <div className={styles.reviewCard}>
                <div className="d-flex align-items-center mb-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`${styles.reviewerImage} me-3`}
                  />
                  <div>
                    <h5 className="mb-0">{item.name}</h5>
                    <div className={styles.stars}>
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={styles.starIcon} />
                      ))}
                    </div>
                  </div>
                </div>

                <p
                  className={`${styles.reviewText} ${
                    expanded[index] ? styles.expanded : ""
                  }`}
                >
                  {expanded[index]
                    ? item.review
                    : item.review.substring(0, 150) + "..."}
                </p>

                <button
                  className={styles.showMoreBtn}
                  onClick={() => toggleExpand(index)}
                >
                  {expanded[index] ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewsSection;
