import React from 'react';

const BrandArea: React.FC = () => {
  return (
    <div className="brand-area section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12">
            <div className="section-title align-left wow fadeInLeft" data-wow-delay=".2s">
              <span>Coming SOOON...</span>
              <h2>Generate Questions for top competitive exams</h2>
              <p>
                Stop spending money on question banks. For competitive exams, QnsAI has its own database of
                questions. From now on, you can self-practice at your own pace.
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-12">
            <div className="brand-logo-wrapper wow fadeInRight" data-wow-delay=".4s">
              <ul className="brand-list liststyle d-flex flex-wrap justify-content-center">
                <li>
                  <a target="_blank" href="https://www.ibps.in/">
                    <img src="assets/images/exams/ibps.jpg" alt="IBPS Brand Logo" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://jeemain.nta.nic.in/">
                    <img src="assets/images/exams/jee.jpg" alt="JEE Brand Logo" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://cee.kerala.gov.in/main.php">
                    <img src="assets/images/exams/keam.jpg" alt="KEAM Brand Logo" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.nabard.org/careers-notices1.aspx?cid=693&id=26">
                    <img src="assets/images/exams/nabard.jpg" alt="NABARD Brand Logo" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://neet.nta.nic.in/">
                    <img src="assets/images/exams/neet.jpg" alt="NEET Brand Logo" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://sbi.co.in/web/careers">
                    <img src="assets/images/exams/sbi.jpg" alt="SBI Brand Logo" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;
