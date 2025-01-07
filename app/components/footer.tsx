"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <script
          src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"
          async
        ></script>
      </Head>

      <footer className="footer">
        {/* Footer Middle Section */}
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              {/* About Section */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="f-about single-footer">
                  <div className="logo">
                    <Link href="/">
                      <Image
                        src="/assets/logos/lmno.png"
                        alt="QnsAI Logo"
                        width={120}
                        height={30}
                        priority
                      />
                    </Link>
                  </div>
                  <p>
                    QnsAI is a tool to generate question papers with the help of AI
                    and NLP. We also have a database to create mock question papers
                    for competitive exams.
                  </p>
                </div>
              </div>

              {/* Links Section */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h3>Home</h3>
                  <ul>
                    <li>
                      <Link href="#overview">Overview</Link>
                    </li>
                    <li>
                      <Link href="#pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link href="#features">Features</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h3>Use Cases</h3>
                  <ul>
                    <li>
                      <Link href="#overview">Schools</Link>
                    </li>
                    <li>
                      <Link href="#overview">Students</Link>
                    </li>
                    <li>
                      <Link href="#overview">EdTech</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h3>Support</h3>
                  <ul>
                    <li>
                      <Link href="/privacy">Privacy</Link>
                    </li>
                    <li>
                      <Link href="/terms">Terms</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-12">
                  <div className="left">
                    <p>
                      Copyright © QnsAI {currentYear}{" "}
                      <Link
                        href="//www.dmca.com/Protection/Status.aspx?ID=66185ecb-ffa9-4830-a815-476a603bd335"
                        passHref
                      >
                        <a
                          title="DMCA.com Protection Status"
                          className="dmca-badge"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-10.png?ID=66185ecb-ffa9-4830-a815-476a603bd335"
                            alt="DMCA.com Protection Status"
                            width={100}
                            height={20}
                          />
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
