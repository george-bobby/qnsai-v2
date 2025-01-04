import React from "react";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-xl-6 col-lg-6">
            <div className="about-img-wrapper">
              <div
                className="about-img position-relative d-inline-block wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <Image
                  src="/assets/img/blooms.png"
                  alt="Bloom's Taxonomy"
                  width={500}
                  height={500}
                  priority
                />
                <div className="about-experience">
                  <h3>Bloom's Taxonomy</h3>
                  <p>
                    It is a model that categorizes learning objectives into varying levels of
                    complexity, from remembering to creating things.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-xl-6 col-lg-6">
            <div className="about-content-wrapper">
              <div className="section-title2">
                <span className="wow fadeInUp" data-wow-delay=".2s">Working Principle</span>
                <h2 className="mb-40 wow fadeInRight" data-wow-delay=".4s">
                  Generate questions of different difficulty levels.
                </h2>
              </div>

              <div className="about-content">
                <p className="mb-45 wow fadeInUp" data-wow-delay=".6s">
                  We use Bloom's Taxonomy as the core for difficulty level categorization. QnsAI is
                  designed with teachers in mind. The ML and NLP algorithms emulate a teacher's
                  thought process when creating a test paper. You can choose from different
                  difficulty levels.
                </p>

                {/* Difficulty Levels */}
                <div className="counter-up wow fadeInUp" data-wow-delay=".5s">
                  <div className="counter">
                    <h4 style={{ color: "#464cde" }}>Easy</h4>
                    <p>
                      This level involves the retrieval of factual information as a learning objective.
                    </p>
                  </div>
                  <div className="counter">
                    <h4 style={{ color: "#464cde" }}>Medium</h4>
                    <p>
                      This level mostly involves action, display, relation, execution, etc.
                    </p>
                  </div>
                  <div className="counter">
                    <h4 style={{ color: "#464cde" }}>Hard</h4>
                    <p>
                      This level mostly involves the creation of designs and self-solving of problems.
                    </p>
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

export default AboutSection;
