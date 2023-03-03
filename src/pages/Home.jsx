import Welcome from "../components/Welcome";

const Home = () => {
    return ( 
        <div>
            <Welcome/>

            <section class="main-section">
            <div class="container container-main row">
                <div class="col">
                <h2 clas="main__title">Who am I?</h2>
                <p class="main__info">
                    Random norwegian teenager who loves to code in his freetime. I know
                    some HTML, CSS and I'm currently learning more about Javascript. I
                    go by as purplehippo911, in the coding world.
                </p>
                <figure class="main__picture">
                    <img src="/src/assets/images/shyguy.jpg" alt="my github profile picture" />
                </figure>
                </div>
            </div>
            </section>

            <section class="second-section">
            <div class="container container-main row">
                <div class="col">
                <h2 class="second__title">Why did I learn to code?</h2>
                <p class="second__info">
                    I remember that I always have had a passion for technology when I
                    was younger. I was just facinated by it. And in 2019, or something I
                    started with learning the basics of python. Then I went over to
                    learning HTML and CSS, and at the same time falling in love with
                    frontend. It was of course difficult in the start, and I gave up
                    multiple times on the way. After many months of trying and failing,
                    have I finally started on my own website.
                </p>
                </div>
            </div>
            </section>

            <section class="third-section">
            <div class="container container-main row">
                <div class="col">
                <h2 class="third__title">What am I doing with my life?</h2>
                <p class="third__info">
                    I dunno. I also like to read novels and comics, take photos of
                    nature, cook food, especially from foreign cuisines. Play games like
                    sky on my nintendo switch, and of course watch youtube shorts or a
                    netflix series called dark.
                </p>
                </div>
            </div>
            </section>

            <section class="fourth-section">
            <div class="container container-main row">
                <div class="col">
                <h2 class="fourth__title">Where can I learn more about you?</h2>
                <p class="fourth__title">
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