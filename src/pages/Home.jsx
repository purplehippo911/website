import Welcome from "../components/Welcome";
import "../styles/pages/_main";

const Home = () => {
    return ( 
        <div className="main">

            <section className="main-section">
                <div className="container container--main row">
                    <div className="col">
                    <Welcome/>
                    <h2 className="main__title">Who am I?</h2>
                    <p className="main__info">
                        Welcome to the world of Purplehippo911, a Norwegian teenager with a passion for coding.
                        This website is a hub for all things related to programming, web development, and technology. With expertise in HTML, CSS, Javascript, Python, and a little bit of C#, Purplehippo911 has a diverse range of skills that enable him to create stunning and interactive websites.
                        As a frontend developer, he specializes in Vue, React, and soon, Tailwind for CSS. Join Purplehippo911 on this journey as he shares his knowledge, experience, and love for coding with the world.
                    </p>
                    </div>
                    <figure className="main__picture">
                        <img src="/src/assets/images/shyguy.jpg" alt="my profile picture" />
                    </figure>
                </div>
            </section>

            <section className="second-section">
            <div className="container container--main row">
                <div className="col">
                <h2 className="second__title">Why did I learn to code?</h2>
                <p className="second__info">
                    The love for technology has always been a part of purplehippo's life, even at a young age.
                    In 2019, he decided to take his interest in technology to the next level by exploring the world of coding.
                    Starting with the basics of Python, he soon realized his true passion was in frontend development.
                    Eager to learn more, he delved into HTML and CSS, determined to master the skills necessary to build beautiful and functional websites.
                    The journey was not easy, and there were many monents of frustration and self-doubt along the way.
                    However, Purplehippo refused to give up, persevering through the challenges and setbacks.
                    After months of trial and error, he finally took the leap and began building his very own website.
                    From that moment on, his passion for coding continued to grow, and he has since become an expert in various programming languages and frontend frameworks.
                </p>
                </div>
            </div>
            </section>

            <section className="third-section">
            <div className="container container--main row">
                <div className="col">
                <h2 className="third__title">What am I doing with my life?</h2>
                <p className="third__info">
                    Well, aside from coding, Purplehippo has a wide range of hobbies and interests that keep him engaged and fuliflled.
                    He is an avid reader of novels and comics, finding joy in getting lost in new worlds and stories. Photography is also a passion of his, particularly capturing the beauty of nature. Cooking foreign cuisines is another hobby that he enjoys, always experimenting with new recipes and flavors.
                    In addition, he is a writer at heart, always coming up with creative ideas and stories. In fact, he has even managed to write and publish his own short story.
                    When he's not coding or pursuing his creative endeavors, Purplehippo enjoys watching long hours of Kdrama and other shows on Netflix, as well as taking walks to clear his mind.
                    And of course, he loves to game, with Overwatch 2 being one of his current favorites. 
                    Through various hobbies and interests, Purplehippo911 finds balance, inspiration, and joy in his life.
                </p>
                </div>
            </div>
            </section>

            <section className="fourth-section">
            <div className="container container--main row">
                <div className="col">
                <h2 className="fourth__title">Where can I learn more about you?</h2>
                <p className="fourth__title">
                    Well, you can check out my projects by checking my portfolio. You'll
                    find it on the navigation bar. The best way I can improve is by
                    continously getting some feedback.
                </p>
                </div>
            </div>
            </section>
        </div>
     );
}
 
export default Home;