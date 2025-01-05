import React from "react";
import Image from "next/image";
import Link from "next/link";

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="services index2 section">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8 col-12">
            <div className="section-title align-left">
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Using AI to Solve Edtech Challenges.
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                It can generate questions from text in minutes. It turns up as a
                solution in the form of a question-answer generator that helps teachers,
                exam administrators, and content leaders save time and reduce human errors.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-4 col-12">
            <div className="review-content wow fadeInRight" data-wow-delay=".3s">
              <h3>4.5</h3>
              <ul className="rating">
                <li>
                  <i className="lni lni-star-filled"></i>
                </li>
                <li>
                  <i className="lni lni-star-filled"></i>
                </li>
                <li>
                  <i className="lni lni-star-filled"></i>
                </li>
                <li>
                  <i className="lni lni-star-filled"></i>
                </li>
                <li>
                  <i className="lni lni-star-half"></i>
                </li>
              </ul>
              <p>From 10 Reviews</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="single-head">
          {/* Background Pattern */}
          <Image
            className="service-pattern wow fadeInLeft"
            data-wow-delay=".4s"
            src="./components//assets/images/service/service-pattern.png"
            alt="Service Pattern"
            width={500}
            height={500}
            priority
          />

          <div className="row">
            {/* Feature 1 */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-service wow fadeInUp" data-wow-delay=".2s">
                <h3>
                  <Link href="#features">Save time, money, and effort</Link>
                </h3>
                <div className="icon">
                  <i className="lni lni-coin"></i>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-service wow fadeInUp" data-wow-delay=".4s">
                <h3>
                  <Link href="#features">Reduce human bias and error</Link>
                </h3>
                <div className="icon">
                  <i className="lni lni-users"></i>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-service wow fadeInUp" data-wow-delay=".6s">
                <h3>
                  <Link href="#features">Automate repetitive tasks</Link>
                </h3>
                <div className="icon">
                  <i className="lni lni-reload"></i>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-service wow fadeInUp" data-wow-delay=".8s">
                <h3>
                  <Link href="#features">Customize training modules</Link>
                </h3>
                <div className="icon">
                  <i className="lni lni-cogs"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
