import "../styles/pages/_gallery.scss";
import GalleryImages from "../utils/GalleryImages";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Keyboard, EffectCards, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/effect-fade';

// zoom: true,
// loop: true,

const Gallery = () => {
    return ( 
        <article className="gallery">
            <h1 className="gallery__title">Gallery</h1>

            <Swiper
              // install Swiper modules
              slidesPerView={1}
              spaceBetween={50}
              loop={true}
              zoom={true}
              navigation
              keyboard={{
                enabled: true,
              }}
              modules={[Keyboard, Navigation, Pagination, Scrollbar, A11y, EffectCards]} effect="cards" 
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {/* {
                GalleryImages.map(() => {
                  return (
                    <SwiperSlide>
                      <img src={imgUrl} alt={imgAlt} />
                      <p>{imgAlt}</p>
                    </SwiperSlide>
                  )
                })
              } */}
            </Swiper>
            
            <Swiper
              // install Swiper modules
              slidesPerView={1}
              spaceBetween={50}
              loop={true}
              zoom={true}
              navigation
              keyboard={{
                enabled: true,
              }}
              modules={[Keyboard, Navigation, Pagination, Scrollbar, A11y, EffectCards]} effect="cards" 
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <img src="../assets/images/window.jpg" alt="image" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="../assets/images/balloon.jpg" alt="image" />
              </SwiperSlide>
              
              <SwiperSlide>
                <img src="../assets/images/clayBowl.jpeg" alt="image" />
              </SwiperSlide>
              
              <SwiperSlide>
                <img src="../assets/images/forest.jpg" alt="image" />
              </SwiperSlide>
            
            </Swiper>    
                    
        </article>
     );
}
 
export default Gallery;