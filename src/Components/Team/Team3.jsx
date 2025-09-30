import React from 'react';
import { Link } from 'react-router-dom';

const Team3 = () => {

    const teamContent = [
        {img:'/assets/img/team_5.jpg', name:'Dr.KHALED Salah Eddine', content:'Fondateur & Directeur Général',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_6.jpg', name:'DJEBBARI doha', content:'Vice-Directrice & Project Manager',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_7.jpg', name:'MOALLEM Naoufel', content:'Graphic Designer',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_9.jpg', name:'BEGHDAD Anfal', content:'Chargée de RH/Finance',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_10.jpg', name:'AMARI Hibet Allah Roumissa', content:'Community manager et  créatrice de contenu ',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_11.jpg', name:'BENBACHIR Aissa Aymen', content:'Marketing developper',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_11.jpg', name:'BOURAHLA Hichem', content:'Chargé de Logistique',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_11.jpg', name:'CHAFAA Fatah ', content:'Vidéographe',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_11.jpg', name:'LAMMARI Ilhem', content:'chargée de Relations Extérieurs',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_11.jpg', name:'MAACHE Fatima Zohra', content:'Responsable marketing Digital',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_11.jpg', name:'ZERARI Walid', content:'Graphic Designer',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_11.jpg', name:'LAMMALI Sarah', content:'commerciale',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_11.jpg', name:'IHADDADENE WISSAM', content:'Architecte/UGC',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_11.jpg', name:'LOUNES Mohamed Abdelhadi', content:'Community manager',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team_11.jpg', name:'BOUZEGHRANE Imad Eddine', content:'web developer',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
      ];

    return (
        <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_30">

          {teamContent.map((item, i) => (
          <div key={i} className="col-lg-4 wow fadeInDown">
            <div className="cs_team cs_style_2 cs_white_bg cs_radius_20 position-relative">
              <Link to="/team/team-details" aria-label="Click to visit team details" className="cs_team_thumbnail cs_radius_20">
              <img src={item.img} alt="Team image" />
              </Link>
              <div className="cs_social_links cs_radius_8 position-absolute">
                <Link to={item.instagram} aria-label="Social button" className="cs_social_link cs_center cs_radius_50">
                <i className="bi bi-instagram"></i>
                </Link>
                <Link to={item.facebook} aria-label="Social button" className="cs_social_link cs_center cs_radius_50">
                <i className="bi bi-facebook"></i>
                </Link>
                <Link to={item.twitter} aria-label="Social button" className="cs_social_link cs_center cs_radius_50">
                <i className="bi bi-twitter-x"></i>
                </Link>
                <Link to={item.linkedin} aria-label="Social button" className="cs_social_link cs_center cs_radius_50">
                <i className="bi bi-linkedin"></i>
                </Link>
                <a href="#" aria-label="Social button" className="cs_social_link cs_share cs_center cs_radius_50">
                <i className="bi bi-share"></i>
                </a>
              </div>
              <div className="cs_tean_info">
                <h3 className="cs_fs_22 cs_semibold text-capitalize cs_mb_2">
                  <Link to="/team/team-details" aria-label="Click to visit team details">{item.name}</Link>
                </h3>
                <p className="mb-0">{item.content}</p>
              </div>
            </div>
          </div>
        ))}

          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default Team3;