import React from "react";


const HeroBanner2 = () => {
  return (
    <section className="hero2" role="region" aria-label="Hero section">
      <div className="hero2__container hero2__reverse">
        {/* الصورة (يمين) */}
        <div className="hero2__imageWrap">
          <img
            className="hero2__image"
            src="/assets/img/hero_img_2.png"
            alt="Illustration marketing digital"
            loading="eager"
          />
        </div>

        {/* النص (يسار) */}
        <div className="hero2__content">
          <h1 className="hero2__title">Excellencias Corporate</h1>
          <h3 className="small-title-home">
            Créativité, Impact, Résultats
          </h3>

          <p className="hero2__subtitle">
            Excellencias Corporate, c’est plus qu’une agence de communication.
            On est un partenaire stratégique pour le secteur santé et bien-être, 
            où on combine créativité, stratégie et rigueur scientique pour donner 
            plus de visibilité, plus de force et plus d’impact aux marques.
          </p>

          <div className="hero2__actions">
            <a className="hero2__btn hero2__btn--primary" href="/contact">
              Contactez-nous
            </a>
            <a className="hero2__btn hero2__btn--ghost" href="/services">
              Nos services
            </a>
          </div>
        </div>
      </div>

      <div className="hero2__bg" aria-hidden="true" />
    </section>
  );
};

export default HeroBanner2;
