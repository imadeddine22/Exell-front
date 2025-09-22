import React from 'react';
import { Link } from 'react-router-dom';

const Blog3 = () => {

    const chooseContent = [
        {
          img:'/assets/img/post_6.jpg',
          title:"Lancement de la campagne Vitatine",
          content:"Pharmaceutique"
        },
        {
          img:'/assets/img/post_7.jpg',
          title:"Formation médicale continue avec Excellencias Academy",
          content:"Éducation & Santé"
        },
        {
          img:'/assets/img/post_8.jpg',
          title:"Excellencias HealthGate facilite le tourisme médical",
          content:"Tourisme médical"
        },
    ]; 

    return (
<section className="cs_gray_bg_1 position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center">
          <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_center cs_mb_20 wow fadeInDown">
            <span className="cs_shape_left"></span>Nos Dernières Actualités<span className="cs_shape_right"></span>
          </p>
          <h2 className="cs_fs_48 mb-0 wow fadeInUp">Découvrez nos Articles et Nouvelles Récentes</h2>
        </div>
        <div className="cs_height_60 cs_height_lg_50"></div>
        <div className="row cs_row_gap_30 cs_gap_y_30 position-relative z-1">
        {chooseContent.map((item, i) => (
          <div key={i} className="col-lg-4 wow fadeInLeft">
            <article className="cs_post cs_style_1 cs_type_1">
              <Link to="/blog/blog-details" aria-label="Cliquez pour lire l’article" className="cs_post_thumbnail position-relative">
              <img src={item.img} alt="Miniature article" />
              <span className="cs_posted_by cs_blue_bg cs_white_color cs_radius_10 text-center position-absolute">
              <span className="cs_fs_24 cs_bold">17</span>
              <span className="cs_fs_12">Fév</span>
              </span>
              </Link>
              <div className="cs_post_content cs_white_bg">
                <div className="cs_post_meta_wrapper cs_fs_14 cs_medium cs_mb_15">
                  <div className="cs_post_meta">
                    <span className="cs_blue_color">📌</span>
                    <span>Par Admin</span>
                  </div>
                  <div className="cs_post_meta">
                    <span className="cs_blue_color">🏷️</span>
                    <span>{item.content}</span>
                  </div>
                </div>
                <h3 className="cs_post_title cs_fs_22 cs_mb_11">
                  <Link to="/blog/blog-details" aria-label="Cliquez pour lire l’article">{item.title}</Link>
                </h3>
                <Link to="/blog/blog-details" aria-label="Cliquez pour lire l’article" className="cs_post_btn cs_medium">
                  <span>Lire plus</span>
                  <span>
                    <svg width="23" height="23" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.4327 4.39844C13.5851 4.24606 13.7917 4.16046 14.0072 4.16046C14.2227 4.16046 14.4294 4.24606 14.5817 4.39844L21.476 11.2927C21.6284 11.4451 21.714 11.6518 21.714 11.8673C21.714 12.0827 21.6284 12.2894 21.476 12.4418L14.5817 19.3361C14.4294 19.4884 14.2227 19.574 14.0072 19.574C13.7917 19.574 13.5851 19.4884 13.4327 19.3361C13.2803 19.1837 13.1947 18.977 13.1947 18.7615C13.1947 18.5461 13.2803 18.3394 13.4327 18.187L19.7524 11.8673L13.4327 5.54749C13.2803 5.39511 13.1947 5.18845 13.1947 4.97296C13.1947 4.75747 13.2803 4.55081 13.4327 4.39844Z" fill="currentColor"/>
                      <path d="M21.7136 11.8671C21.7135 12.0824 21.6279 12.2889 21.4756 12.4411C21.3234 12.5934 21.1169 12.679 20.9016 12.6791L1.40148 12.6791C1.29244 12.683 1.18373 12.6648 1.08186 12.6257C0.979982 12.5867 0.887021 12.5275 0.808518 12.4517C0.730015 12.3759 0.667579 12.2851 0.624937 12.1847C0.582294 12.0842 0.560317 11.9762 0.560317 11.8671C0.560318 11.758 0.582295 11.65 0.624938 11.5496C0.667581 11.4491 0.730016 11.3583 0.808518 11.2825C0.887021 11.2068 0.979983 11.1476 1.08186 11.1085C1.18373 11.0694 1.29244 11.0513 1.40148 11.0551L20.9008 11.0544C21.0076 11.0543 21.1133 11.0753 21.2119 11.1161C21.3105 11.157 21.4001 11.2168 21.4756 11.2923C21.5511 11.3678 21.611 11.4574 21.6518 11.556C21.6926 11.6547 21.7136 11.7604 21.7136 11.8671Z" fill="currentColor"/>
                    </svg>
                  </span>
                </Link>
              </div>
            </article>
          </div>
          ))}
        </div>
        <div className="cs_blog_shape_1 position-absolute">
          <img src="/assets/img/blog_shape_1.svg" alt="Shape image" />
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default Blog3;
