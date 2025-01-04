import React from "react";
import Image from "next/image";

const OverviewSection: React.FC = () => {
  return (
    <section id="overview" className="about-us index2 section">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6 col-12">
            <div className="about-left">
              <div className="section-title align-left">
                <h2 className="wow fadeInUp" data-wow-delay=".4s">Who needs QnsAI?</h2>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  If you ever work with data, you will need to find some questions to answer. It doesn't matter whether you are
                  a teacher, a student, or a researcher.
                </p>
              </div>

              <div className="about-tab wow fadeInUp" data-wow-delay=".3s">
                {/* Tabs */}
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                  <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#t-tab1"
                    role="tab"
                    aria-controls="t-tab1"
                    aria-selected="true"
                  >
                    Students
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#t-tab2"
                    role="tab"
                    aria-controls="t-tab2"
                    aria-selected="false"
                  >
                    Teachers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#t-tab3"
                    role="tab"
                    aria-controls="t-tab3"
                    aria-selected="false"
                  >
                    EdTech
                  </a>
                </li>

                  </li>
                </ul>

                {/* Tab Content */}
                <div className="tab-content" id="myTabContent">
                  {/* Students Tab */}
                  <div className="tab-pane fade show active" id="t-tab1" role="tabpanel">
                    <ul>
                      <li>
                        <i className="lni lni-checkmark-circle"></i> Students can test their own knowledge before appearing
                        for exams.
                      </li>
                      <li>
                        <i className="lni lni-checkmark-circle"></i> Automatically generate questions and answers from essays,
                        stories, passages, or extended constructed responses.
                      </li>
                    </ul>
                  </div>

                  {/* Teachers Tab */}
                  <div className="tab-pane fade" id="t-tab2" role="tabpanel">
                    <ul>
                      <li>
                        <i className="lni lni-checkmark-circle"></i> Create test papers in minutes to continuously assess
                        students' understanding of concepts taught.
                      </li>
                      <li>
                        <i className="lni lni-checkmark-circle"></i> Stop wasting time creating question papers; focus more on
                        teaching.
                      </li>
                    </ul>
                  </div>

                  {/* EdTech Tab */}
                  <div className="tab-pane fade" id="t-tab3" role="tabpanel">
                    <ul>
                      <li>
                        <i className="lni lni-checkmark-circle"></i> Promotes a deeper understanding of the learning content.
                      </li>
                      <li>
                        <i className="lni lni-checkmark-circle"></i> Saves time and cost by eliminating content outsourcing,
                        benefiting from unlimited question sets.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 col-12">
            <div className="about-right wow fadeInRight" data-wow-delay=".4s">
              <Image
                src="/assets/img/stu.png"
                alt="Students"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
