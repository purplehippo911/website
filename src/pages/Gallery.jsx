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

const Gallery = () => {
  let id = 0;
  return ( 
      <article className="gallery">
          <h1 className="gallery__title">Gallery</h1>
              {
                GalleryImages.map((gallery) => {
                  return (
                    <Swiper key={id}
                      // install Swiper modules
                      slidesPerView={1}
                      spaceBetween={50}
                      loop={true}
                      zoom={true}
                      navigation
                      keyboard={{
                        enabled: true,
                      }}
                      modules={[Keyboard, Navigation, Pagination, A11y, EffectCards]} effect="cards"
                      pagination={{ clickable: true }}
                    >
                      {
                        gallery.map((item) => {
                          const imgURL = item.imgURL;
                          const imgAlt = item.imgAlt;
                          id++;
                          return (
                            <SwiperSlide key={id}>
                              <img src={imgURL} alt={imgAlt} />
                            </SwiperSlide>
                          )
                        })
                      }
              
                    </Swiper>
                  )
              })
            }                  
      </article>
   );
}
 
export default Gallery;