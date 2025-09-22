import React from 'react';
import { Link } from 'react-router-dom';

const HowWeDo2 = () => {
    return (
        <section className="cs_about cs_style_1 cs_type_1 position-relative">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-5 wow fadeInLeft">
              <div className="cs_about_thumbnail">
                <img src="/assets/img/about_img_3.png" alt="About image" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="cs_about_content">
                <div className="cs_section_heading cs_style_1 cs_mb_28">
                  <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">What We Do<span className="cs_shape_right"></span>
                  </p>
                  <h2 className="cs_fs_48 cs_mb_21 wow fadeInUp">Digital agency problems and their best solutions</h2>
                  <p className="cs_section_heading_text mb-0 wow fadeInUp" data-wow-delay="200ms">In order to scale new customer acquisition and retention for e-commerce brands, we work across the entire customer journey.</p>
                </div>
                <div className="cs_features_wrapper">
                  <div className="cs_feature_item">
                    <h3 className="cs_fs_24 cs_mb_4">Our Mission</h3>
                    <p className="cs_fs_18 mb-0">Empowering brands through  and strategic vision</p>
                  </div>
                  <div className="cs_feature_item">
                    <h3 className="cs_fs_24 cs_mb_4">Our Vision</h3>
                    <p className="cs_fs_18 mb-0">Shaping the future of branding with creativity and strategy</p>
                  </div>
                </div>
                <div className="cs_about_btn_group">
                  <Link to="/about" aria-label="About page visit button" className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase wow fadeInLeft"><span>About More</span></Link>
                  <div className="cs_client_info_wrapper wow fadeInRight">
                    <div className="cs_client_info_header cs_mb_1">
                      <span className="cs_fs_20 cs_semibold">(6k) Highest rated</span>
                    </div>
                    <div className="cs_client_review_content">
                      <div className="cs_client_thumb">
                        <img src="/assets/img/upwork.svg" alt="Upwork logo" />
                      </div>
                      <div className="cs_rating" data-rating="4.5">
                        <div className="cs_rating_percentage"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_about_shape_4 position-absolute wow fadeInLeft">
            <img src="/assets/img/about_shape_2.svg" alt="Circle shape" />
          </div>
          <div className="cs_about_shape_5 position-absolute">
            <img src="/assets/img/about_shape_3.svg" alt="Circle shape" />
          </div>
          <div className="cs_about_shape_6 position-absolute">
            <img src="/assets/img/about_shape_4.svg" alt="Circle shape" />
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default HowWeDo2;