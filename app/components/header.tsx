"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header index2">
      <div className="navbar-area">
        <div className="container">
          <div className="row items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                {/* Logo */}
                <Link href="/" passHref>
                  <Image
                    src="./components/assets/logos/xyz.png"
                    alt="XYZ Logo"
                    width={120}
                    height={30}
                    priority
                  />
                </Link>

                {/* Toggle Button for Mobile */}
                <button
                  className="navbar-toggler"
                  type="button"
                  aria-controls="navbarSupportedContent"
                  aria-expanded={isMenuOpen ? "true" : "false"}
                  aria-label="Toggle navigation"
                  onClick={toggleMenu}
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                {/* Navigation Links */}
                <div
                  className={`collapse navbar-collapse sub-menu-bar ${isMenuOpen ? "show" : ""
                    }`}
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link href="#features" className="nav-link">
                        Features
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#overview" className="nav-link">
                        Use Cases
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#pricing" className="nav-link">
                        Pricing
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#contact" className="nav-link">
                        Contact
                      </Link>
                    </li>
                  </ul>

                </div>

                {/* Get Started Button */}
                <div className="button ml-4">
                  <Link href="/signup" className="btn">
                    Get Started
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
