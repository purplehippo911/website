import "../styles/pages/_portfolio";
const Portfolio = () => {
    return ( 
      <main class="main">
        <div class="container grid">
        <h2 class="hero__title">My projects</h2>
        <div class="gallery">
          <a
            href="https://purplehippo911.github.io/flexbox/"
            class="hero__item flexbox"
          >
            <img src="../assets/screenshots/flexForm.png" alt="flexbox" />
          </a>
          <a
            href="https://purplehippo911.github.io/SignUp_form/"
            class="hero__item signUp"
          >
            <img src="../assets/screenshots/singUP.jpg" alt="signUp"
          /></a>
          <a
            href="https://purplehippo911.github.io/pricingComponent"
            class="hero__item pricingComponent"
          >
            <img
              src="/src/assets/screenshots/pricingComponent.png"
              alt="pricing Component"
            />
          </a>
          <a
            href="https://purplehippo911.github.io/weatherApp/"
            class="hero__item weatherApp"
          >
            <img src="/src/assets/screenshots/weatherApp.png" alt="weatherApp" />
          </a>
          <a
            href="https://purplehippo911.github.io/Grid/"
            class="hero__item Grid"
          >
            <img src="/src/assets/screenshots/tacoSite.png" alt="Grid" />
          </a>
          <a
            href="https://purplehippo911.github.io/GridTestimonials/"
            class="hero__item gridTestimonials"
          >
            <img
              src="/src/assets/screenshots/gridTestimonials.png"
              alt="A grid testimonials section"
            />
          </a>
          <a
            href="https://purplehippo911.github.io/adviceGenerator/"
            class="hero__item advice"
          >
            <img
              src="/src/assets/screenshots/adviceGen.png"
              alt="an advice generator"
            />
          </a>
          <a
            href="https://purplehippo911.github.io/asyncButton/"
            class="hero__item async"
          >
            <img
              src="/src/assets/screenshots/async.png"
              alt="a web game with buttons"
            />
          </a>
          <a
            href="https://purplehippo911.github.io/Dinosaur_game/"
            class="hero__item dinosaur"
          >
            <img src="/src/assets/screenshots/dinosaur.png" alt="a dinosaur game" />
          </a>
          <a
            href="https://purplehippo911.github.io/Js30/"
            class="hero__item js30"
          >
            <img src="/src/assets/screenshots/js30.png" alt="some js projects" />
          </a>
          <a
            href="https://purplehippo911.github.io/3-column-preview-card-component/"
            class="hero__item threeColumns"
          >
            <img
              src="/src/assets/screenshots/three.png"
              alt="three column preview card component"
            />
          </a>
          <a
            href="https://purplehippo911.github.io/interactiveRating/"
            class="hero__item rating"
          >
            <img src="/src/assets/screenshots/rating.png" alt="rating component" />
          </a>
          <a
            href="https://purplehippo911.github.io/sunnySide/"
            class="hero__item sunnySide"
          >
            <img
              src="/src/assets/screenshots/sunnySide.png"
              alt="sunnySide agency landing page"
            />
          </a>
        </div>
      </div>
    </main>
     );
}
 
export default Portfolio;