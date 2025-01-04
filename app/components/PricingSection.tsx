import Link from 'next/link';
import Image from 'next/image';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="ud-pricing">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-section-title mx-auto text-center">
              <span>No commitments, cancel any time.</span>
              <h2>Our Pricing Plans</h2>
              <p>
                Our pricing plans are made for everyone. For individuals, experts, and also for enterprise
                clients.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-0 align-themes-center justify-content-center">
          {/* Basic Plan */}
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="ud-single-pricing first-item wow fadeInUp" data-wow-delay=".15s">
              <div className="ud-pricing-header">
                <h4>Basic</h4>
              </div>
              <div className="ud-pricing-body">
                <ul>
                  <li>50 Questions Generated</li>
                  <li>Input methods - Typing, Image, PDF</li>
                  <li>Set Question Difficulty - No</li>
                  <li>Export Formats - TXT, PDF, Word</li>
                  <li>API Access - No</li>
                  <li>Access to QNsAI question DataBase - No</li>
                  <li>Custom Question DataBase - No</li>
                  <li>Email support</li>
                </ul>
              </div>
              <div className="ud-pricing-footer">
                <Link href="/signup" className="ud-main-btn ud-border-btn">
                  Free
                </Link>
              </div>
            </div>
          </div>

          {/* Professional Plan */}
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="ud-single-pricing active wow fadeInUp" data-wow-delay=".1s">
              <span className="ud-popular-tag">POPULAR</span>
              <div className="ud-pricing-header">
                <h4>Professional</h4>
              </div>
              <div className="ud-pricing-body">
                <ul>
                  <li>500 Questions Generated</li>
                  <li>More input methods - Video and Wikipedia</li>
                  <li>Set Question Difficulty - Yes</li>
                  <li>More Export Formats - QTI</li>
                  <li>API Access - No</li>
                  <li>Access to QNsAI question DataBase - Yes</li>
                  <li>Custom Question DataBase - No</li>
                  <li>Email support</li>
                </ul>
              </div>
              <div className="ud-pricing-footer">
                <Link href="/signup" className="ud-main-btn ud-white-btn">
                  $19.99/mo
                </Link>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="ud-single-pricing last-item wow fadeInUp" data-wow-delay=".15s">
              <div className="ud-pricing-header">
                <h4>Enterprise</h4>
              </div>
              <div className="ud-pricing-body">
                <ul>
                  <li>Unlimited Questions Generated</li>
                  <li>Input methods - Customized</li>
                  <li>Set Question Difficulty - Yes</li>
                  <li>Export Formats - Customized</li>
                  <li>API Access - Yes</li>
                  <li>Access to QNsAI question DataBase - Yes</li>
                  <li>Custom Question DataBase - Yes</li>
                  <li>Phone Support</li>
                </ul>
              </div>
              <div className="ud-pricing-footer">
                <Link href="/contact" className="ud-main-btn ud-border-btn">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
