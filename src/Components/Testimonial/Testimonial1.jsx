import React, { useRef } from 'react';
import Slider from 'react-slick';

const Testimonial1 = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,        
    responsive: [
      { breakpoint: 1399, settings: { slidesToShow: 4 } },
      { breakpoint: 1199, settings: { slidesToShow: 3 } },
      { breakpoint: 575,  settings: { slidesToShow: 1 } }
    ]
  };  

  const sliderRef = useRef(null);

  const next = () => sliderRef.current.slickNext();
  const previous = () => sliderRef.current.slickPrev();

  const testimonialContent = [
    {
      img:'/assets/img/avatar_1.jpg',
      subtitle:'Frater Razes Pharma',
      title:'Dr A. Benali',
      content:'Grâce à l’équipe Excellencias, nous avons lancé une campagne digitale nationale performante. Professionnalisme, créativité et résultats mesurables.'
    },
    {
      img:'/assets/img/avatar_2.jpg',
      subtitle:'Clinique El Azhar',
      title:'Pr S. Khellaf',
      content:'Accompagnement complet en communication médicale et organisation d’événements scientifiques. Leur maîtrise du secteur santé fait la différence.'
    },
    {
      img:'/assets/img/avatar_3.jpg',
      subtitle:'Moben Pharma',
      title:'Mme L. Djouadi',
      content:'Habillage de pharmacies, animation terrain et stratégie digitale impeccables. Excellencias a boosté notre visibilité et la confiance des patients.'
    },
    {
      img:'/assets/img/avatar_4.jpg',
      subtitle:'Université de Médecine – Alger',
      title:'Pr H. Touati',
      content:'Excellencias Academy a professionnalisé nos formations et conférences. Équipe réactive, à l’écoute et force de proposition.'
    },
    {
      img:'/assets/img/avatar_1.jpg',
      subtitle:'Theraplos',
      title:'Dr M. Rahmani',
      content:'Coordination 360° claire et efficace : contenus pédagogiques, audiovisuel et ciblage média. Des KPI suivis et une exécution rigoureuse.'
    },
  ];

  return (
<section className="cs_slider cs_style_1 cs_testimonial_slider cs_slider_gap_30 position-relative">
  <div className="cs_height_120 cs_height_lg_80"></div>
  <div className="container">
    <div className="cs_section_heading cs_style_1 cs_type_1">
      <div className="cs_section_heading_left">
        <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
          Témoignages<span className="cs_shape_right"></span>
        </p>
        <h2 className="cs_fs_48 mb-0 wow fadeInUp">Avis des clients</h2>
      </div>
      <div className="cs_section_heading_right wow fadeInRight">
        <div className="cs_slider_arrows cs_style_1">
          <div onClick={previous} className="cs_left_arrow cs_center cs_radius_50 slick-arrow">
            <img src="/assets/img/icons/arrow_right.svg" alt="Flèche gauche" />
          </div>
          <div onClick={next} className="cs_right_arrow cs_center cs_radius_50 slick-arrow">
            <img src="/assets/img/icons/arrow_right.svg" alt="Flèche droite" />
          </div>
        </div>
      </div>
    </div>
    <div className="cs_height_60 cs_height_lg_50"></div>
    <div className="cs_full_screen_right cs_variable_width_wrap position-relative z-1">
      <div className="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="700" data-center="0" data-variable-width="1" data-slides-per-view="1">
        <div className="cs_slider_wrapper cs_slider_gap_301">
          <Slider ref={sliderRef} {...settings}>
            {testimonialContent.map((item, i) => (
              <div key={i} className="cs_slide">
                <div className="cs_testimonial cs_style_1">
                  <div className="cs_testimonial_header">
                    <div className="cs_avatar cs_style_1">
                      <div className="cs_avatar_icon cs_radius_50">
                        <img src={item.img} alt="Avatar" />
                      </div>
                      <div className="cs_avatar_info">
                        <h3 className="cs_fs_20 cs_medium mb-0">{item.title}</h3>
                        <p className="mb-0">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="cs_testimonial_content cs_gray_bg_1 cs_radius_4 position-relative">
                    <blockquote>{item.content}</blockquote>
                    <div className="cs_rating" data-rating="4.5">
                      <div className="cs_rating_percentage"></div>
                    </div>
                    <span className="cs_quote_icon position-absolute">
                      <img src="/assets/img/icons/quote_1.svg" alt="Icône de citation" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    <div className="cs_testimonial_shape_1 position-absolute">
      <img src="/assets/img/color_glow.svg" alt="Forme décorative" />
    </div>
    <div className="cs_testimonial_pill_icon position-absolute"></div>
  </div>
  <div className="cs_height_120 cs_height_lg_80"></div>
</section>
  );
};

export default Testimonial1;
