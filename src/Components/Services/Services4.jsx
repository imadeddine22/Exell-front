import React from 'react';
import { Link } from 'react-router-dom';

const Services4 = () => {

    const chooseContent = [
        {
          img:'/assets/img/icons/bulb.svg',
          title:'Communication & Branding',
          content:"Plans de communication et identité visuelle adaptés à vos objectifs."
        },
        {
          img:'/assets/img/icons/email.svg',
          title:'Marketing Digital',
          content:"Campagnes digitales multicanal : réseaux sociaux, email marketing et publicité ciblée."
        },
        {
          img:'/assets/img/icons/seo.svg',
          title:'SEO & Analytics',
          content:"Optimisation de la visibilité et suivi des performances avec des données mesurables."
        },
        {
          img:'/assets/img/icons/watch.svg',
          title:'Production Audiovisuelle',
          content:"Conception et réalisation de vidéos, spots TV, motion design et contenus créatifs."
        },
        {
          img:'/assets/img/icons/ux-ui.svg',
          title:'Design & Création',
          content:"UI/UX, supports graphiques et contenus visuels pour renforcer l’impact de vos campagnes."
        },
        {
          img:'/assets/img/icons/app.svg',
          title:'Formation & Academy',
          content:"Programmes de formation spécialisés via Excellencias Academy."
        },
        {
          img:'/assets/img/icons/business.svg',
          title:'Tourisme Médical',
          content:"Accompagnement patients & partenariats cliniques via Excellencias HealthGate."
        },
        {
          img:'/assets/img/icons/digital.svg',
          title:'Stratégie Globale',
          content:"Solutions 360° intégrant communication santé, pharma et business corporate."
        },
      ]; 

    return (
<section className="cs_gray_bg_2">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_row_gap_30 cs_gap_y_30">
        {chooseContent.map((item, i) => (
          <div key={i} className="col-xl-3 col-md-6 wow fadeInDown">
            <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
              <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                <img src={item.img} alt={item.title} />
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

export default Services4;
