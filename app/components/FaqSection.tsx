'use client';
import React from 'react';

const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="ud-faq">
      <div className="shape">
        <img src="assets/images/faq/shape.svg" alt="shape" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-section-title text-center mx-auto">
              <h2>Frequently Asked Questions</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
              <div className="accordion">
                <button className="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  <span className="icon">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>Does QnsAI allow white-labelling?</span>
                </button>
                <div id="collapseOne" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    As of now, no. But the content generated through the website is completely owned by you.
                  </div>
                </div>
              </div>
            </div>
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
              <div className="accordion">
                <button className="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                  <span className="icon">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>Can I use an excel file as data source?</span>
                </button>
                <div id="collapseTwo" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    Right now it is not possible. But that idea is in active development.
                  </div>
                </div>
              </div>
            </div>
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
              <div className="accordion">
                <button className="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                  <span className="icon">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>Is there a free trial?</span>
                </button>
                <div id="collapseThree" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    No, but we have a free plan which allows you to test QnsAI before purchasing a premium plan.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
              <div className="accordion">
                <button className="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                  <span className="icon">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>Is there a limit of content I can give?</span>
                </button>
                <div id="collapseFour" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    Yes, it is about 2000 words. As of now, you cannot use multiple input methods at the same time.
                  </div>
                </div>
              </div>
            </div>
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
              <div className="accordion">
                <button className="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                  <span className="icon">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>What happens if my credit ends?</span>
                </button>
                <div id="collapseFive" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    If your credit ends, it is time for an upgrade. OR you can wait till next month to reset credit usage.
                  </div>
                </div>
              </div>
            </div>
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
              <div className="accordion">
                <button className="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSix">
                  <span className="icon">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>What languages do you support?</span>
                </button>
                <div id="collapseSix" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    We currently only support English. But we are planning to integrate Google Translate with QnsAI.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
