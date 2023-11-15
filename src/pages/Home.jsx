import Welcome from "../components/Welcome";
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
                        <h1 className="hero__title"> I'm Muggie</h1>
                        <p className="hero__info">
                            I am an enthusiastic self-taught web developer and graphic designer.
                        </p>
                        <a className="hero__button btn" href="#card-introduction">Check me out</a>
                    </div>
                    <picture className="hero__picture col">
                        <img src="/assets/icons/MuggieYellow.webp" alt="my profile picture" />
                    </picture>
                </div>
            </article>
                     
            <article className="card card-introduction" id="card-introduction">
                <div className="container col">
                    <div className="grid">
                        <div className="col col-info">
                             <h2 className="col__title">Introduction</h2>
                            <p>
                                Welcome to the world of Muggie, a Norwegian teenager with a passion for coding, graphic design, writing and photography.
                                He loves to learn new things and challenge himself.
                            </p>
                        </div>

                        <picture className="col">
                            <img src="/assets/icons/shyguy.png" alt="" />
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
                                            <img src={skillsImgURL} alt={skillsImgAlt} />
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
                    <h2 className="card__title">Education</h2>
                    <div className="row">
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

                        <picture className="col">
                            <img src="/assets/images/educationImage.webp" alt="Picture of people graduating from school." />
                        </picture>
                    </div>

                </div>
            </article>

            <article className="card card-about-me" id="about-me">
                <div className="container grid">
                    <h2 className="card__title"> About Me </h2>
                    <div className="col-wrapper grid">
                        <section className="col">
                            <p className="card__info">
                                His passion for technology began at a young age, Muggie, a young tech enthusiast, pursued coding in 2019 and eventually began learning Python.
                                He delved into HTML and CSS, mastering the skills needed to build functional websites.
                                Despite challenges and self-doubt, he persevered and built his own website, a country-search app and much more, becoming proficient in various programming languages and frontend frameworks.
                                In his freetime, He enjoys reading, photography, cooking, writing, watching Netflix series like Alice in Borderland and Dark, taking walks, gaming, and finding inspiration.
                                His curiosity makes him eager to try out new things and experiment.
                            </p>
                        </section>
                        <section className="col col-secondary">
                            <section className="row">
                                <strong>Personality:</strong>
                                <p>INFP</p>
                            </section>
                            <section className="row">
                                <strong>Nationality:</strong>
                                <p>Ethiopian-norwegian</p>
                            </section>
                            <section className="col">
                                <strong>Languages:</strong>
                                <ul>
                                    <li>Norwegian 🇳🇴</li>
                                    <li>English 🇬🇧</li>
                                    <li>German 🇩🇪 </li>
                                    <li>Oromian 🇪🇹 </li>
                                </ul>
                            </section>
                        </section>
                    </div>
                </div>
            </article>   
        </article>
    );
}
 
export default Home;