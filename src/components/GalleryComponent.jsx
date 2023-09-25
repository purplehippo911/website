// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const GalleryComponent = ({img1, img2, img3, img4, img5}) => {
    return ( 
        <Swiper className="swiper"
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}

                  >
                        {/* <!-- Slides --> */}
                        <SwiperSlide className="swiper-slide">
                            <img src={`/assets/images/${img1}`} alt="a pink balloon" />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={`/assets/images/${img2}`} alt="a tall building" />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={`/assets/images/${img3}`} alt="green leaves" />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={`/assets/images/${img4}`} alt="a forest in the distant" />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={`/assets/images/${img5}`} alt="more green leaves" />
                        </SwiperSlide>
        </Swiper>
     );
}
 
export default GalleryComponent;