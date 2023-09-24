import Card from "../components/Card";
import Welcome from "../components/Welcome";
import "../styles/pages/_main.scss";

const Home = () => {

    return ( 
        <article>
            <section className="hero-section">
                <div className="container row">
                    <div className="col">
                        <Welcome/>
                        <h1 className="hero__title"> I'm Muggie</h1>
                        <p className="hero__info">
                            I am an enthusiastic self-taught web developer and graphic designer.
                        </p>
                        <a className="hero__button btn" href="#first">Check me out</a>
                    </div>
                    <figure className="hero__picture">
                        <img src="/assets/icons/shyguy.jpg" alt="my profile picture" />
                    </figure>
                </div>
            </section>
            <Card
                id="first"
                sectionTitle="Why did I learn to code?"
                mainContent="The love for technology has always been a part of purplehippo's life, even at a young age.
                    In 2019, he decided to take his interest in technology to the next level by exploring the world of coding.
                    Starting with the basics of Python, he soon realized his true passion was in frontend development.
                    Eager to learn more, he delved into HTML and CSS, determined to master the skills necessary to build beautiful and functional websites.
                    The journey was not easy, and there were many monents of frustration and self-doubt along the way.
                    However, Purplehippo refused to give up, persevering through the challenges and setbacks.
                    After months of trial and error, he finally took the leap and began building his very own website.
                    From that moment on, his passion for coding continued to grow, and he has since become an expert in various programming languages and frontend frameworks."/>
            <Card
                id="second"
                sectionTitle="Do I have any other hobbys"
                mainContent="Well, aside from coding, Purplehippo has a wide range of hobbies and interests that keep him engaged and fuliflled.
                He is an avid reader of novels and comics, finding joy in getting lost in new worlds and stories. Photography is also a passion of his, particularly capturing the beauty of nature. Cooking foreign cuisines is another hobby that he enjoys, always experimenting with new recipes and flavors.
                In addition, he is a writer at heart, always coming up with creative ideas and stories. In fact, he has even managed to write and publish his own short story.
                When he's not coding or pursuing his creative endeavors, Purplehippo enjoys watching long hours of Kdrama and other shows on Netflix, as well as taking walks to clear his mind.
                And of course, he loves to game, with Overwatch 2 being one of his current favorites.
                Through various hobbies and interests, Purplehippo911 finds balance, inspiration, and joy in his life."/>
        </article>
    );
}
 
export default Home;