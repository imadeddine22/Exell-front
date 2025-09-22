import React from 'react';
import { Link } from 'react-router-dom';

const Blog4 = () => {

  const chooseContent = [
    {
      img:'/assets/img/post_6.jpg',
      title:'Campagne Vitatine : habillage national des pharmacies',
      content:'Pharmaceutique'
    },
    {
      img:'/assets/img/post_7.jpg',
      title:'Excellencias Academy : formation continue pour les professionnels de santé',
      content:'Éducation & Santé'
    },
    {
      img:'/assets/img/post_8.jpg',
      title:'Excellencias Studio : étude de cas en production audiovisuelle',
      content:'Audiovisuel'
    },
    {
      img:'/assets/img/post_9.jpg',
      title:'Health News : nos dernières actualités en communication santé',
      content:'Actualités'
    },
    {
      img:'/assets/img/post_10.jpg',
      title:'SEO & Analytics pour les laboratoires : visibilité et performance',
      content:'Marketing digital'
    },
    {
      img:'/assets/img/post_11.jpg',
      title:'HealthGate : parcours patient et tourisme médical',
      content:'Tourisme médical'
    },
  ];

  return (
<section className="cs_gray_bg_1 position-relative">
  <div className="cs_height_120 cs_height_lg_80"></div>
  <div className="container">
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
                  <span className="cs_blue_color">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.5442 5.19275C14.5442 7.69093 12.4996 9.7355 10.0014 9.7355C7.50329 9.7355 5.45872 7.69093 5.45872 5.19275C5.45872 2.69457 7.50326 0.65 10.0014 0.65C12.4996 0.65 14.5442 2.69458 14.5442 5.19275Z" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M18.265 14.6706C18.1058 14.9458 17.9247 15.2073 17.7176 15.4766L17.7174 15.4765L17.7095 15.4873C17.421 15.8788 17.0852 16.2373 16.7301 16.5924C16.4332 16.8892 16.0939 17.186 15.7574 17.4385C14.0801 18.6911 12.0628 19.3499 9.97879 19.3499C7.89901 19.3499 5.88571 18.6938 4.21041 17.4461C3.84652 17.1504 3.51432 16.8792 3.22751 16.5924L3.22054 16.5854L3.21337 16.5787C2.85728 16.2436 2.54303 15.8877 2.2481 15.4874L2.24812 15.4873L2.24478 15.4829C2.06257 15.24 1.87385 14.9756 1.71984 14.7169C1.83683 14.4559 1.98519 14.1847 2.14586 13.9526L2.14597 13.9527L2.15349 13.9413C3.07049 12.5556 4.5377 11.6388 6.16707 11.4148L6.18665 11.4121L6.20603 11.4082C6.23151 11.4031 6.29559 11.4117 6.34612 11.4496L6.34611 11.4496L6.35012 11.4525C7.41715 12.2401 8.68694 12.6453 10.0014 12.6453C11.3159 12.6453 12.5857 12.2401 13.6528 11.4525L13.6528 11.4525L13.6568 11.4496C13.6722 11.438 13.741 11.408 13.8498 11.4167C15.4695 11.6435 16.9128 12.5568 17.8531 13.9468L17.853 13.9469L17.857 13.9526C18.0172 14.1839 18.1563 14.4231 18.265 14.6706Z" stroke="currentColor" strokeWidth="1.3"/>
                    </svg>
                  </span>
                  <span>Par Admin</span>
                </div>
                <div className="cs_post_meta">
                  <span className="cs_blue_color">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_56_281)">
                        <path d="M8.05666 18.75H8.05504C7.46832 18.7495 6.91657 18.5207 6.50187 18.1052L0.660341 12.2553C-0.194072 11.3994 -0.194072 10.0065 0.660341 9.15058L8.53478 1.26102C9.3463 0.44792 10.426 0 11.575 0H16.5709C17.7824 0 18.7682 0.985546 18.7682 2.19726V7.17785C18.7682 8.32602 18.3208 9.40532 17.5084 10.2167L9.60951 18.1074C9.19455 18.5218 8.64306 18.75 8.05666 18.75ZM11.575 1.46484C10.8179 1.46484 10.1064 1.75998 9.57163 2.29579L1.69707 10.1853C1.41222 10.4708 1.41222 10.9349 1.69707 11.2203L7.53857 17.0702C7.6767 17.2086 7.86051 17.285 8.05619 17.2851H8.05677C8.1529 17.2854 8.24812 17.2666 8.33694 17.2299C8.42577 17.1931 8.50643 17.1391 8.57427 17.071L16.4732 9.18046C17.0086 8.6458 17.3034 7.93447 17.3034 7.17788V2.19726C17.3034 1.79341 16.9748 1.46484 16.5709 1.46484H11.575ZM13.458 7.43408C12.2465 7.43408 11.2608 6.44853 11.2608 5.23681C11.2608 4.0251 12.2465 3.03955 13.458 3.03955C14.6696 3.03955 15.6553 4.0251 15.6553 5.23681C15.6553 6.44853 14.6696 7.43408 13.458 7.43408ZM13.458 4.50439C13.0542 4.50439 12.7256 4.83296 12.7256 5.23681C12.7256 5.64067 13.0542 5.96924 13.458 5.96924C13.862 5.96924 14.1905 5.64067 14.1905 5.23681C14.1905 4.83296 13.862 4.50439 13.458 4.50439Z" fill="currentColor"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_56_2812">
                          <rect width="20" height="20" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
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
      <img src="/assets/img/blog_shape_1.svg" alt="Image décorative" />
    </div>
  </div>
  <div className="cs_height_120 cs_height_lg_80"></div>
</section>
  );
};

export default Blog4;
