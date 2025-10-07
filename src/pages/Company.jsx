import React from "react";
import styles from "./Company.module.css"; // Importing CSS module

// Dummy image paths
import bannerImage from "../assets/img/cta-bg.jpg"; // Replace with your actual image

const Company = () => {
  return (
    <>
      <div className="container-fluid p-0">
        {/* Banner Section */}
        <div className={styles.bannerSection}>
          {/* <img src={bannerImage} alt="Banner" className={styles.bannerImg} /> */}
          <div className={styles.bannerText}>
            <h1>Revolutionizing Interior Design</h1>
          </div>
        </div>
      </div>
      <div className="container p-0">
        {/* Company Mission Section */}
        <div className={styles.companySection}>
          <h2 className="mb-4">Company</h2>
          <p>
            Decorilla is a new way to get the designer rooms you’ve always
            wanted… but never thought you could afford. By combining traditional
            in-home interior design and technology, they have created a platform
            connecting customers with professional vetted designers,
            streamlining the design process, and making beautiful interior
            design affordable and risk free.
          </p>
          <h2 className="my-4">Company Mission</h2>
          <p>
            Decorilla is a new way to get the designer rooms you’ve always
            wanted… but never thought you could afford. By combining traditional
            in-home interior design and technology, they have created a platform
            connecting customers with professional vetted designers,
            streamlining the design process, and making beautiful interior
            design affordable and risk free.
          </p>
          <h3 className="my-4">
            Decorilla's unique service promises the following:
          </h3>
          <div className="d-flex justify-content-between text-start">
            <ul>
              <li>
                Multiple design concept proposals from professional designers
              </li>
              <li>
                Fixed prices that are 80% less than traditional interior design
              </li>
              <li>A 100% satisfaction guarantee</li>
            </ul>
            <ul>
              <li>
                Multiple design concept proposals from professional designers
              </li>
              <li>
                Fixed prices that are 80% less than traditional interior design
              </li>
              <li>A 100% satisfaction guarantee</li>
            </ul>
          </div>
        </div>

        {/* Decorilla in Numbers Section */}
        <div className={styles.numbersSection}>
          <h3>Decorilla in Numbers</h3>
          <div className={styles.numbersGrid}>
            <div className={styles.numbersItem}>
              <h4>300+</h4>
              <p>Experienced Designers</p>
            </div>
            <div className={styles.numbersItem}>
              <h4>100,000+</h4>
              <p>Happy Clients</p>
            </div>
            <div className={styles.numbersItem}>
              <h4>$1,000s</h4>
              <p>Average Savings in Trade Discounts</p>
            </div>
            <div className={styles.numbersItem}>
              <h4>300+</h4>
              <p>Experienced Designers</p>
            </div>
            <div className={styles.numbersItem}>
              <h4>100,000+</h4>
              <p>Happy Clients</p>
            </div>
            <div className={styles.numbersItem}>
              <h4>$1,000s</h4>
              <p>Average Savings in Trade Discounts</p>
            </div>
          </div>
        </div>

        {/* Press Coverage Section */}
        <section id="press-coverage" className={styles.decorillaPageSection}>
          <div className="container">
            <h2 className={styles.heading}>Press Coverage</h2>
            <div className="row press-card-container">
              <div className="col-6 col-md-3">
                <div className={styles.card}>
                  <div className="card-body">
                    <h2 className="card-title">
                      <img
                        src="https://cdn2.decorilla.com/imgp/png/378f238f-0104-4386-b5b8-4c4f57847aa4/The-7-Best-Online-Interior-Design-Services-According-To-Home-Experts.png"
                        className={styles.pressImage}
                        alt="The 7 Best Online Interior Design Services, According To Home Experts"
                      />
                    </h2>
                    <div className="card-text">
                      <a
                        rel="nofollow"
                        href="https://www.forbes.com/sites/forbes-personal-shopper/article/best-online-interior-design-services/?sh=437b81f97426"
                        className={styles.pressTitle}
                      >
                        <h4>
                          The 7 Best Online Interior Design Services, According
                          To Home Experts
                        </h4>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className={styles.card}>
                  <div className="card-body">
                    <h2 className="card-title">
                      <img
                        src="https://cdn2.decorilla.com/imgp/png/a5c14bcb-7270-4b6d-912c-23babf4b5a97/20-Green-Bedroom-Ideas-That-Will-Turn-Your-Space-Into-a-Calming-Retreat.png"
                        className={styles.pressImage}
                        alt="20 Green Bedroom Ideas That Will Turn Your Space Into a Calming Retreat"
                      />
                    </h2>
                    <div className="card-text">
                      <a
                        rel="nofollow"
                        href="https://www.marthastewart.com/green-bedroom-ideas-8733249"
                        className={styles.pressTitle}
                      >
                        <h4>
                          20 Green Bedroom Ideas That Will Turn Your Space Into
                          a Calming Retreat
                        </h4>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className={styles.card}>
                  <div className="card-body">
                    <h2 className="card-title">
                      <img
                        src="https://cdn2.decorilla.com/imgp/png/9695faaa-e19f-4666-aaaa-c17c60e3fc09/The-19-best-couches-for-small-spaces-according-to-interior-designers.png"
                        className={styles.pressImage}
                        alt="The 19 best couches for small spaces, according to interior designers"
                      />
                    </h2>
                    <div className="card-text">
                      <a
                        rel="nofollow"
                        href="https://edition.cnn.com/cnn-underscored/home/best-couches-for-small-spaces"
                        className={styles.pressTitle}
                      >
                        <h4>
                          The 19 best couches for small spaces, according to
                          interior designers
                        </h4>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className={styles.card}>
                  <div className="card-body">
                    <h2 className="card-title">
                      <img
                        src="https://cdn2.decorilla.com/imgp/png/b5694541-1149-4efc-8495-788c597b8fd5/Coffered-Ceiling-101-A-Guide-to-the-Elegant-Home-Feature.png"
                        className={styles.pressImage}
                        alt="Coffered Ceiling 101: A Guide to the Elegant Home Feature"
                      />
                    </h2>
                    <div className="card-text">
                      <a
                        rel="nofollow"
                        href="https://www.architecturaldigest.com/story/coffered-ceiling"
                        className={styles.pressTitle}
                      >
                        <h4>
                          Coffered Ceiling 101: A Guide to the Elegant Home
                          Feature
                        </h4>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Company;
