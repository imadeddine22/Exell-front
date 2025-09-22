import React from 'react';
import { Link } from 'react-router-dom';

const Project2 = () => {
  const chooseContent = [
    { img: "/assets/img/card_7.jpg", title: "Campagne Cosmétiques", content: "Branding & Social Ads" },
    { img: "/assets/img/card_8.jpg", title: "Pharma Marketing", content: "Campagne en officine" },
    { img: "/assets/img/card_9.jpg", title: "Production Audiovisuelle", content: "Spot TV & Digital" },
    { img: "/assets/img/card_10.jpg", title: "SEO & Analytics", content: "Optimisation Web" },
    { img: "/assets/img/card_11.jpg", title: "Medical Tourism", content: "Promotion internationale" },
    { img: "/assets/img/card_12.jpg", title: "Formation & Academy", content: "Workshops & Training" },
  ];

  return (
    <section className="cs_tabs position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1 position-relative z-1">
          <div className="cs_section_heading_left">
            <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
              Nos Projets Réalisés<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0 wow fadeInUp">Découvrez Nos Réalisations</h2>
          </div>
          <div className="cs_section_heading_right wow fadeInLeft">
            <ul className="cs_tab_links cs_fs_14 cs_style_1 cs_mp_0">
              <li className="active">
                <Link to="/project" aria-label="Tab button">Tous les Projets</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="cs_height_60 cs_height_lg_50"></div>

        <div className="cs_tab_body wow fadeInUp" data-wow-delay="200ms">
          <div className="cs_tab active" id="all">
            <div className="cs_cards_wrapper_1">
              {chooseContent.map((item, i) => (
                <Link
                  key={i}
                  to="/project/project-details"
                  className="cs_card cs_style_3 cs_radius_15 position-relative"
                  aria-label="Click go to project details"
                >
                  <div className="cs_card_overlay position-absolute"></div>
                  <img src={item.img} alt="Project image" />
                  <span className="cs_card_btn cs_accent_bg cs_center cs_radius_50 position-absolute">
                    <img src="/assets/img/icons/arrow_right.svg" alt="Arrow icon" />
                  </span>
                  <div className="cs_card_info position-absolute">
                    <h3 className="cs_fs_24 cs_white_color cs_mb_2">{item.title}</h3>
                    <p className="cs_medium cs_white_color mb-0">{item.content}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="cs_case_shape_1 position-absolute">
          <img src="/assets/img/case_shape_1.svg" alt="Shape image" />
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default Project2;