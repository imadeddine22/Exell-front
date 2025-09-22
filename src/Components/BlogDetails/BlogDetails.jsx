import React from 'react';

const BlogDetails = () => {
    return (
        <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_60">
            <aside className="col-xl-4 col-lg-5">
              <div className="cs_sidebar cs_style_1 cs_type_1">
                <div className="cs_sidebar_widget cs_gray_bg_1 cs_radius_10 wow fadeInDown">
                  <h3 className="cs_sidebar_widget_title cs_fs_22 cs_mb_22">Recherche</h3>
                  <form action="#" className="cs_search cs_white_bg position-relative">
                    <input type="text" placeholder="Rechercher..." />
                    <button className="cs_search_button cs_center cs_blue_bg cs_white_color">
                      <i className="bi bi-search"></i>
                    </button>
                  </form>
                </div>
                <div className="cs_sidebar_widget cs_gray_bg_1 cs_radius_10 wow fadeInDown">
                  <h3 className="cs_sidebar_widget_title cs_fs_22 cs_mb_22">Catégories</h3>
                  <ul className="cs_service_category_list cs_medium cs_mp_0">
                    <li><a href="#"><span>Marketing digital</span><span> (7)</span></a></li>
                    <li><a href="#"><span>Communication santé</span><span> (4)</span></a></li>
                    <li><a href="#"><span>Emailing & CRM</span><span> (5)</span></a></li>
                    <li><a href="#"><span>Événementiel médical</span><span> (3)</span></a></li>
                    <li><a href="#"><span>SEO & Analytics</span><span> (6)</span></a></li>
                  </ul>
                </div>
                <div className="cs_sidebar_widget cs_gray_bg_1 cs_radius_10 wow fadeInDown">
                  <h3 className="cs_sidebar_widget_title cs_fs_22 cs_mb_22">Articles récents</h3>
                  <div className="cs_recent_post_wrapper">
                    <div className="cs_recent_post">
                      <a className="cs_recent_post_thumb cs_radius_10" href="#" aria-label="Cliquer pour lire l’article">
                        <img src="/assets/img/latest_post_1.jpg" alt="Image d’article récent" />
                      </a>
                      <div className="cs_recent_post_right">
                        <div className="cs_post_meta cs_fs_14 cs_blue_color cs_mb_9">
                          <i className="fa-solid fa-calendar-alt"></i>17 mars 2024
                        </div>
                        <h3 className="cs_fs_16 cs_bold mb-0">
                          <a href="#" aria-label="Cliquer pour lire l’article">Lancement de la campagne Bronchopan</a>
                        </h3>
                      </div>
                    </div>
                    <div className="cs_recent_post">
                      <a className="cs_recent_post_thumb cs_radius_10" href="#" aria-label="Cliquer pour lire l’article">
                        <img src="/assets/img/latest_post_2.jpg" alt="Image d’article récent" />
                      </a>
                      <div className="cs_recent_post_right">
                        <div className="cs_post_meta cs_fs_14 cs_blue_color cs_mb_9">
                          <i className="fa-solid fa-calendar-alt"></i>14 déc. 2024
                        </div>
                        <h3 className="cs_fs_16 cs_bold mb-0">
                          <a href="#" aria-label="Cliquer pour lire l’article">Excellencias Academy : nouvelle session</a>
                        </h3>
                      </div>
                    </div>
                    <div className="cs_recent_post">
                      <a className="cs_recent_post_thumb cs_radius_10" href="#" aria-label="Cliquer pour lire l’article">
                        <img src="/assets/img/latest_post_3.jpg" alt="Image d’article récent" />
                      </a>
                      <div className="cs_recent_post_right">
                        <div className="cs_post_meta cs_fs_14 cs_blue_color cs_mb_9">
                          <i className="fa-solid fa-calendar-alt"></i>27 févr. 2024
                        </div>
                        <h3 className="cs_fs_16 cs_bold mb-0">
                          <a href="#" aria-label="Cliquer pour lire l’article">HealthGate : accompagnement patient</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cs_sidebar_widget cs_gray_bg_1 cs_radius_10 wow fadeInDown">
                  <div className="cs_sidebar_tags">
                    <h3 className="cs_sidebar_widget_title cs_fs_22 cs_mb_22">Tags</h3>
                    <div className="cs_tags_links cs_fs_14 cs_heading_color">
                      <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">Marketing</a>
                      <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">Agence</a>
                      <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">SEO</a>
                      <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">Influence</a>
                      <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">Publicité</a>
                      <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">Branding</a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <div className="col-xl-8 col-lg-7">
              <div className="cs_post_details">
                <img src="/assets/img/post_banner.jpg" alt="Bannière de l’article" className="wow fadeInRight" />
                <div className="cs_post_meta_wrapper cs_mb_4">
                  <div className="cs_post_meta">
                    <span className="cs_blue_color"><i className="bi bi-calendar-check-fill"></i></span>
                    <span className="cs_heading_color">24 févr. 2024</span>
                  </div>
                  <div className="cs_post_meta">
                    <span className="cs_blue_color"><i className="bi bi-person-fill"></i></span>
                    <span className="cs_heading_color">Admin</span>
                  </div>
                </div>
                <h2>Excellencias Corporate : communication santé & impact terrain</h2>
                <p>
                  Excellencias Corporate accompagne les laboratoires et cliniques en Algérie avec des campagnes
                  de communication 360° : branding, marketing digital, production audiovisuelle et animation en
                  officine. Nos dispositifs terrain — habillage de pharmacies, équipes d’animation et contenus
                  pédagogiques — renforcent la visibilité et la confiance autour des produits de santé.
                </p>
                <p>
                  Grâce à une stratégie alignée sur les objectifs médicaux et business, nous combinons contenu
                  scientifique, création visuelle et ciblage média pour générer des résultats mesurables. De la
                  planification à l’exécution, nos équipes coordonnent chaque étape pour garantir conformité,
                  cohérence et performance.
                </p>
                <blockquote>
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="40" fill="#3F66EF"/>
                    <path d="M50.5 27.5C46.2812 27.5 43 30.8594 43 35C43 39.2188 46.2812 42.5 50.5 42.5C52.375 42.5 54.0938 41.7969 55.5 40.625V42.5C55.5 46.6406 52.0625 50 48 50H46.75C46.0469 50 45.5 50.625 45.5 51.25C45.5 51.9531 46.0469 52.5 46.75 52.5H48C53.4688 52.5 58 48.0469 58 42.5V35C58 30.8594 54.6406 27.5 50.5 27.5ZM50.5 40C47.6875 40 45.5 37.8125 45.5 35C45.5 32.2656 47.6875 30 50.5 30C53.2344 30 55.5 32.2656 55.5 35C55.5 37.8125 53.2344 40 50.5 40ZM30.5 27.5C26.2812 27.5 23 30.8594 23 35C23 39.2188 26.2812 42.5 30.5 42.5C32.375 42.5 34.0938 41.7969 35.5 40.625V42.5C35.5 46.6406 32.0625 50 28 50H26.75C26.0469 50 25.5 50.625 25.5 51.25C25.5 51.9531 26.0469 52.5 26.75 52.5H28C33.4688 52.5 38 48.0469 38 42.5V35C38 30.8594 34.6406 27.5 30.5 27.5ZM30.5 40C27.6875 40 25.5 37.8125 25.5 35C25.5 32.2656 27.6875 30 30.5 30C33.2344 30 35.5 32.2656 35.5 35Z" fill="white"/>
                  </svg>
                  Les campagnes santé réussies reposent sur une stratégie claire, des messages justes
                  et une exécution rigoureuse.
                  <strong> Équipe Excellencias</strong>
                  <small> Communication & Santé</small>
                </blockquote>
                <p>
                  Nous produisons des vidéos institutionnelles, capsules éducatives et podcasts via Excellencias Studio,
                  et nous renforçons la formation continue avec Excellencias Academy. Nos tableaux de bord Analytics
                  permettent de suivre la portée, l’engagement et la conversion, afin d’optimiser en continu.
                </p>
                <div className="row cs_row_gap_30 cs_gap_y_30 cs_mb_33">
                  <div className="col-md-6 wow fadeInLeft">
                    <img src="/assets/img/post_gallery_1.jpg" alt="Image de la galerie d’article" className="w-100 h-100 cs_radius_15" />
                  </div>
                  <div className="col-md-6 wow fadeInRight">
                    <img src="/assets/img/post_gallery_2.jpg" alt="Image de la galerie d’article" className="w-100 h-100 cs_radius_15" />
                  </div>
                </div>
                <p>
                  Nos dispositifs en officine — PLV, animations, QR codes d’information — créent un parcours
                  cohérent entre présence physique et digitale. Cette approche 360° valorise la marque, rassure
                  le patient et soutient les objectifs commerciaux de nos partenaires.
                </p>
                <p>
                  Excellencias Corporate s’engage à fournir des solutions sur-mesure, conformes aux exigences
                  du secteur, tout en restant créatives et performantes.
                </p>
                <div className="cs_post_tags wow fadeInUp">
                  <h3 className="cs_fs_16 cs_semibold mb-0">Tags</h3>
                  <div className="cs_tags_links cs_fs_14 cs_semibold cs_heading_color">
                    <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">Santé</a>
                    <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">Pharma</a>
                    <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">Marketing digital</a>
                    <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">Audiovisuel</a>
                  </div>
                </div>
              </div>
              <div className="cs_height_80 cs_height_lg_60"></div>
              <div className="cs_author_card cs_radius_15 wow fadeInDown">
                <div className="cs_author_thumbnail cs_radius_15">
                  <img src="/assets/img/post_author.jpg" alt="Image de l’auteur" />
                </div>
                <div className="cs_author_info">
                  <h3 className="cs_fs_24 cs_semibold cs_mb_2">Équipe Rédaction Excellencias</h3>
                  <p className="cs_author_status cs_blue_color">Rédaction</p>
                  <p className="cs_author_desc mb-0">
                    Contenus spécialisés en communication santé, campagnes digitales et événements médicaux.
                    Retours d’expérience et bonnes pratiques pour optimiser vos projets.
                  </p>
                </div>
              </div>
              <div className="cs_height_70 cs_height_lg_60"></div>
              <div className="cs_comments_area">
                <h2 className="cs_fs_30 cs_mb_25">03 Commentaires</h2>
                <ul className="cs_comment_list cs_heading_font cs_mp_0">
                  <li className="cs_comment_body position-relative">
                    <div className="cs_comment_thumbnail cs_radius_15">
                      <img src="/assets/img/client_1.jpg" alt="Image client" />
                    </div>
                    <div className="cs_comment_info">
                      <p className="cs_fs_14 cs_medium mb-0">15 juin 2024</p>
                      <h3 className="cs_fs_20 cs_semibold cs_mb_14">Daniel Adam</h3>
                      <p className="mb-0">
                        Excellente approche 360° ! La cohérence entre terrain et digital a boosté nos résultats.
                      </p>
                      <button aria-label="Bouton répondre" className="cs_reply_btn cs_semibold cs_blue_color">Répondre</button>
                    </div>
                  </li>
                  <li className="cs_comment_body position-relative">
                    <div className="cs_comment_thumbnail cs_radius_15">
                      <img src="/assets/img/client_2.jpg" alt="Image client" />
                    </div>
                    <div className="cs_comment_info">
                      <p className="cs_fs_14 cs_medium mb-0">15 juin 2024</p>
                      <h3 className="cs_fs_20 cs_semibold cs_mb_14">Zenelia Lozhe</h3>
                      <p className="mb-0">
                        Production audiovisuelle de qualité, délais respectés et équipe très réactive. Merci !
                      </p>
                      <button aria-label="Bouton répondre" className="cs_reply_btn cs_semibold cs_blue_color">Répondre</button>
                    </div>
                  </li>
                  <li className="cs_comment_body position-relative">
                    <div className="cs_comment_thumbnail cs_radius_15">
                      <img src="/assets/img/client_3.jpg" alt="Image client" />
                    </div>
                    <div className="cs_comment_info">
                      <p className="cs_fs_14 cs_medium mb-0">15 juin 2024</p>
                      <h3 className="cs_fs_20 cs_semibold cs_mb_14">Jhon Smith</h3>
                      <p className="mb-0">
                        Campagne bien structurée avec un suivi analytique précis. Recommandé pour le secteur santé.
                      </p>
                      <button aria-label="Bouton répondre" className="cs_reply_btn cs_semibold cs_blue_color">Répondre</button>
                    </div>
                  </li>
                </ul>
                <div className="cs_height_80 cs_height_lg_60"></div>
                <div className="cs_comment_form_wrapper cs_style_1">
                  <h3 className="cs_fs_30 cs_mb_19 wow fadeInDown">Laisser un commentaire</h3>
                  <form className="cs_comment_form row cs_row_gap_30 cs_gap_y_30">
                    <div className="col-sm-6">
                      <label for="name">Votre nom*</label>
                      <input type="text" name="name" id="name" placeholder="Votre nom" className="cs_form_field cs_radius_5" />
                    </div>
                    <div className="col-sm-6">
                      <label for="email">Votre e-mail*</label>
                      <input type="email" name="email" id="email" placeholder="Adresse e-mail" className="cs_form_field cs_radius_5" />
                    </div>
                    <div className="col-sm-12">
                      <label for="message">Message*</label>
                      <textarea name="comment" rows="6" id="message" placeholder="Saisissez votre commentaire" className="cs_form_field cs_radius_5"></textarea>
                    </div>
                    <div className="col-sm-12">
                      <button type="submit" aria-label="Bouton d’envoi du commentaire" className="cs_btn cs_style_1 cs_fs_14 cs_semibold text-uppercase wow fadeInUp"><span>Envoyer le commentaire</span></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default BlogDetails;
