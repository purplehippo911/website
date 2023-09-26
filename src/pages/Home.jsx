import Card from "../components/Card";
import Welcome from "../components/Welcome";
import "../styles/pages/_main.scss";

const Home = () => {

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
                        <a className="hero__button btn" href="#about-me">Check me out</a>
                    </div>
                    <figure className="hero__picture">
                        <img src="/assets/icons/MuggieYellow.webp" alt="my profile picture" />
                    </figure>
                </div>
            </article>
            <article className="card" id="about-me">
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
                        <section className="col col-second">
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
            <article className="card card2">
                <div className="container col">
                    <h2 className="card__title">Education</h2>
                    <div className="row">
                        <div className="col">
                            <div className="col">
                                <strong>2019 - ~</strong>
                                <h3>Self-taught Developer</h3>
                            </div>
                            <div className="col">
                                <strong>2023 - ~</strong>
                                <h3>Elvebakken Upper Secondary School</h3>
                                <strong>IT and media</strong>
                            </div>
                        </div>

                        <picture className="col">
                            <img src="/assets/images/education__img.png" alt="Picture of people graduating from school." />
                        </picture>
                    </div>

                </div>
            </article>
        </article>
    );
}
 
export default Home;