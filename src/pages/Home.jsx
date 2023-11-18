import Welcome from "../components/Greeting";
import Card from "../components/Card";
import Advice from "../components/Advice";
import SkillsList from "../utils/SkillsList";
import "../styles/pages/_main.scss";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Keyboard, EffectCards, EffectFade, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/effect-fade';

const Home = () => {
    let id = 0;

    return ( 
        <article>
            <article className="hero-section">
                <div className="container row">
                    <div className="col">
                        <Welcome/>
                        <h1 className="hero__title"> I'm Omer</h1>
                        <p className="hero__info">
                            I am an enthusiastic self-taught web developer and graphic designer.
                        </p>
                        <a className="hero__button btn" href="#card-introduction">Check me out</a>
                    </div>
                    <picture className="hero__picture col">
                        <img src="/assets/images/mainProfilePic.jpeg" alt="my profile picture" />
                    </picture>
                </div>
            </article>
                     
            <article className="card card-introduction" id="card-introduction">
                <div className="container col">
                    <div className="grid">
                        <div className="col col-info">
                             <h2 className="col__title">Introduction</h2>
                            <p>
                                Welcome to the world of Omer, an Ethiopian-Norwegian teenager with a passion for coding, graphic design, video editing, writing and photography.
                                I love to learn new things and challenge myself.
                            </p>
                        </div>

                        <picture className="col">
                            <img src="/assets/images/profilePic2.jpg" alt="another picture of me" />
                        </picture>

                        <Advice/>
                    </div>

                </div>
            </article>

            <article className="card card-skills">
                <div className="container col">
                    <h2 className="card__title">My Skills</h2>
                    {
                        SkillsList.map((lists) => {
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
                            modules={[Keyboard, Navigation, Pagination, A11y, EffectCoverflow]} effect="coverflow"
                            pagination={{ clickable: true }}
                            >
                            {
                                lists.map((skill) => {
                                const skillsTitle = skill.skillsTitle;
                                const skillsContent = skill.skillsContent;
                                const skillsImgURL = skill.skillsImgURL;
                                const skillsImgAlt = skill.skillsImgAlt;
                                id++;
                                return (
                                    <SwiperSlide key={id} className="row">
                                        <div className="col">
                                            <h3>{skillsTitle}</h3>
                                            <div className="col">
                                                {skillsTitle== "Content Creation" ? <div> {skillsContent} <a href="https://www.noverstudio.com" target="_blank">Noverstudio.com</a> </div> : skillsContent
                                                }
                                            </div>
                                        </div>
                                        <picture className="col">
                                            {skillsTitle != "Video Editing" && <img src={skillsImgURL} alt={skillsImgAlt} /> }
                                            {skillsTitle == "Video Editing" && 
                                                <video 
                                                    src="/assets/åpen_dag_motion_graphics.mp4" 
                                                    controls 
                                                    poster="/assets/screenshots/motionGraphicThumbnail.png"
                                                    className="skills__video-editing">

                                                </video>
                                            }
                                        </picture>
                                    </SwiperSlide>
                                )
                                })
                            }
                    
                            </Swiper>
                        )
                        })
                    }                  
                </div>
            </article>

            <article className="card card-education">
                <div className="container col">
                    <h2 className="card__title card__title__education">Education</h2>
                    <div className="row">
                        <picture className="col">
                            <img src="/assets/images/educationImage.webp" alt="Picture of people graduating from school." />
                        </picture>
                        <div className="education-section col">
                            <div className="education-item col">
                                <strong className="education__period">2019 - ~</strong>
                                <h3 className="education__place">Self-taught Developer</h3>
                            </div>
                            <div className="education__item col">
                                <strong className="education__period">2023 - ~</strong>
                                <a href="https://elvebakken.vgs.no/" target="_blank" className="education__place">Elvebakken Upper Secondary School</a>
                                <p>IT and Media</p>
                            </div>
                        </div>

                    </div>

                </div>
            </article>

            <article className="card card-about-me" id="about-me">
                <div className="container grid">
                    <h2 className="card__title"> About Me </h2>
                    <div className="col-wrapper grid">
                        <section className="col">
                            <p className="card__info">
                                My passion for technology began at a pretty young age, and started pursuing coding in 2019 and eventually began learning Python.
                                I delved into HTML and CSS, mastering the skills needed to build functional websites.
                                Despite challenges and self-doubt, I persevered and built my own website, a country-search app and much more, becoming proficient in various programming languages and frontend frameworks.
                                In my freetime, I enjoy reading, photography, cooking, writing, watching Netflix series like Alice in Borderland and Dark, taking walks, gaming, and finding inspiration.
                                My curiosity makes me eager to try out new things and experiment.
                            </p>
                        </section>
                            <picture>
                                <img src="/assets/images/profilePic2.jpg" alt="another picture of me" />
                            </picture>
                    </div>
                </div>
            </article>   
        </article>
    );
}
 
export default Home;