import React from 'react';
import { Link } from 'react-router-dom';

const About2 = () => {
    return (
        <section className="cs_about cs_style_1 cs_type_1 position-relative">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-5 wow fadeInLeft">
              <div className="cs_about_thumbnail">
                <img src="/assets/img/about_img_3.png" alt="À propos image" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="cs_about_content">
                <div className="cs_section_heading cs_style_1 cs_mb_28">
                  <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
                    Ce que nous faisons<span className="cs_shape_right"></span>
                  </p>
                  <h2 className="cs_fs_48 cs_mb_21 wow fadeInUp">
                    Excellencias Corporate : communication santé & solutions 360°
                  </h2>
                  <p className="cs_section_heading_text mb-0 wow fadeInUp" data-wow-delay="200ms">
                    Excellencias Corporate, c’est plus qu’une agence de communication.
On est un partenaire stratégique pour le secteur santé et bien-être, où on
combine créativité, stratégie et rigueur scientifique pour donner plus de
visibilité, plus de force et plus d’impact aux marques.
                  </p>
                </div>
                <div className="cs_features_wrapper">
                  <div className="cs_feature_item">
                    <h3 className="cs_fs_24 cs_mb_4">Histoire
</h3>
                    <p className="cs_fs_18 mb-0">
                     Créée en 2018, Excellencias Corporate est une agence de marketing
et de communication spécialisée dans la santé, le bien-être
et le secteur pharmaceutique.
                    </p>
                  </div>
                  <div className="cs_feature_item">
                    <h3 className="cs_fs_24 cs_mb_4">Notre equipe</h3>
                    <p className="cs_fs_18 mb-0">
                      Une équipe pluridisciplinaire, jeune et passionnée, réunissant experts en santé, créatifs et stratèges digitaux pour offrir des solutions innovantes et adaptées aux besoins des marques.
                    </p>
                  </div>
                </div>
                <div className="cs_about_btn_group">
                  <Link to="/about" aria-label="About page visit button" className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase wow fadeInLeft">
                    <span>En savoir plus</span>
                  </Link>
                  <div className="cs_client_info_wrapper wow fadeInRight">
                    <div className="cs_client_info_header cs_mb_1">
                      <span className="cs_fs_20 cs_semibold">(6k) Clients satisfaits</span>
                    </div>
                    <div className="cs_client_review_content">
                      <div className="cs_client_thumb">
                     
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
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default About2;
