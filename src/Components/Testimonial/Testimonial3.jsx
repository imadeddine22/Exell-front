import React, { useEffect, useRef } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Slider from 'react-slick';

const Testimonial3 = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,        
    responsive: [
      { breakpoint: 1399, settings: { slidesToShow: 1 } },
      { breakpoint: 1199, settings: { slidesToShow: 1 } },
      { breakpoint: 575,  settings: { slidesToShow: 1 } }
    ]
  };  

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const sliderRef = useRef(null);

  const next = () => { sliderRef.current.slickNext(); };
  const previous = () => { sliderRef.current.slickPrev(); };         

  const testimonialContent = [
    {
      content:
        "Excellencias Corporate a structuré notre communication santé de A à Z : stratégie, contenus pédagogiques et activation terrain. Des résultats concrets et une équipe toujours réactive."
    },
    {
      content:
        "Une coordination 360° exemplaire : branding, digital et production audiovisuelle alignés sur nos objectifs. Les indicateurs de performance ont progressé dès le premier mois."
    },
  ]; 

  return (
    <section className="cs_testimonial cs_style_3 cs_heading_bg cs_bg_filed" data-background="/assets/img/testimonial_bg_2.jpg">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_gap_y_40 align-items-end">
          <div className="col-lg-4 order-lg-2 wow fadeInDown">
            <div className="cs_testimonial_thumbnail position-relative">
              <img src="/assets/img/testimonial_img_2.jpg" alt="Image témoignage" />
            </div>
          </div>
          <div className="col-lg-8 order-lg-1">
            <div className="cs_section_heading cs_style_1">
              <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
                Témoignages<span className="cs_shape_right"></span>
              </p>
              <h2 className="cs_fs_48 cs_white_color cs_mb_46 wow fadeInUp">
                Ce que disent nos partenaires
              </h2>
              <hr/>
            </div>
            <div className="testimonial_slider_content cs_slider">
              <div className="cs_single_product_thumb">
                <Slider ref={sliderRef} {...settings}>
                  {testimonialContent.map((item, i) => (
                    <div key={i} className="cs_slide">
                      <div className="testimonial_content">
                        <span className="cs_quote_icon cs_accent_color cs_mb_21 d-inline-block">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 4V28L12 16V4H0Z" fill="currentColor"/>
                            <path d="M20 4V28L32 16V4H20Z" fill="currentColor"/>
                          </svg>
                        </span>
                        <blockquote className="cs_white_color cs_semibold">
                          {item.content}
                        </blockquote>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="testimonial_footer">
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
          </div>
        </div>
      </div> 
      <div className="cs_height_136 cs_height_lg_80"></div>
    </section>
  );
};

export default Testimonial3;
