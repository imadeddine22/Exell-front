import React, { useEffect, useRef, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import VideoModal from '../VideoModal/VideoModal';



const Faq1 = () => {

  const faqContent = [
    {
      title:'Quels services propose Excellencias Corporate ?',
      content:'Nous offrons une communication 360° : stratégie, branding, social media, campagnes publicitaires, production audiovisuelle, événements et formation (Academy).'
    },
    {
      title:'Travaillez-vous uniquement avec le secteur santé ?',
      content:'Non. Notre expertise couvre aussi cosmétique & beauté, éducation, services, immobilier et startups — en plus de la santé/pharma.'
    },
    {
      title:'Comment se déroule un projet type ?',
      content:'4 étapes : 1) Découverte & diagnostic, 2) Stratégie & planning, 3) Création & production, 4) Déploiement, reporting & optimisation.'
    },
    {
      title:'Gérez-vous les réseaux sociaux (community management) ?',
      content:'Oui : ligne éditoriale, création visuelle/vidéo, planning de publication, modération, sponsorisation (Meta, TikTok, YouTube) et rapports de performance.'
    },
    {
      title:'Proposez-vous des services pour les marques cosmétiques ?',
      content:'Oui, nous accompagnons les lancements, campagnes d’acquisition, habillage des points de vente et influence marketing.'
    },
    {
      title:'Réalisez-vous des vidéos et contenus pédagogiques ?',
      content:'Oui via Excellencias Studio : spots produits, capsules éducatives, témoignages, aftermovies, podcasts et formats courts pour les réseaux.'
    },
    {
      title:'Quels sont les délais moyens de réalisation ?',
      content:'Branding : 2–4 semaines. Campagne digitale : 3–6 semaines pour le lancement. Activations terrain : 2–8 semaines selon l’ampleur.'
    },
    {
      title:'Comment calculez-vous les tarifs ?',
      content:'Devis personnalisé selon objectifs, livrables et durée. Forfaits mensuels ou au projet, avec transparence et indicateurs de résultats.'
    },
    {
      title:'Intervenez-vous partout en Algérie ?',
      content:'Oui, nous opérons à l’échelle nationale et développons des partenariats internationaux si nécessaire.'
    },
    {
      title:'Comment démarrer avec vous ?',
      content:'Contactez-nous via le formulaire : brief, objectifs et budget indicatif. Nous programmons un call découverte puis envoyons plan d’action + devis.'
    },
  ];

  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = index => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };

  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

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
    <section className="position-relative overflow-hidden">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_gap_y_30 position-relative z-1">
          <div className="col-lg-5">
            <div className="cs_faq_header">
              <div className="cs_section_heading cs_style_1">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
                  FAQ<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 mb-0 wow fadeInUp">Questions fréquentes</h2>
              </div>
              <div className="cs_height_51 cs_height_lg_50"></div>
              <div className="cs_video_block cs_style_2 cs_center cs_bg_filed cs_radius_20 position-relative wow fadeInDown" data-background="/assets/img/video_bg_3.jpg">
                <a onClick={handelClick} aria-label="Play video button" className="cs_player_btn cs_video_open cs_center cs_radius_50">
                  <span className="cs_player_btn_icon cs_center cs_blue_color"><span></span></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="cs_accordians">
              {faqContent.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 ${index === openItemIndex ? "active" : "" }`} >
                  <div onClick={() => handleItemClick(index)} className="cs_accordian_head position-relative">
                    <h2 className="cs_accordian_title cs_fs_20 cs_semibold mb-0">{item.title}</h2>
                    <span className="cs_accordian_toggler cs_heading_color position-absolute"><i className="bi bi-chevron-double-right"></i></span>
                  </div>
                  <div ref={accordionContentRef} className="cs_accordian_body">
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="cs_faq_shape_1 position-absolute">
          <img src="/assets/img/faq_shape_1.svg" alt="Shape" />
        </div>
        <div className="cs_faq_shape_2 position-absolute">
          <img src="/assets/img/faq_shape_2.svg" alt="Shape" />
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>

      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}        
      ></VideoModal>

    </section>
  );
};

export default Faq1;
