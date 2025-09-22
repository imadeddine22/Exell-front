import React from 'react';
import Slider from 'react-slick';

const Brand1 = () => {

    const chooseContent = [
        {img:'/assets/img/brand_1.svg'},
        {img:'/assets/img/brand_2.svg'},
        {img:'/assets/img/brand_3.svg'},
        {img:'/assets/img/brand_4.svg'},
        {img:'/assets/img/brand_5.svg'},
      ]; 

    return (
<div className="cs_brands_slider position-relative z-2">
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_2">
          <p className="cs_section_subtitle cs_fs_20 cs_semibold cs_accent_color mb-0">Clients & Partenaires</p>
        </div>
        <div className="cs_horizontal_slider_wrapper cs_brands_wrapper">
          <div className="cs_horizontal_slider_in">
            <div className="cs_brands_list cs_type_1">
            {chooseContent.map((item, i) => (
              <div key={i} className="cs_brand">
                <img src={item.img} alt="Brand logo" />
              </div>
               ))}
            </div>
            <div className="cs_brands_list cs_type_1">
                {chooseContent.map((item, i) => (
              <div key={i} className="cs_brand">
                <img src={item.img}alt="Brand logo" />
              </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Brand1;