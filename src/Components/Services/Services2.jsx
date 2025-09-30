import React from 'react';
import { Link } from 'react-router-dom';

const Services2 = () => {

    const chooseContent = [
        {
          img:'/assets/img/icons/bulb.svg',
          title:'Brand Strategy',
          content:'Création ou repositionnement d’image de marque : storytelling,identité, messages clés.'
        },
        {
          img:'/assets/img/icons/email.svg',
          title:'Activations en pharmacie',
          content:'Animations terrain à grande échelle, distribution ciblée, PLV,kits gamification..'
        },
        {
          img:'/assets/img/icons/seo.svg',
          title:'SEO & Analytics',
          content:'Optimisation du référencement et suivi analytique pour maximiser votre visibilité.'
        },
        {
          img:'/assets/img/icons/watch.svg',
          title:'Content Marketing',
          content:'Stratégies de contenu engageant adaptées à vos objectifs commerciaux.'
        },
    ]; 

    return (
<section className="cs_gray_bg_2">
  <div className="cs_height_120 cs_height_lg_80"></div>
  <div className="container">
    <div className="cs_section_heading cs_style_1 text-center">
      <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
        <span className="cs_shape_right"></span>Nos Services<span className="cs_shape_right"></span>
      </p>
      <h2 className="cs_fs_48 mb-0 wow fadeInUp">Solutions Marketing Professionnelles</h2>
    </div>
    <div className="cs_height_60 cs_height_lg_50"></div>
    <div className="row cs_row_gap_30 cs_gap_y_30">
    {chooseContent.map((item, i) => (
      <div key={i} className="col-xl-3 col-md-6 wow fadeInDown">
        <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
          <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
            <img src={item.img} alt="Service icon" />
          </span>
          <div className="cs_card_content">
            <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">
              <Link to="/service/service-details" aria-label="Click to view service">{item.title}</Link>
            </h3>
            <p className="cs_card_subtitle cs_mb_22">{item.content}</p>
            <Link to="/service/service-details" aria-label="Click to view service" className="cs_card_btn cs_center cs_radius_50">
              <img src="/assets/img/icons/arrow_right.svg" alt="Arrow icon" />
            </Link>
          </div>
          <div className="cs_card_shape position-absolute start-0 top-0 z-0">
            <img src="/assets/img/service_card_shape.svg" alt="Card shape" />
          </div>
          <div className="cs_card_shape_2 position-absolute z-0"></div>
        </div>
      </div>
    ))}
    </div>
  </div>
  <div className="cs_height_120 cs_height_lg_80"></div>
</section>
    );
};

export default Services2;
