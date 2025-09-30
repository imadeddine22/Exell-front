import React from "react";
import { Link } from "react-router-dom";

const Blog4 = () => {
  const chooseContent = [
    {
      img: "/assets/img/post_6.jpg",
      title: "Campagne Vitatine : habillage national des pharmacies",
      content: "Pharmaceutique",
      author: "Admin",
      date: { day: "17", month: "Fév" },
      banner: "/assets/img/post_banner.jpg",
    },
    {
      img: "/assets/img/post_7.jpg",
      title:
        "Excellencias Academy : formation continue pour les professionnels de santé",
      content: "Éducation & Santé",
      author: "Admin",
      date: { day: "20", month: "Mars" },
      banner: "/assets/img/post_banner.jpg",
    },
    {
      img: "/assets/img/post_8.jpg",
      title: "Excellencias Studio : étude de cas en production audiovisuelle",
      content: "Audiovisuel",
      author: "Admin",
      date: { day: "12", month: "Avr" },
      banner: "/assets/img/post_banner.jpg",
    },
    {
      img: "/assets/img/post_9.jpg",
      title: "Health News : nos dernières actualités en communication santé",
      content: "Actualités",
      author: "Admin",
      date: { day: "05", month: "Mai" },
      banner: "/assets/img/post_banner.jpg",
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
                <Link
                  to="/blog/blog-details"
                  state={{ blog: item }} // نبعث البيانات هنا
                  aria-label="Cliquez pour lire l’article"
                  className="cs_post_thumbnail position-relative"
                >
                  <img src={item.img} alt={item.title} />
                  <span className="cs_posted_by cs_blue_bg cs_white_color cs_radius_10 text-center position-absolute">
                    <span className="cs_fs_24 cs_bold">{item.date.day}</span>
                    <span className="cs_fs_12">{item.date.month}</span>
                  </span>
                </Link>
                <div className="cs_post_content cs_white_bg">
                  <h3 className="cs_post_title cs_fs_22 cs_mb_11">
                    <Link
                      to="/blog/blog-details"
                      state={{ blog: item }}
                      aria-label="Cliquez pour lire l’article"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="cs_medium mb-0">{item.content}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default Blog4;
