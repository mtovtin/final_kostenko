import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import EmbedSocialWidget from '../components/EmbedSocialWidget';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const Home = () => (

    <div  id='cont' style={{marginTop:"-40px"}} className='cont2'>
<EmbedSocialWidget  refId="04bb35dee03837c1523146863760e260f3469121"/>
    <div style={{textAlign: "center"}}>Обирайте зручний час та самостійно записуйтесь на консультацію! 🚀</div>
    <div style={{textAlign: "center"}}><button id="reg_button"><a href="https://calendly.com/dr_kostenko">ЗАПИСАТИСЬ</a></button></div>
    <div  style={{textAlign: "center", marginBottom:"50px"}}>РЕЗУЛЬТАТИ</div>
   <div style={{textAlign: 'center', marginTop: '30px', marginBottom: '30px'}}>
   <p style={{width: "40%", display: "inline-block", marginRight: '15px'}}>
    <ReactCompareSlider
  itemOne={<ReactCompareSliderImage src="../images/IMG_1124.webp"  alt="Image one" />}
  itemTwo={<ReactCompareSliderImage src="../images/IMG_1123.webp" alt="Image two" />}
/>
</p>
   <p style={{width: "40%", display: "inline-block", marginLeft: '15px'}}>
<ReactCompareSlider
  itemOne={<ReactCompareSliderImage src="../images/IMG_1125.webp"  alt="Image one" />}
  itemTwo={<ReactCompareSliderImage src="../images/IMG_1126.webp"  alt="Image two" />}
/>
</p>
</div>
   <div style={{textAlign: 'center', marginTop: '30px', marginBottom: '30px'}}>
   <p style={{width: "40%", display: "inline-block", marginRight: '15px'}}>
    <ReactCompareSlider
  itemOne={<ReactCompareSliderImage src="../images/IMG_1127.webp"  alt="Image one" />}
  itemTwo={<ReactCompareSliderImage src="../images/IMG_1128.webp" alt="Image two" />}
/>
</p>
   <p style={{width: "40%", display: "inline-block", marginLeft: '15px'}}>
<ReactCompareSlider
  itemOne={<ReactCompareSliderImage src="../images/IMG_1121.webp"  alt="Image one" />}
  itemTwo={<ReactCompareSliderImage src="../images/IMG_1122.webp"  alt="Image two" />}
/>
</p>
</div>
    <div  style={{textAlign: "center", marginBottom:"50px"}}>ВІДГУКИ</div>

   
    <div className='carousel'>
    <Carousel>
    <div>
        <img src="../images/screen16.png" />
    </div>
    <div>
        <img src="../images/screen15.png" />
    </div>
    <div>
        <img src="../images/screen14.png" />
    </div>
    <div>
        <img src="../images/screen17.png" />
    </div>
    <div>
        <img src="../images/screen18.png" />
    </div>
    <div>
        <img src="../images/screen19.png" />
    </div>

    <div>
        <img src="../images/screen20.png" />
    </div>
    <div>
        <img src="../images/screen21.png" />
    </div>
    <div>
        <img src="../images/screen22.png" />
    </div>

</Carousel>

</div>

<div  style={{textAlign: "center"}}>ЯК НАС ЗНАЙТИ</div>
<div style={{marginTop: "50px", textAlign: "center"}} class="mapouter"><div class="gmap_canvas"><iframe width="500" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%9C%D0%B8%D0%BD%D0%B0%D0%B9%D1%81%D1%8C%D0%BA%D0%B0,%2035%D0%90,%20%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br></br><style></style></div></div>

</div>

);

export default Home;