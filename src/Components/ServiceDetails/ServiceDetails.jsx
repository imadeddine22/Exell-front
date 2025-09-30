import React from "react";
import { useParams, Link } from "react-router-dom";

// ✅ بيانات موحدة للخدمات (Services1 و Services4 يستعملو نفس السورس)
const servicesData = {
  "brand-strategy": {
    title: "Brand Strategy",
    img: "/assets/img/service_details.jpg",
    description:
      "Création ou repositionnement d’image de marque : storytelling, identité, messages clés. Nous vous accompagnons dans la définition d’une identité forte et cohérente avec vos valeurs et votre marché.",
    features: [
      "Analyse du marché et concurrence",
      "Définition du positionnement",
      "Storytelling & identité visuelle",
      "Charte graphique et guidelines",
    ],
  },
  "activations-pharmacie": {
    title: "Activations en pharmacie",
    img: "/assets/img/service_details_2.jpg",
    description:
      "Animations terrain à grande échelle, distribution ciblée, PLV et kits de gamification. Nous aidons les marques à mieux interagir avec les consommateurs directement sur le terrain.",
    features: [
      "Organisation d’animations en pharmacie",
      "Distribution de PLV et goodies",
      "Kits de gamification",
      "Campagnes promotionnelles ciblées",
    ],
  },
  "marketing-influence": {
    title: "Marketing d’influence",
    img: "/assets/img/service_details.jpg",
    description:
      "Collaboration avec médecins, pharmaciens, coachs, créateurs TikTok et Instagram. Nous créons des partenariats authentiques pour valoriser vos produits.",
    features: [
      "Identification et sélection d’influenceurs",
      "Collaboration avec experts santé et lifestyle",
      "Campagnes TikTok & Instagram",
      "Création de contenu sponsorisé",
    ],
  },
  "publicite-media-buying": {
    title: "Publicité & Media Buying",
    img: "/assets/img/service_details_2.jpg",
    description:
      "Facebook Ads, Google Ads, gestion des budgets et optimisation ROI. Nous planifions et exécutons vos campagnes publicitaires pour maximiser vos résultats.",
    features: [
      "Campagnes Facebook Ads et Google Ads",
      "Optimisation du retour sur investissement",
      "Gestion et suivi des budgets",
      "Rapports et analytics détaillés",
    ],
  },
  "evenementiel-salons": {
    title: "Evénementiel & salons",
    img: "/assets/img/service_details.jpg",
    description:
      "Conception de stands, organisation logistique, animation live, couverture média.",
    features: [
      "Conception et design de stands",
      "Organisation logistique complète",
      "Animations live interactives",
      "Couverture média et relations presse",
    ],
  },
  "production-video-studio": {
    title: "Production Vidéo & Studio",
    img: "/assets/img/service_details_2.jpg",
    description:
      "Nous produisons des vidéos impactantes et sur mesure dans notre studio professionnel aménagé.",
    features: [
      "Vidéos publicitaires",
      "Captation et montage studio",
      "Motion design créatif",
      "Supports vidéos adaptés au digital",
    ],
  },
  "campagnes-digitales": {
    title: "Campagnes digitales",
    img: "/assets/img/service_details.jpg",
    description:
      "Stratégies social media, création de contenu, community management, motion design, TikTok et YouTube Ads. Nous optimisons vos campagnes pour un engagement maximal.",
    features: [
      "Gestion des réseaux sociaux",
      "Création de contenu engageant",
      "Publicité ciblée (Facebook, Instagram, TikTok, YouTube)",
      "Community management",
    ],
  },
  "3d-modeling": {
    title: "3D Modeling",
    img: "/assets/img/service_details.jpg",
    description:
      "Modélisation 3D sur mesure pour vos projets créatifs et publicitaires.",
    features: [
      "Modélisation 3D réaliste",
      "Rendus pour publicité et communication",
      "Intégration 3D dans vidéos",
      "Conception pour réalité augmentée/virtuelle",
    ],
  },
};

const ServiceDetailsPage = () => {
  const { slug } = useParams();
  const service = servicesData[slug];

  // 🚨 إذا الخدمة غير موجودة
  if (!service) {
    return (
      <div className="container text-center py-5">
        <h2>Service introuvable</h2>
        <p>Le service que vous recherchez n’existe pas.</p>
        <Link to="/service" className="cs_btn cs_radius_10 mt-3">
          Retour aux services
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Espace top */}
      <div className="cs_height_120 cs_height_lg_80"></div>

      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb mb-4">
          <Link to="/service" className="breadcrumb-link">
            Services
          </Link>{" "}
          / <span>{service.title}</span>
        </nav>

        <div className="row cs_row_gap_30 cs_gap_y_40">
          {/* Main content */}
          <div className="col-lg-8">
            <div className="cs_service_details">
              <img
                src={service.img}
                alt={`Illustration pour ${service.title}`}
                loading="lazy"
                className="w-100 cs_radius_20"
              />
              <h2 className="mt-4">{service.title}</h2>
              <p>{service.description}</p>

              {/* Features */}
              <div className="cs_service_details_features cs_gray_bg_1 cs_radius_20 mt-4 p-4">
                <ul className="cs_list cs_style_1 cs_type_1 cs_mp_0">
                  {service.features.map((f, i) => (
                    <li key={i}>
                      <span className="cs_list_icon cs_center">
                        <i className="bi bi-check-circle"></i>
                      </span>
                      <span className="cs_list_text">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <aside className="cs_sidebar cs_style_1">
              <div className="cs_sidebar_widget cs_blue_bg cs_white_color cs_radius_20 wow fadeInDown p-4">
                <h2 className="cs_sidebar_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_5">
                  Besoin d’aide ?
                </h2>
                <p className="cs_medium cs_mb_26">
                  Contactez-nous 24/7 – équipe Excellencias à votre écoute.
                </p>
                <ul className="cs_location_list cs_mp_0">
                  <li>
                    <div className="cs_iconbox cs_style_5">
                      <span className="cs_iconbox_icon cs_center cs_radius_50">
                        <i className="bi bi-telephone-fill"></i>
                      </span>
                      <div className="cs_iconbox_info">
                        <p className="cs_fs_14 cs_semibold mb-0">Appelez-nous</p>
                        <a
                          href="tel:+213560000000"
                          aria-label="Click to make a call"
                          className="cs_fs_18 cs_semibold"
                        >
                          +213 560 00 00 00
                        </a>
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
                        <a
                          href="mailto:contact@excellencias.co"
                          aria-label="Send mail link"
                          className="cs_fs_18 cs_semibold"
                        >
                          contact@excellencias.co
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="cs_iconbox cs_style_5">
                      <span className="cs_iconbox_icon cs_center cs_radius_50">
                        <i className="bi bi-geo-alt-fill"></i>
                      </span>
                      <div className="cs_iconbox_info">
                        <p className="cs_fs_14 cs_semibold mb-0">
                          Adresse du bureau
                        </p>
                        <p className="cs_fs_18 cs_semibold mb-0">
                          Dar El Beïda, Alger – Algérie
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Espace bottom */}
      <div className="cs_height_120 cs_height_lg_80"></div>
    </div>
  );
};

export default ServiceDetailsPage;
