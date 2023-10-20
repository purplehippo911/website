// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Keyboard, EffectCards, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/effect-fade';

const SwiperComponent = ({ mainObject, isImageGallery   }) => {
    let id = 0;
    {
        SkillsList.map((items) => {
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
                items.map((item) => {
                    if (!isImageGallery)
                {
                    const skillsTitle = item.skillsTitle;
                    const skillsContent = item.skillsContent;
                    const skillsImgURL = item.skillsImgURL;
                    const skillsImgAlt = item.skillsImgAlt;
                    const content = () => {
                        
                    }
                }  
                id++;
                return (
                    <SwiperSlide key={id}>
                        
                    </SwiperSlide>
                )
                })
            }
    
            </Swiper>
        )
        })
    }                  
}