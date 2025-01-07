"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section id="hero-area" className="hero-area index2">
      <Image
        className="shape"
        src="/assets/images/hero/img-wave.png"
        alt="Wave Background"
        layout="intrinsic"  // This ensures proper aspect ratio handling
        width={1920}
        height={1080}
        priority
      />
      <div className="hero-inner">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6 col-12">
              <div className="home-slider">
                <div className="hero-text">
                  <h1>Wasting time on creating question papers? Let AI handle that</h1>
                  <p>
                    Get AI-generated questions for every purpose.
                    <strong> WE HAVE THE SOLUTION</strong>
                  </p>
                  <div className="button">
                  <Link href="/signup" className="btn">
                    Generate Questions
                  </Link>

                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6 col-12">
              <div className="mobile-screen">
                <Image
                  src="/assets/images/hero/app-overview.png"
                  alt="App Overview"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
