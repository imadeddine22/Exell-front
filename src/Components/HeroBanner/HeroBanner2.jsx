import React, { useEffect, useState } from 'react';
import VideoModal from '../VideoModal/VideoModal';
import { Link } from 'react-router-dom';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const HeroBanner2 = () => {

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [iframeSrc, setIframeSrc] = useState('about:blank');
  const [toggle, setToggle] = useState(false);

  const handelClick = () => {
    setIframeSrc("https://www.youtube.com/embed/HC-tgFdIcB0");
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };   

  return (
   <section
  className="cs_hero cs_style_2 cs_bg_filled position-relative"
  data-background="/assets/img/hero_bg_2.jpg"
  style={{
    backgroundImage: "url('/assets/img/hero_bg_2.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#14cfc2ff' // لون احتياطي إذا ما تحملتش الصورة
  }}
>

      <div className="container-fluid">
        <div className="cs_hero_content">
          
          {/* Image principale */}
          <div className="cs_hero_thumbnail">
            <img src="/assets/img/hero_img_2.png" alt="Hero Image" />
            <span className="cs_reviewbox position-absolute wow fadeInLeft">
              <img src="/assets/img/5-starbox.png" alt="Success story" />
            </span>
          </div>

          {/* Texte */}
          <div className="cs_hero_text_wrapper position-relative z-1">
            <p className="cs_hero_subtitle cs_white_color cs_medium cs_mb_12 wow fadeInDown">
              PRIX DU MEILLEUR SERVICE STARTUP DE L’ANNÉE
            </p>
            <h1 className="cs_hero_title cs_white_color cs_extra_bold cs_mb_28 wow fadeInUp">
              Exellencias Corporate <br />
             Stratégies créatives, résultats concrets
            </h1>
            <p 
              className="cs_white_color cs_mb_46 wow fadeInUp" 
              data-wow-delay="200ms"
            >
              Notre expérience avec Excellencias Corporate a été exceptionnelle. 
              Nous avons compris vos objectifs et livré une stratégie marketing complète 
              qui a renforcé la visibilité et l’engagement de votre marque. 
              Une équipe talentueuse, professionnelle et à l’écoute.
            </p>

            <div className="cs_about_btn_group">
              <Link 
                to="/service" 
                aria-label="Visiter la page services" 
                className="cs_btn cs_style_1 cs_fs_14 cs_semibold text-uppercase wow fadeInLeft"
              >
                <span>Voir tous les services</span>
              </Link>
              <a 
                onClick={handelClick} 
                aria-label="Bouton lecture vidéo" 
                className="cs_reel_btn cs_video_open cs_fs_14 cs_semibold wow fadeInRight"
              >
                <span><i className="bi bi-play-fill"></i></span>
                <span>Voir la vidéo</span>
              </a>
            </div>
          </div>

          {/* Bloc graphique */}
          <div className="cs_marketing_graph_content_wrapper cs_white_bg cs_radius_10 position-absolute wow zoomIn">
            <img src="/assets/img/sales_trends.png" alt="Rapport de ventes" />
          </div>
        </div>

        {/* Décor (fusée) */}
        <div className="cs_hero_shape_1 position-absolute">
          <img src="/assets/img/rocket_1.png" alt="Rocket image" />
        </div>
      </div>

      {/* Modal vidéo */}
      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}        
      ></VideoModal>
    </section>
  );
};

export default HeroBanner2;
