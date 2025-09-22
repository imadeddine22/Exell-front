import React from 'react';
import { Link } from 'react-router-dom';

const About1 = () => {
    return (
<section className="cs_about cs_style_1 position-relative overflow-hidden">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_gap_y_40 cs_tab_reverse">
          <div className="col-lg-6">
            <div className="cs_about_content">
              <div className="cs_section_heading cs_style_1 cs_mb_28">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                  About Us<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_21 wow fadeInDown">L’excellence du digital</h2>
                <p className="cs_section_heading_text mb-0">
 Nous aidons les marques e-commerce à acquérir de nouveaux clients et à renforcer leur fidélisation en les accompagnant tout au long de leur parcours digital.  </p>
              </div>
              <ul className="cs_list cs_style_1 cs_medium cs_heading_color cs_mp_0">
                <li>
                  <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                  <span className="cs_list_text">Différentes options d’analyse.</span>
                </li>
                <li>
                  <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                  <span className="cs_list_text">Analyse du temps de chargement, du poids des pages et du nombre de requêtes</span>
                </li>
                <li>
                  <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                  <span className="cs_list_text">Opérations avancées d’analyse de données</span>
                </li>
              </ul>
              <div className="cs_about_btn_group">
                <Link to="/about" aria-label="Click to visit about us page" className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase wow fadeInLeft"><span>About Us</span></Link>
                <div className="cs_client_info_wrapper wow fadeInRight">
                  <div className="cs_client_info_header cs_mb_15">
                    <img src="/assets/img/icons/star.svg" alt="Star icon" />
                    <span className="cs_fs_20 cs_bold cs_heading_color">Trustipilot</span>
                  </div>
                  <div className="cs_client_review_content">
                    <div className="cs_client_thumb">
                      <img src="/assets/img/client_group_1.png" alt="Image" />
                    </div>
                    <div className="cs_client_rating_info">
                      <div className="cs_rating" data-rating="4">
                        <div className="cs_rating_percentage"></div>
                      </div>
                      <p className="cs_fs_14 cs_heading_color mb-0">450+ reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cs_about_thumbnail_wrapper wow fadeInUp">
              <div className="cs_about_thumbnail position-relative">
                <img src="/assets/img/imgabouthome/about_img_1.jpg" alt="Abou image" />
                <div className="cs_project_infobox_wrapper">
                  <div className="cs_project_infobox cs_blue_bg">
                    <h3 className="cs_fs_48 cs_white_color">5K+</h3>
                    <p className="cs_white_color mb-0">Projets livrés</p>
                  </div>
                </div>
                <div className="cs_vector_shape position-absolute">
                  <img src="/assets/img/vector_line.svg" alt="Vector line" />
                </div>
              </div>
              <div className="cs_about_thumbnail position-relative">
                <img src="/assets/img/imgabouthome/about_img_2.jpg" alt="About image" />
                <div className="cs_about_shape_3 position-absolute">
                  <img src="/assets/img/about_shape_1.svg" alt="Circle shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_about_shape_1 position-absolute">
          <img src="/assets/img/blob_shape.svg" alt="Blob shape" />
        </div>
        <div className="cs_about_shape_2 position-absolute">
          <img src="/assets/img/circle_1.svg" alt="Circle shape" />
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default About1;