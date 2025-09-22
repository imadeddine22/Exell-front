import React from 'react';

const ServiceDetails = () => {
  return (
    <div>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_row_gap_30 cs_gap_y_40">
          <div className="col-lg-4">
            <aside className="cs_sidebar cs_style_1">
              <div className="cs_sidebar_widget cs_gray_bg_1 cs_radius_20 wow fadeInDown">
                <h2 className="cs_sidebar_widget_title cs_fs_24 cs_semibold cs_mb_21">Catégories</h2>
                <ul className="cs_service_category_list cs_mp_0">
                  <li>
                    <a href="#">
                      <span>Branding & Identité visuelle</span>
                      <span><i className="bi bi-arrow-right"></i></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Click to visit service details">
                      <span>Marketing digital & Social Media</span>
                      <span><i className="bi bi-arrow-right"></i></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Click to visit service details">
                      <span>SEO & Analytics</span>
                      <span><i className="bi bi-arrow-right"></i></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Click to visit service details">
                      <span>Production audiovisuelle</span>
                      <span><i className="bi bi-arrow-right"></i></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Click to visit service details">
                      <span>Événementiel & Activations terrain</span>
                      <span><i className="bi bi-arrow-right"></i></span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="cs_sidebar_widget cs_blue_bg cs_white_color cs_radius_20 wow fadeInDown">
                <h2 className="cs_sidebar_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_5">Besoin d’aide ?</h2>
                <p className="cs_medium cs_mb_26">Contactez-nous 24/7 – équipe Excellencias à votre écoute.</p>
                <ul className="cs_location_list cs_mp_0">
                  <li>
                    <div className="cs_iconbox cs_style_5">
                      <span className="cs_iconbox_icon cs_center cs_radius_50">
                        <i className="bi bi-telephone-fill"></i>
                      </span>
                      <div className="cs_iconbox_info">
                        <p className="cs_fs_14 cs_semibold mb-0">Appelez-nous</p>
                        <a href="tel:+213560000000" aria-label="Click to make a call" className="cs_fs_18 cs_semibold">+213 560 00 00 00</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="cs_iconbox cs_style_5">
                      <span className="cs_iconbox_icon cs_center cs_radius_50">
                        <i className="bi bi-envelope-fill"></i>
                      </span>
                      <div className="cs_iconbox_info">
                        <p className="cs_fs_14 cs_semibold mb-0">E-mail</p>
                        <a href="mailto:contact@excellencias.co" aria-label="Send mail link" className="cs_fs_18 cs_semibold">contact@excellencias.co</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="cs_iconbox cs_style_5">
                      <span className="cs_iconbox_icon cs_center cs_radius_50">
                        <i className="bi bi-geo-alt-fill"></i>
                      </span>
                      <div className="cs_iconbox_info">
                        <p className="cs_fs_14 cs_semibold mb-0">Adresse du bureau</p>
                        <p className="cs_fs_18 cs_semibold mb-0">Dar El Beïda, Alger – Algérie</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>
          </div>

          <div className="col-lg-8">
            <div className="cs_service_details">
              <img src="/assets/img/service_details.jpg" alt="Bannière service" loading="lazy" />
              <h2>Gestion de Contenu (CMS)</h2>
              <p>
                Notre service <strong>CMS</strong> permet de créer, gérer et mettre à jour vos pages (textes, images, vidéos, documents)
                sans compétences techniques. Excellencias Corporate met en place des interfaces simples, des modèles
                cohérents avec votre charte, et des workflows de validation pour publier vite et proprement, sur des sites
                vitrines, e-commerce ou médias (santé, cosmétique, éducation, corporate).
              </p>

              <div className="cs_service_details_features cs_gray_bg_1 cs_radius_20">
                <div className="row cs_row_gap_30 cs_gap_y_30">
                  <div className="col-md-5 wow fadeInLeft">
                    <img src="/assets/img/service_details_2.jpg" alt="Illustration fonctionnalité" loading="lazy" />
                  </div>
                  <div className="col-md-7">
                    <div className="cs_feature_info">
                      <h3>Composants clés d’un CMS :</h3>
                      <p>Outils fiables et évolutifs pour une gestion éditoriale rapide, sécurisée et mesurable.</p>
                      <ul className="cs_list cs_style_1 cs_type_1 cs_mp_0">
                        <li>
                          <span className="cs_list_icon cs_center"><i className="bi bi-check-circle"></i></span>
                          <span className="cs_list_text">Interface éditeur (UI) intuitive</span>
                        </li>
                        <li>
                          <span className="cs_list_icon cs_center"><i className="bi bi-check-circle"></i></span>
                          <span className="cs_list_text">Plugins & extensions (SEO, formulaires, multilingue)</span>
                        </li>
                        <li>
                          <span className="cs_list_icon cs_center"><i className="bi bi-check-circle"></i></span>
                          <span className="cs_list_text">Thèmes & templates brandés Excellencias</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                Nous configurons et personnalisons votre CMS (arborescence, rôles, SEO, sécurité), puis formons vos équipes
                pour une autonomie totale. Suivi analytics et maintenance sont inclus pour garantir performance et continuité.
              </p>

              <div className="cs_steps_to_get_service">
                <h2>4 étapes simples de mise en œuvre</h2>
                <p>Un process clair qui va de l’analyse au déploiement, avec des livrables vérifiés à chaque étape.</p>

                <div className="cs_process_steps_wrapper">
                  <div className="cs_process_step cs_white_bg cs_radius_10 wow fadeInLeft">
                    <span className="cs_step_index cs_center cs_blue_bg cs_fs_18 cs_bold cs_white_color cs_radius_50">01</span>
                    <div className="cs_step_info">
                      <h3>Cadrage & audit</h3>
                      <p>Objectifs, arborescence, contenus, conformité, SEO, sécurité.</p>
                    </div>
                  </div>

                  <div className="cs_process_step cs_white_bg cs_radius_10 wow fadeInRight">
                    <span className="cs_step_index cs_center cs_blue_bg cs_fs_18 cs_bold cs_white_color cs_radius_50">02</span>
                    <div className="cs_step_info">
                      <h3>Design & templates</h3>
                      <p>Création des maquettes et intégration aux standards de votre marque.</p>
                    </div>
                  </div>

                  <div className="cs_process_step cs_white_bg cs_radius_10 wow fadeInLeft">
                    <span className="cs_step_index cs_center cs_blue_bg cs_fs_18 cs_bold cs_white_color cs_radius_50">03</span>
                    <div className="cs_step_info">
                      <h3>Intégration & SEO</h3>
                      <p>Mise en place du CMS, contenus, plugins, optimisation des performances.</p>
                    </div>
                  </div>

                  <div className="cs_process_step cs_white_bg cs_radius_10 wow fadeInRight">
                    <span className="cs_step_index cs_center cs_blue_bg cs_fs_18 cs_bold cs_white_color cs_radius_50">04</span>
                    <div className="cs_step_info">
                      <h3>Recette & formation</h3>
                      <p>Tests, corrections, formation des équipes et lancement officiel.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="cs_height_120 cs_height_lg_80"></div>
    </div>
  );
};

export default ServiceDetails;
