import React from 'react';
import Slider from 'react-slick';


const ProjectDetails = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,        
    responsive: [
      { breakpoint: 1399, settings: { slidesToShow: 3 } },
      { breakpoint: 1199, settings: { slidesToShow: 3 } },
      { breakpoint: 575,  settings: { slidesToShow: 1 } }
    ]
  };

  const testimonialContent = [
    { img: '/assets/img/casestudy_2.jpg' },
    { img: '/assets/img/casestudy_3.jpg' },
    { img: '/assets/img/casestudy_4.jpg' },
    { img: '/assets/img/casestudy_2.jpg' },
  ];

  return (
    <div>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_casestudy_setails">
          <div className="cs_casestudy_thumbnail cs_radius_20 position-relative">
            <img src="/assets/img/casestudy_1.jpg" alt="Bannière étude de cas" />
            <div className="cs_project_infobox cs_white_bg cs_radius_20 wow fadeInLeft">
              <h3 className="cs_fs_24 cs_semibold cs_mb_30">Informations du projet</h3>
              <ul className="cs_project_info_list cs_mp_0">
                <li>
                  <span className="cs_project_info_icon cs_center cs_blue_color cs_radius_50 position-relative">
                    <i className="bi bi-person-fill"></i>
                  </span>
                  <div className="cs_project_info_text">
                    <span>Client :</span>
                    <h3 className="cs_fs_18 cs_semibold mb-0">Frater Razes Pharma</h3>
                  </div>
                </li>
                <li>
                  <span className="cs_project_info_icon cs_center cs_blue_color cs_radius_50 position-relative">
                    <i className="bi bi-tag-fill"></i>
                  </span>
                  <div className="cs_project_info_text">
                    <span>Catégorie :</span>
                    <h3 className="cs_fs_18 cs_semibold mb-0">Campagne digitale, SEO santé</h3>
                  </div>
                </li>
                <li>
                  <span className="cs_project_info_icon cs_center cs_blue_color cs_radius_50 position-relative">
                    <i className="bi bi-calendar-check-fill"></i>
                  </span>
                  <div className="cs_project_info_text">
                    <span>Date :</span>
                    <h3 className="cs_fs_18 cs_semibold mb-0">25 mars 2024</h3>
                  </div>
                </li>
                <li>
                  <span className="cs_project_info_icon cs_center cs_blue_color cs_radius_50 position-relative">
                    <i className="bi bi-geo-alt-fill"></i>
                  </span>
                  <div className="cs_project_info_text">
                    <span>Adresse :</span>
                    <h3 className="cs_fs_18 cs_semibold mb-0">Hydra, Alger, Algérie</h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <h2>Développement d’un site web</h2>
          <p>
            Site web dédié à l’éducation thérapeutique et au suivi des campagnes en officine.
            Notre équipe a conçu l’architecture de contenu, l’UI/UX et intégré des outils d’analytics
            pour mesurer l’engagement (temps de navigation, fiches produits consultées, demandes d’échantillons).
          </p>
          <p>
            Le projet a inclus la création de contenus validés médicalement, l’optimisation des performances,
            la mise en conformité (RGPD / local) et un déploiement continu. Des tableaux de bord ont été livrés
            pour suivre les KPI (portée, conversions, points de contact terrain).
          </p>

          <h2>Le défi du projet</h2>
          <p>
            Aligner l’exigence scientifique avec une expérience simple et rapide, assurer la compatibilité
            multi-appareils et maintenir des temps de chargement faibles en contexte réseau limité. Nous avons
            adopté une approche « content-first », des templates modulaires et un suivi précis des événements clés
            pour piloter l’itération.
          </p>
        </div>

        <div className="cs_another_projects cs_slider cs_style_1 cs_slider_gap_30 wow fadeInUp">
          <div
            className="cs_slider_container"
            data-autoplay="0"
            data-loop="1"
            data-speed="600"
            data-center="0"
            data-variable-width="0"
            data-xs-slides="1"
            data-sm-slides="1"
            data-md-slides="2"
            data-lg-slides="3"
            data-add-slides="3"
            data-slides-per-view="responsive"
          >
            <div className="cs_slider_wrapper cs_slider_gap_301">
              <Slider {...settings}>
                {testimonialContent.map((item, i) => (
                  <div key={i} className="cs_slide">
                    <a href="#" aria-label="Voir le projet" className="cs_project_card cs_radius_20">
                      <img src={item.img} alt="Image du projet" />
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="cs_slider_footer wow fadeInDown">
            <div className="cs_slider_arrows cs_style_2">
              <div className="cs_left_arrow cs_center cs_radius_50 slick-arrow">
                <span className="cs_slider_arrow_icon cs_center cs_heading_color cs_radius_50">
                  <i className="bi bi-arrow-left"></i>
                </span>
                <p className="cs_semibold mb-0">Projet précédent</p>
              </div>
              <div className="cs_right_arrow cs_center cs_radius_50 slick-arrow">
                <p className="cs_semibold mb-0">Projet suivant</p>
                <span className="cs_slider_arrow_icon cs_center cs_heading_color cs_radius_50">
                  <i className="bi bi-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </div>
  );
};

export default ProjectDetails;
