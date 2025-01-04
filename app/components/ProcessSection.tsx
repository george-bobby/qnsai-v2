import React from "react";
import Image from "next/image";

const ProcessSection: React.FC = () => {
  return (
    <section className="process-section pt-130 pb-100">
      <div className="container">
        {/* Title Section */}
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-9 mx-auto">
            <div className="section-title2 text-center mb-55">
              <h2 className="wow fadeInUp" data-wow-delay=".4s">How QnsAI works?</h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                Steps Involved in the Implementation Process
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Steps */}
        <div className="row align-items-center time-line">
          {/* Step 1 */}
          <div className="col-12">
            <div className="single-timeline">
              <div className="row align-items-center">
                <div className="col-lg-5 order-last order-lg-first">
                  <div className="timeline-content left-content text-lg-end">
                    <div className="box-icon-style">
                      <i className="lni lni-search-alt"></i>
                    </div>
                    <h4 className="mb-10">Submitting Data</h4>
                    <p>
                      We allow different ways for inputting data like Copy/Paste Text, PDF files, MS
                      Word Docx, YouTube URL, Images, and even from Wikipedia searches.
                    </p>
                  </div>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-5">
                  <div className="timeline-img">
                    <Image
                      src="/assets/images/timeline/timeline-1.png"
                      alt="Submitting Data"
                      width={500}
                      height={300}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-12">
            <div className="single-timeline">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="timeline-img">
                    <Image
                      src="/assets/images/timeline/timeline-2.png"
                      alt="Keyword Detection"
                      width={500}
                      height={300}
                      priority
                    />
                  </div>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-5">
                  <div className="timeline-content right-content text-start">
                    <div className="box-icon-style">
                      <i className="lni lni-layers"></i>
                    </div>
                    <h4 className="mb-10">Keyword Detection</h4>
                    <p>
                      The natural language text is analyzed using ANN (Artificial Neural Networks) and
                      detects the keywords. You also have the option to add/remove keywords.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-12">
            <div className="single-timeline">
              <div className="row align-items-center">
                <div className="col-lg-5 order-last order-lg-first">
                  <div className="timeline-content left-content text-lg-end">
                    <div className="box-icon-style">
                      <i className="lni lni-code-alt"></i>
                    </div>
                    <h4 className="mb-10">Forming Questions</h4>
                    <p>
                      Different kinds of questions are formed at different difficulty levels according
                      to the user's preferences.
                    </p>
                  </div>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-5">
                  <div className="timeline-img">
                    <Image
                      src="/assets/images/timeline/timeline-3.png"
                      alt="Forming Questions"
                      width={500}
                      height={300}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="col-12">
            <div className="single-timeline">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="timeline-img">
                    <Image
                      src="/assets/images/timeline/timeline-4.png"
                      alt="Final Paper"
                      width={500}
                      height={300}
                      priority
                    />
                  </div>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-5">
                  <div className="timeline-content right-content text-start">
                    <div className="box-icon-style">
                      <i className="lni lni-rocket"></i>
                    </div>
                    <h4 className="mb-10">Final Paper</h4>
                    <p>
                      After verifying questions are right and after adding your own questions, the
                      questions can be exported to multiple formats like PDF, Word, or QTI.
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

export default ProcessSection;
