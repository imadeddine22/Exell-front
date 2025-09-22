import React from 'react';
import { Link } from 'react-router-dom';


const Project4 = () => {

  const chooseContent = [
    { img:'/assets/img/card_7.jpg', title:'Campagne Vitatine', content:'Marketing Santé' },
    { img:'/assets/img/card_8.jpg', title:'Spot Gelphore', content:'Production Audiovisuelle' },
    { img:'/assets/img/card_9.jpg', title:'Lancement Diabestrol', content:'Campagne Digitale' },
    { img:'/assets/img/card_10.jpg', title:'Studio Corporate', content:'Audiovisuel & Branding' },
    { img:'/assets/img/card_11.jpg', title:'Excellencias Academy', content:'Formation & Coaching' },
    { img:'/assets/img/card_12.jpg', title:'HealthGate Portal', content:'UI/UX & Développement' },
  ]; 

  return (
    <section className="cs_tabs position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">

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

export default Project4;
