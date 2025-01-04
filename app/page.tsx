import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import OverviewSection from "./components/OverviewSection";
import AboutSection from "./components/AboutSection";
import ProcessSection from "./components/ProcessSection";
import PricingSection from "./components/PricingSection";
import FaqSection from "./components/FaqSection";
import BlogSection from "./components/BlogSection";
import NewsletterSection from "./components/NewsletterSection";
import BrandArea from "./components/BrandArea";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScriptLoader from "./components/ScriptLoader";
import Head from "next/head"; // Import Head from Next.js

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>QnsAI - AI Generated Question Papers</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#464cde" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/assets/logos/favicon.png"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/lineicons.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/tiny-slider.css" />
        <link rel="stylesheet" href="/assets/css/glightbox.min.css" />
        <link rel="stylesheet" href="/assets/css/space.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/ud-styles.css" />
      </Head>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="bg-[#FAFAFA] relative">
        <div className="w-full bg-white max-w-[75rem] mx-auto flex flex-col border-l border-r border-[#F2F2F2] row-span-3">
          {/* Vertical divider */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#F2F2F2]" />

          {/* Logo Section */}
          <div className="flex justify-center py-4">
            <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
          </div>

          {/* Header Section */}
          <div className="p-10 border-b border-[#F2F2F2]">
            <h1 className="text-5xl font-bold tracking-tight text-[#131316] relative">
              QnsAI Website
            </h1>
            <p className="text-[#5E5F6E] pt-3 pb-6 max-w-[30rem] text-[1.0625rem] relative">
              Start editing this page.
            </p>
            <div className="relative flex gap-3">
              <SignedIn>
                <Link
                  href="/dashboard"
                  className="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold"
                >
                  Dashboard
                </Link>
              </SignedIn>
              <SignedOut>
                <SignInButton>
                  <button className="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold">
                    Sign in
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </div>

        {/* Sections from the first code */}
        <HeroSection />
        <FeaturesSection />
        <OverviewSection />
        <AboutSection />
        <ProcessSection />
        <PricingSection />
        <FaqSection />
        <BlogSection />
        <NewsletterSection />
        <BrandArea />
      </main>

      {/* Footer */}
      <Footer />

      {/* Additional Features */}
      <ScrollToTopButton />
      <ScriptLoader />
    </>
  );
};

export default Home;
