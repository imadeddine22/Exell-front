import React from 'react';


const Contact3 = () => {
  return (
    <div>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container-fluid">
        <div className="cs_contact_content">
          <div className="row cs_gap_y_30">
            <div className="col-xl-5 col-lg-6 wow fadeInLeft">
              <div className="cs_contact_desc cs_radius_30">
                <p className="cs_location_subtitle cs_fs_14 cs_bold cs_blue_color text-uppercase mb-0">
                  <span></span> Travailler avec nous
                </p>
                <h2 className="cs_location_title cs_fs_36 cs_semibold cs_mb_13">Travaillons ensemble</h2>
                <p className="cs_contact_text cs_mb_22">
                  Merci de votre intérêt pour Excellencias Corporate. Écrivez-nous pour discuter de votre projet
                  (branding, digital, audiovisuel, terrain) et obtenir une proposition personnalisée.
                </p>
                <ul className="cs_contact_info_list cs_type_1 cs_mp_0">
                  <li>
                    <div className="cs_iconbox cs_style_6">
                      <span className="cs_iconbox_icon cs_center cs_radius_50 position-relative">
                        <img src="/assets/img/icons/head_phone.svg" alt="Icône téléphone" />
                      </span>
                      <div className="cs_iconbox_info">
                        <p className="cs_mb_1">Appelez-nous</p>
                        <a href="tel:+213558123456" aria-label="Phone call button">+213 558 12 34 56</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="cs_iconbox cs_style_6">
                      <span className="cs_iconbox_icon cs_center cs_radius_50 position-relative">
                        <img src="/assets/img/icons/email_2.svg" alt="Icône email" />
                      </span>
                      <div className="cs_iconbox_info">
                        <p className="cs_mb_1">Email (24/7)</p>
                        <a href="mailto:contact@excellencias.dz" aria-label="Click to send email">contact@excellencias.dz</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="cs_iconbox cs_style_6">
                      <span className="cs_iconbox_icon cs_center cs_radius_50 position-relative">
                        <img src="/assets/img/icons/location.svg" alt="Icône localisation" />
                      </span>
                      <div className="cs_iconbox_info">
                        <p className="cs_mb_1">Notre adresse</p>
                        <p className="cs_fs_18 cs_semibold cs_heading_color mb-0">
                          El dar Elbida ,Exellencias Corporate
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-7 col-lg-6">
              <div className="cs_contact_form_wrapper cs_type_2 cs_radius_30">
                <form className="cs_contact_form cs_type_2 row cs_gap_y_20">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="cs_form_field cs_radius_8 cs_gray_bg_1"
                      placeholder="Votre nom*"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="cs_form_field cs_radius_8 cs_gray_bg_1"
                      placeholder="Adresse e-mail*"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="phone"
                      className="cs_form_field cs_radius_8 cs_gray_bg_1"
                      placeholder="Numéro de téléphone*"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="service"
                      className="cs_form_field cs_radius_8 cs_gray_bg_1"
                      placeholder="Service souhaité* (ex: Branding, Web, Social Media…)"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="message"
                      rows="7"
                      className="cs_form_field cs_radius_20 cs_gray_bg_1"
                      placeholder="Votre message*"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <button
                      type="submit"
                      aria-label="Submit button"
                      className="cs_btn cs_style_1 cs_fs_14 cs_semibold cs_white_color text-capitalize wow fadeInUp"
                    >
                      <span>Envoyer le message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="cs_height_100 cs_height_lg_80"></div>

          <div className="cs_location_map cs_radius_30 wow fadeInDown">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31634.1234567890!2d3.2093842!3d36.7199184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e510070b41a59%3A0x4a9c7edfd1085dbf!2sExcellencias%20Corporate!5e0!3m2!1sfr!2sdz!4v169xxx" 
 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </div>
  );
};

export default Contact3;
