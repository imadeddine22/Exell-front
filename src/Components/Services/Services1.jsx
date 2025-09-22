import React from 'react';
import { Link } from 'react-router-dom';

const Services1 = () => {

    const chooseContent = [
        {img:'/assets/img/service_item_bg.jpg', title:'Identité visuelle & design', content:' Nous créons des identités visuelles uniques qui reflètent vos valeurs et renforcent la crédibilité de votre marque dans le secteur de la santé. '},
        {img:'/assets/img/service_item_bg.jpg', title:'Développement web', content:'Nous développons des sites et applications web modernes, adaptés aux besoins des entreprises et du secteur de la santé, pour renforcer leur visibilité et améliorer l’expérience utilisateur.'},
        {img:'/assets/img/service_item_bg.jpg', title:'UI/UX Design', content:'Nous concevons des interfaces modernes et intuitives qui améliorent l’expérience utilisateur et valorisent l’image de votre marque.'},
        {img:'/assets/img/service_item_bg.jpg', title:'SEO & Analytics', content:'Nous optimisons votre visibilité en ligne grâce au référencement naturel et à l’analyse de données pour booster votre croissance.'},
      ]; 

    return (
        <section className="cs_heading_bg">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_left">
              <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
             Services<span className="cs_shape_right"></span>
              </p>
              <h2 className="cs_fs_48 cs_white_color cs_mb_21 wow fadeInUp">Solutions innovantes</h2>
              <p className="cs_section_heading_text cs_white_color_2 mb-0 wow fadeInUp"> De la stratégie digitale à l’événementiel médical, nous offrons des solutions<br/> adaptées pour renforcer la présence et la notoriété de votre marque </p>
            </div>
            <div className="cs_section_heading_right wow fadeInRight">
              <Link to="/service" className="cs_btn cs_style_1 cs_fs_16 cs_bold text-uppercase"><span>VOIR TOUS LES SERVICES</span></Link>
            </div>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="cs_service_item_wrapper">
          {chooseContent.map((item, i) => (
            <div key={i} className="cs_service_item cs_style_1 position-relative wow fadeInDown">
              <div className="cs_service_content">
                <h3 className="cs_service_title cs_fs_24 cs_white_color mb-0">
                  <Link to="/service/service-details" aria-label="Click to view service details">{item.title}</Link>
                </h3>
                <p className="cs_service_subtitle cs_medium cs_white_color_2 mb-0">{item.content}</p>
                <Link to="/service/service-details" aria-label="Click to view service details" className="cs_service_btn cs_center cs_radius_50">
                <img src="/assets/img/icons/arrow_right.svg" alt="Arrow right" />
                </Link>
              </div>
              <div className="cs_service_item_bg position-absolute">
                <img src={item.img} alt="img" />
              </div>
            </div>
            ))}

          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default Services1;