import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from './projectsData';

const Project4 = () => {
  return (
    <section className="cs_tabs position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_tab_body wow fadeInUp" data-wow-delay="200ms">
          <div className="cs_tab active" id="all">
            <div className="cs_cards_wrapper_1">
              {projectsData.map((item) => (
                <Link
                  key={item.id}
                  to={`/project/${item.id}`}
                  state={{ project: item }} // يفيد للتنقل السلس، والـ URL يبقى قابل للمشاركة بفضل :id
                  className="cs_card cs_style_3 cs_radius_15 position-relative"
                  aria-label={`Aller aux détails du projet ${item.title}`}
                >
                  <div className="cs_card_overlay position-absolute"></div>
                  <img src={item.img} alt={item.title} />
                  <span className="cs_card_btn cs_accent_bg cs_center cs_radius_50 position-absolute">
                    <img src="/assets/img/icons/arrow_right.svg" alt="Arrow icon" />
                  </span>
                  <div className="cs_card_info position-absolute">
                    <h3 className="cs_fs_24 cs_white_color cs_mb_2">{item.title}</h3>
                    <p className="cs_medium cs_white_color mb-0">{item.content}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="cs_case_shape_1 position-absolute">
          <img src="/assets/img/case_shape_1.svg" alt="Shape image" />
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default Project4;
