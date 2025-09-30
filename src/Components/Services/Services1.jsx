import { Link } from "react-router-dom";

const items = [
  {
    icon: "/assets/img/serv01.svg",
    title: "Brand Strategy",
    desc: "Création ou repositionnement d’image de marque : storytelling, identité, messages clés.",
    slug: "brand-strategy",
  },
  {
    icon: "/assets/img/serv02.svg",
    title: "Activations en pharmacie",
    desc: "Animations terrain à grande échelle, distribution ciblée, PLV, kits gamification.",
    slug: "activations-pharmacie",
  },
  {
    icon: "/assets/img/serv03.svg",
    title: "Marketing d’influence",
    desc: "Collaboration avec médecins, pharmaciens, coachs, créateurs TikTok et Instagram.",
    slug: "marketing-influence",
  },
  {
    icon: "/assets/img/serv04.svg",
    title: "Publicité & Media Buying",
    desc: "Facebook Ads, Google Ads, gestion des budgets, optimisation ROI.",
    slug: "publicite-media-buying",
  },
  {
    icon: "/assets/img/serv05.svg",
    title: "Evénementiel & salons",
    desc: "Conception de stands, organisation logistique, animation live, couverture média.",
    slug: "evenementiel-salons",
  },
  {
    icon: "/assets/img/serv06.svg",
    title: "Production Vidéo & Studio",
    desc: "Nous produisons des vidéos impactantes et sur mesure dans notre studio professionnel aménagé.",
    slug: "production-video-studio",
  },
  {
    icon: "/assets/img/serv07.svg",
    title: "Campagnes digitales",
    desc: "Stratégies social media, création de contenu, community management, motion design, TikTok, YouTube Ads…",
    slug: "campagnes-digitales",
  },
  {
    icon: "/assets/img/serv08.svg",
    title: "3D Modeling",
    desc: "Modélisation 3D sur mesure pour vos projets créatifs et publicitaires.",
    slug: "3d-modeling",
  },
];

export default function Services1() {
  return (
    <section className="xc_services">
      <div className="xc_container">
        <div className="xc_head">
          <div>
            <p className="xc_kicker">
              Services <span className="xc_shape" />
            </p>
            <h2 className="xc_title">Solutions innovantes</h2>
            <p className="xc_sub">
              De la stratégie digitale à l’événementiel, nous concevons des
              solutions adaptées pour renforcer votre présence et votre notoriété.
            </p>
          </div>
         
        </div>

        <div className="xc_grid">
          {items.map((s, i) => (
            <article key={i} className="xc_card">
              <div className="xc_iconwrap">
                <img src={s.icon} alt={s.title} className="xc_icon" />
              </div>
              <h3 className="xc_card_title">
                <Link to={`/service/${s.slug}`}>{s.title}</Link>
              </h3>
              <p className="xc_card_desc">{s.desc}</p>
              <Link
                to={`/service/${s.slug}`}
                className="xc_card_btn"
                aria-label={`Voir ${s.title}`}
              >
                <img src="/assets/img/icons/arrow_right.svg" alt="Arrow icon" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
