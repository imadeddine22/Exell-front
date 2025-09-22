import React from 'react';

const Contact2 = () => {
  return (
    <section className="cs_gray_bg_1 position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_contact_thumbnail_2 z-0">
          <img src="/assets/img/contact_img_2.jpg" alt="Image de contact" />
        </div>
        <div className="row cs_gap_y_30 position-relative z-1">
          <div className="col-lg-5">
            <div className="cs_section_heading cs_style_1">
              <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
                Contactez-nous<span className="cs_shape_right"></span>
              </p>
              <h2 className="cs_fs_48 mb-0 wow fadeInUp">Discutons de votre projet</h2>
            </div>
            <div className="cs_height_60 cs_height_lg_50"></div>
            <ul className="cs_contact_info_list cs_mp_0">
              <li>
                <div className="cs_iconbox cs_style_3 wow fadeInDown">
                  <span className="cs_iconbox_icon cs_center cs_white_color cs_radius_50">
                    <i className="bi bi-telephone-fill"></i>
                  </span>
                  <div className="cs_iconbox_info">
                    <a href="tel:+213558123456" aria-label="Bouton d’appel">+213 558 12 34 56</a><br/>
                    <a href="tel:+213770123456" aria-label="Bouton d’appel">+213 770 12 34 56</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="cs_iconbox cs_style_3 wow fadeInDown" data-wow-delay="200ms">
                  <span className="cs_iconbox_icon cs_center cs_white_color cs_radius_50">
                    <i className="bi bi-envelope-fill"></i>
                  </span>
                  <div className="cs_iconbox_info">
                    <a href="mailto:contact@excellencias.dz" aria-label="Cliquez pour envoyer un email">contact@excellencias.dz</a><br/>
                    <a href="mailto:support@excellencias.dz" aria-label="Cliquez pour envoyer un email">support@excellencias.dz</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="cs_iconbox cs_style_3 wow fadeInDown" data-wow-delay="400ms">
                  <span className="cs_iconbox_icon cs_center cs_white_color cs_radius_50">
                    <i className="bi bi-geo-alt-fill"></i>
                  </span>
                  <div className="cs_iconbox_info">
                    <p className="mb-0">Hydra, Alger<br/>16035, Algérie</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-xl-6 col-lg-7 offset-xl-1">
            <div className="cs_contact_form_wrapper cs_white_bg cs_radius_15">
              <h2 className="cs_fs_30">Comment pouvons-nous vous aider&nbsp;?</h2>
              <form className="cs_contact_form cs_type_1 row cs_row_gap_20 cs_gap_y_16">
                <div className="col-md-6">
                  <label htmlFor="name">Nom complet*</label>
                  <input type="text" name="name" id="name" className="cs_form_field cs_radius_8 cs_gray_bg_1" placeholder="Nom complet" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email">Adresse e-mail*</label>
                  <input type="email" name="email" id="email" className="cs_form_field cs_radius_8 cs_gray_bg_1" placeholder="Adresse e-mail" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="service">Type de service*</label>
                  <select name="service" id="service" className="cs_form_field cs_radius_8 cs_gray_bg_1 cs_custom_select">
                    <option value="choose-service">Choisir un service</option>
                    <option value="uiux-design">Conception UI/UX</option>
                    <option value="graphics-design">Design graphique</option>
                    <option value="photography">Production audiovisuelle</option>
                    <option value="web-dev">Développement Web</option>
                    <option value="app-dev">Développement d’applications</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="date">Sélectionner une date*</label>
                  <input type="date" name="date" id="date" className="cs_form_field cs_radius_8 cs_gray_bg_1" /> 
                </div>
                <div className="col-md-12">
                  <label htmlFor="message">Message*</label>
                  <textarea name="message" rows="4" id="message" className="cs_form_field cs_radius_8 cs_gray_bg_1" placeholder="Écrivez votre message"></textarea>
                </div>
                <div className="col-md-12">
                  <button type="submit" aria-label="Bouton d’envoi" className="cs_btn cs_style_1 cs_fs_14 cs_semibold cs_white_color text-uppercase wow fadeInUp">
                    <span>Envoyer maintenant</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="cs_contact_shape_8 position-absolute z-0">
          <img src="/assets/img/circle_1.svg" alt="Forme décorative" />
        </div>
        <div className="cs_contact_shape_9 position-absolute z-0">
          <img src="/assets/img/circle_1.svg" alt="Forme décorative" />
        </div>
      </div>

      <div className="cs_text_slider position-relative">
        <div className="cs_horizontal_slider_wrapper">
          <div className="cs_horizontal_slider_in">
            <div className="cs_brands_list cs_type_3">Services de communication & marketing</div>
            <div className="cs_brands_list cs_type_3">Services de communication & marketing</div>
          </div>
        </div>
      </div>

      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default Contact2;
