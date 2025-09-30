import React, { useState } from 'react';

const Contact1 = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    // بدّل الإيميل هنا إذا لازم
    const to = 'contact@excellencias.co';

    const subject = encodeURIComponent(
      `Nouveau message – ${form.service || 'Service non précisé'}`
    );

    const body = encodeURIComponent(
      `Bonjour Exellencias Corporate,

Nom : ${form.name}
Email : ${form.email}
Service : ${form.service || '-'}

Message :
${form.message}

-- 
Envoyé depuis le site web`
    );

    // يفتح تطبيق البريد عند المستخدم
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="position-relative overflow-hidden">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container position-relative">
        <div className="row cs_gap_y_40">
          <div className="col-lg-6 order-lg-2">
            <div className="cs_contact_thumbnail wow fadeInRight">
              <img src="/assets/img/contact_img_1.png" alt="Contact image" />
              <div className="cs_contact_ellipse_1 position-absolute z-0"></div>
              <div className="cs_contact_ellipse_2 position-absolute z-0"></div>
              <div className="cs_contact_ellipse_3 position-absolute z-0"></div>
            </div>
          </div>

          <div className="col-lg-6 order-lg-1 position-relative z-2">
            <div className="cs_contact_info_wrapper">
              <div className="cs_section_heading cs_style_1">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
                  Contactez-nous<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_20 wow fadeInUp">
                  N’hésitez pas à nous contacter
                </h2>
                <p
                  className="cs_section_heading_text mb-0 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  Notre gamme complète de services en marketing digital
                </p>
              </div>

              <div className="cs_height_32 cs_height_lg_30"></div>

              <form
                onSubmit={handleSubmit}
                className="cs_contact_form row cs_row_gap_30 cs_gap_y_24 position-relative z-2"
              >
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="cs_form_field cs_radius_8"
                    placeholder="Nom complet"
                    value={form.name}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="cs_form_field cs_radius_8"
                    placeholder="Adresse e-mail"
                    value={form.email}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <select
                    name="service"
                    className="cs_form_field cs_custom_select cs_radius_8"
                    value={form.service}
                    onChange={onChange}
                  >
                    <option value="">Type de service</option>
                    <option value="Conception UI/UX">Activations en pharmacie</option>
                    <option value="Design graphique">Marketing d’influence</option>
                    <option value="Photographie">Publicité & Media Buying</option>
                    <option value="Développement web">Evénementiel & salons</option>
                    <option value="Développement web">Production Vidéo & Studio</option>
                    <option value="Développement web">Campagnes digitales</option>
                    <option value="Développement web">3d modling</option>
                    
                  </select>
                </div>

                <div className="col-md-12">
                  <textarea
                    name="message"
                    rows="3"
                    className="cs_form_field cs_radius_8"
                    placeholder="Écrivez votre message"
                    value={form.message}
                    onChange={onChange}
                    required
                  ></textarea>
                </div>

                <div className="col-md-12">
                  <button
                    type="submit"
                    aria-label="Bouton d’envoi"
                    className="cs_btn cs_style_1 cs_fs_14 cs_semibold cs_white_color text-uppercase"
                  >
                    <span>Envoyer</span>
                  </button>
                </div>
              </form>
            </div>

            <div className="cs_height_120 cs_height_lg_80"></div>
          </div>
        </div>
      </div>

      {/* décorations */}
      <div className="cs_contact_shape_1 position-absolute z-0">
        <img src="/assets/img/contact_shape_1.svg" alt="Image décorative" />
      </div>
      <div className="cs_contact_shape_3 position-absolute z-0">
        <img src="/assets/img/star_shape_1.svg" alt="Image décorative" />
      </div>
      <div className="cs_contact_shape_4 position-absolute z-0">
        <img src="/assets/img/star_shape_1.svg" alt="Image décorative" />
      </div>
      <div className="cs_contact_shape_5 position-absolute z-0">
        <img src="/assets/img/star_shape_1.svg" alt="Image décorative" />
      </div>
      <div className="cs_contact_shape_6 position-absolute z-0">
        <img src="/assets/img/star_shape_1.svg" alt="Image décorative" />
      </div>
      <div className="cs_contact_shape_7 position-absolute z-0">
        <img src="/assets/img/star_shape_1.svg" alt="Image décorative" />
      </div>
      <div className="cs_contact_shape_8 position-absolute z-0">
        <img src="/assets/img/circle_1.svg" alt="Image décorative" />
      </div>
      <div className="cs_contact_shape_9 position-absolute z-0">
        <img src="/assets/img/circle_1.svg" alt="Image décorative" />
      </div>
    </section>
  );
};

export default Contact1;
