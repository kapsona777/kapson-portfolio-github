import SimpleImageSlider from "react-simple-image-slider"; 
import './index.scss';

const img1=require('./mainSlider/slider1.jpg');
const img2=require('./mainSlider/slider2.jpg');
const img3=require('./mainSlider/slider3.png');
const img4=require('./mainSlider/slider4.png');
const img5=require('./mainSlider/slider5.jpg');

const images = [
     img1,
        img2,
        img3,
        img4,
        img5
]

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={800}
        height={300}
        images={images}
        showBullets={true}
        showNavs={true} 
        slideDuration={2} 
        autoPlay={true}
        autoPlayDelay={3}
        loop={true}
      />
    </div>
  );
}

export default Slider;