import React from 'react';
import { Link } from 'react-router-dom';

const Footer1 = () => {
    return (
<footer className="cs_footer cs_style_1 cs_bg_filed cs_heading_bg position-relative" data-src="assets/img/footer_bg_1.jpg">
      <div className="cs_footer_top position-relative z-1">
        <div className="container-fluid">
          <div className="cs_footer_content">
            <div className="cs_footer_top_content">
              <div className="wow fadeInLeft">Parlons !</div>
              <Link to="/contact" className="cs_footer_top_img cs_radius_50 wow zoomIn">
                <img src="/assets/img/footer_img_icon.png" alt="Link image" />
                <span className="cs_center">
                <img src="/assets/img/icons/arrow_right_2.svg" alt="Arrow icon" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_main_footer cs_white_color_2 position-relative z-1">
        <div className="container-fluid">
          <div className="cs_footer_content cs_footer_row">
            <div className="cs_footer_widget cs_footer_text">
              <div className="cs_text_widget">
                <img src="/assets/img/footer_logo.svg" alt="Logo" className="cs_mb_30 wow zoomIn" />
                <p className="cs_mb_37">Nous développons des stratégies de communication innovantes pour renforcer l’impact des marques de santé. </p>
              </div>
              <div className="cs_social_btns cs_style_1">
                <a href="#" aria-label="Social link" className="cs_center cs_radius_50">
                <i className="bi bi-facebook"></i>
                </a>
                <a href="#" aria-label="Social link" className="cs_center cs_radius_50">
                <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#" aria-label="Social link" className="cs_center cs_radius_50">
                <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" aria-label="Social link" className="cs_center cs_radius_50">
                <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
           <div className="cs_footer_links_wrapper">
  <div className="cs_footer_widget">
    <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_27 position-relative">Liens Rapides</h2>
    <ul className="cs_footer_menu cs_mp_0">
      <li><Link to="/about" aria-label="Page link">À propos d’Excellencias</Link></li>
      <li><Link to="/service" aria-label="Page link">Nos Services</Link></li>
      <li><Link to="/blog" aria-label="Page link">Actualités & Blog</Link></li>
      <li><Link to="/contact" aria-label="Page link">Contactez-nous</Link></li>
    </ul>
  </div>

  <div className="cs_footer_widget">
    <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_27 position-relative">Contact</h2>
    <p className="cs_mb_24">Excellencias Corporate, Alger – Algérie</p>
    <h3 className="cs_fs_16 cs_white_color cs_mb_10">Appelez-nous :</h3>
    <ul className="cs_footer_contact_list cs_mp_0">
      <li>
        <a href="tel:+213560000000" aria-label="Phone call link">+213 560 00 00 00</a>
      </li>
      <li>
        <a href="tel:+213770000000" aria-label="Phone call link">+213 770 00 00 00</a>
      </li>
    </ul>
  </div>

  <div className="cs_footer_widget">
    <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_27 position-relative">Newsletter</h2>
    <p className="cs_mb_27">Abonnez-vous pour recevoir nos actualités et mises à jour hebdomadaires.</p>
    <div className="cs_footer_newsletter cs_style_1">
      <form action="#" className="cs_footer_newsletter_form cs_radius_8">
        <input type="text" placeholder="Entrez votre adresse email" />
        <button aria-label="Subscribe button" className="cs_btn cs_style_1 cs_center">
          <span><i className="bi bi-send"></i></span>
        </button>
      </form>
    </div>
  </div>
</div>
</div>
</div>
</div>

<div className="cs_footer_bottom cs_white_color_2 position-relative z-1">
  <div className="container-fluid">
    <div className="cs_footer_bottom_in cs_footer_content">
      <div className="cs_footer_copyright">
        &copy; Tous droits réservés 2025 par <a href="#" aria-label="Site link">Excellencias Corporate</a>
      </div>
      <div>
        <ul className="cs_footer_menu cs_mp_0">
          <li><a href="#" aria-label="Footer link">Conditions Générales</a></li>
          <li><a href="#" aria-label="Footer link">Politique de Confidentialité</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div className="cs_footer_shape_1 position-absolute">
  <img src="/assets/img/footer_shape_1.svg" alt="Shape image" />
</div>
<div className="cs_footer_shape_2 position-absolute">
  <img src="/assets/img/footer_shape_1.svg" alt="Shape image" />
</div>
</footer>
);
};

export default Footer1;
