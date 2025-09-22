import React from 'react';
import { Link } from 'react-router-dom';

const Services3 = () => {

    const chooseContent = [
        {title:'Communication & Stratégie Digitale'},
        {title:'Marketing Santé & Pharma'},
        {title:'Production Audiovisuelle'},
        {title:'Formation & Excellencias Academy'},
        {title:'Tourisme Médical – HealthGate'},
        {title:'SEO & Campagnes Média'},
    ]; 

    return (
        <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_gap_y_30">
            <div className="col-lg-6">
              <div className="cs_section_heading cs_style_1 cs_type_4">
                <p className="cs_section_subtitle cs_fs-18 cs_medium cs_accent_color wow fadeInDown">
                  Nos services phares <span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_21 wow fadeInUp">Des solutions exclusives adaptées à vos besoins</h2>
                <p className="cs_mb_41 wow fadeInUp" data-wow-delay="200ms">
                  Excellencias Corporate offre un accompagnement 360° : de la stratégie digitale à la communication santé, en passant par l’audiovisuel et la formation.
                </p>
                <Link to="/service" aria-label="Click to view all services" className="cs_view_service_btn cs_fs_14 cs_bold cs_accent_color position-relative">
                  <span className="cs_btn_shape position-absolute">
                    <img src="/assets/img/btn_shape.svg" alt="Button shape" />
                  </span>
                  <span>TOUS LES SERVICES</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_service_list_wrapper wow fadeInRight">
                <ul className="cs_service_list cs_fs_24 cs_bold cs_mp_0">
                  {chooseContent.map((item, i) => (
                    <li key={i}>
                      <Link to="/service/service-details" aria-label="Click to view service details">
                        <span>{item.title}</span>
                        <img src="/assets/img/icons/arrow_right.svg" alt="Arrow icon" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Services3;
