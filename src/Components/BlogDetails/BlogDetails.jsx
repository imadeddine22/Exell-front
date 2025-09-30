import React from "react";
import { useLocation } from "react-router-dom";

const BlogDetails = () => {
  const location = useLocation();
  const blog = location.state?.blog;

  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_row_gap_30 cs_gap_y_60">
          {/* ===== Sidebar يبقى ثابت ===== */}
          <aside className="col-xl-4 col-lg-5">
            <div className="cs_sidebar cs_style_1 cs_type_1">
              {/* Recherche */}
              <div className="cs_sidebar_widget cs_gray_bg_1 cs_radius_10 wow fadeInDown">
                <h3 className="cs_sidebar_widget_title cs_fs_22 cs_mb_22">
                  Recherche
                </h3>
                <form className="cs_search cs_white_bg position-relative">
                  <input type="text" placeholder="Rechercher..." />
                  <button className="cs_search_button cs_center cs_blue_bg cs_white_color">
                    <i className="bi bi-search"></i>
                  </button>
                </form>
              </div>
              {/* Catégories */}
              <div className="cs_sidebar_widget cs_gray_bg_1 cs_radius_10 wow fadeInDown">
                <h3 className="cs_sidebar_widget_title cs_fs_22 cs_mb_22">
                  Catégories
                </h3>
                <ul className="cs_service_category_list cs_medium cs_mp_0">
                  <li>
                    <a href="#">
                      <span>Marketing digital</span>
                      <span>(7)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Communication santé</span>
                      <span>(4)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Emailing & CRM</span>
                      <span>(5)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* ===== Contenu principal ===== */}
          <div className="col-xl-8 col-lg-7">
            <div className="cs_post_details">
              {/* صورة المقال */}
              <img
                src={blog?.banner || "/assets/img/post_banner.jpg"}
                alt={blog?.title || "Bannière article"}
                className="wow fadeInRight"
              />

              {/* Meta */}
              <div className="cs_post_meta_wrapper cs_mb_4">
                <div className="cs_post_meta">
                  <span className="cs_blue_color">
                    <i className="bi bi-calendar-check-fill"></i>
                  </span>
                  <span className="cs_heading_color">
                    {blog?.date?.day} {blog?.date?.month} 2024
                  </span>
                </div>
                <div className="cs_post_meta">
                  <span className="cs_blue_color">
                    <i className="bi bi-person-fill"></i>
                  </span>
                  <span className="cs_heading_color">{blog?.author || "Admin"}</span>
                </div>
              </div>

              {/* Titre */}
              <h2>{blog?.title || "Excellencias Corporate : communication santé"}</h2>

              {/* Contenu */}
              <p>
                {blog?.content
                  ? `Cet article traite du domaine : ${blog.content}.`
                  : "Excellencias Corporate accompagne les laboratoires et cliniques en Algérie..."}
              </p>
              <p>
                Grâce à une stratégie alignée sur les objectifs médicaux et business,
                nous combinons contenu scientifique, création visuelle et ciblage média
                pour générer des résultats mesurables.
              </p>

              {/* Tags ثابتين */}
              <div className="cs_post_tags wow fadeInUp">
                <h3 className="cs_fs_16 cs_semibold mb-0">Tags</h3>
                <div className="cs_tags_links cs_fs_14 cs_semibold cs_heading_color">
                  <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">
                    Santé
                  </a>
                  <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">
                    Pharma
                  </a>
                  <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">
                    Marketing digital
                  </a>
                </div>
              </div>
            </div>

            {/* ===== Comments يبقوا ثابتين ===== */}
            <div className="cs_comments_area">
              <h2 className="cs_fs_30 cs_mb_25">03 Commentaires</h2>
              <ul className="cs_comment_list cs_heading_font cs_mp_0">
                <li className="cs_comment_body position-relative">
                  <div className="cs_comment_thumbnail cs_radius_15">
                    <img src="/assets/img/client_1.jpg" alt="Image client" />
                  </div>
                  <div className="cs_comment_info">
                    <h3 className="cs_fs_20 cs_semibold cs_mb_14">Daniel Adam</h3>
                    <p>Excellente approche 360° !</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default BlogDetails;
