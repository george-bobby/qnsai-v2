import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header index2">
      <div className="navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <Link href="/" passHref>
                  <Image src="/assets/logos/xyz.png" alt="Logo" width={120} height={30} />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link href="#features">Features</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#overview">Use Cases</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#pricing">Pricing</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="button">
                  <Link href="/signup">
                    <span className="btn">Get Started</span>
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
