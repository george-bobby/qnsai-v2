import React from 'react';
import Link from 'next/link';

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="latest-news-area section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <span className="wow fadeInDown" data-wow-delay=".2s">
                Latest News
              </span>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Use Cases
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                If you ever work with data, you will need to find some questions to answer. It doesn’t matter
                whether you are a teacher, student, or researcher.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-news wow fadeInUp" data-wow-delay=".2s">
              <div className="image">
                <Link href="#">
                  <img className="thumb" src="assets/images/blog/blog-grid1.jpg" alt="QnsAI For Students" />
                </Link>
                <div className="meta-details">
                  <img src="assets/images/blog/author.jpg" alt="Tim Norton" />
                  <span>BY TIM NORTON</span>
                </div>
              </div>
              <div className="content-body">
                <h4 className="title" style={{ textAlign: 'center' }}>
                  <Link href="#">QnsAI For Students</Link>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-news wow fadeInUp" data-wow-delay=".4s">
              <div className="image">
                <Link href="#">
                  <img className="thumb" src="assets/images/blog/blog-grid2.jpg" alt="QnsAI For Schools" />
                </Link>
                <div className="meta-details">
                  <img src="assets/images/blog/author.jpg" alt="Tim Norton" />
                  <span>BY TIM NORTON</span>
                </div>
              </div>
              <div className="content-body">
                <h4 className="title" style={{ textAlign: 'center' }}>
                  <Link href="#">QnsAI For Schools</Link>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-news wow fadeInUp" data-wow-delay=".6s">
              <div className="image">
                <Link href="#">
                  <img className="thumb" src="assets/images/blog/blog-grid3.jpg" alt="QnsAI For EdTech" />
                </Link>
                <div className="meta-details">
                  <img src="assets/images/blog/author.jpg" alt="Tim Norton" />
                  <span>BY TIM NORTON</span>
                </div>
              </div>
              <div className="content-body">
                <h4 className="title" style={{ textAlign: 'center' }}>
                  <Link href="#">QnsAI For EdTech</Link>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
