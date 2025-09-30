import React from 'react';
import { Link } from 'react-router-dom';

const Team1 = () => {

    const teamContent = [
        {img:'/assets/img/team_1.jpg', name:'Dr. KHALED Salah Eddine', content:'Fondateur & Directeur Général',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_2.jpg', name:'DJEBBARI Doha ', content:'Vice-Directrice & Project Manager',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_3.jpg', name:'MOALLEM Naoufel', content:'Graphic Designer',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_4.jpg', name:'BEGHDAD Anfal ', content:'Chargée de RH/Finance',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
      ];

    return (
        <section className="cs_gray_bg_1 position-relative">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_center cs_mb_20 wow fadeInDown">
              <span className="cs_shape_left"></span>Notre équipe<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 cs_mb_21 wow fadeInUp">Nos experts professionnels</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_30 position-relative z-1">

          {teamContent.map((item, i) => (
            <div key={i} className="col-lg-3 col-sm-6 wow fadeInDown">
              <div className="cs_team cs_style_1 position-relative">
                <div className="cs_team_thumbnail cs_radius_15 position-relative">
                  <img src={item.img} alt="Team image" />
                  <div className="cs_social_links cs_radius_8 position-absolute">
                    <Link to={item.instagram} aria-label="Social button" className="cs_social_link cs_center cs_radius_4">
                    <i className="bi bi-instagram"></i></Link>
                    <Link to={item.facebook} aria-label="Social button" className="cs_social_link cs_center cs_radius_4">
                    <i className="bi bi-facebook"></i></Link>
                    <Link to={item.twitter} aria-label="Social button" className="cs_social_link cs_center cs_radius_4">
                    <i className="bi bi-twitter-x"></i></Link>
                    <Link to={item.linkedin} aria-label="Social button" className="cs_social_link cs_center cs_radius_4">
                    <i className="bi bi-linkedin"></i></Link>
                  </div>
                </div>
                <div className="cs_tean_info cs_radius_8 text-center">
                  <h3 className="cs_fs_24 text-capitalize mb-0"><Link to="/team/team-details" aria-label="Team details page link">{item.name}</Link></h3>
                  <p className="mb-0">{item.content}</p>
                </div>
              </div>
            </div>
            ))}

          </div>
          <div className="cs_team_shape_1 position-absolute"></div>
          <div className="cs_team_shape_2 position-absolute">
            <img src="/assets/img/team_shape_1.svg" alt="Shape" /> 
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default Team1;