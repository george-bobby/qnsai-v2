'use client';
import React from 'react';
import Image from 'next/image';

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
                  <a target="_blank" rel="noopener noreferrer" href="https://www.ibps.in/">
                    <Image src="/assets/images/exams/ibps.jpg" alt="IBPS Exam Logo" width={200} height={100} />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://jeemain.nta.nic.in/">
                    <Image src="/assets/images/exams/jee.jpg" alt="JEE Exam Logo" width={200} height={100} />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://cee.kerala.gov.in/main.php">
                    <Image src="/assets/images/exams/keam.jpg" alt="KEAM Exam Logo" width={200} height={100} />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.nabard.org/careers-notices1.aspx?cid=693&id=26">
                    <Image src="/assets/images/exams/nabard.jpg" alt="NABARD Exam Logo" width={200} height={100} />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://neet.nta.nic.in/">
                    <Image src="/assets/images/exams/neet.jpg" alt="NEET Exam Logo" width={200} height={100} />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://sbi.co.in/web/careers">
                    <Image src="/assets/images/exams/sbi.jpg" alt="SBI Exam Logo" width={200} height={100} />
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
