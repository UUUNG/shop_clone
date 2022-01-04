import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import styled from "styled-components";

const SliderWrapper = styled.div`
  margin          : 40px auto;
  width           : 1920px;
	height					: 1080px;
  background      : red;
`

const images = [
  {
    url : require('../img/season-off.jpg')
  },
  {
    url : require('../img/sansan.jpg'),
  },
  {
    url : require('../img/gift-shop.jpg'),
  },
  {
    url : require('../img/worst-skateshop.jpg'),
  },
  {
    url : require('../img/lores.jpg'),
  },
];

const Slider = () => {
    return (
      <SliderWrapper>
        <SimpleImageSlider
          width={1920} //original 896
          height={1080} //original 504
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </SliderWrapper>
    );
};

export default Slider;