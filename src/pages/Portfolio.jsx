import "../styles/pages/_portfolio.scss";
const Portfolio = () => {
    return ( 
      <main className="main">
        <div className="container grid">
        <h2 className="hero__title">My projects</h2>
        <div className="gallery">
          <a
            href="https://purplehippo911.github.io/flexbox/"
            className="hero__item flexbox"
          >
            <img src="../assets/screenshots/flexForm.png" alt="flexbox" />
          </a>
          <a
            href="https://purplehippo911.github.io/SignUp_form/"
            className="hero__item signUp"
          >
            <img src="../assets/screenshots/singUP.jpg" alt="signUp"
          /></a>
          <a
            href="https://purplehippo911.github.io/pricingComponent"
            className="hero__item pricingComponent"
          >
            <img
              src="/../assets/screenshots/pricingComponent.png"
              alt="pricing Component"
            />
          </a>
          <a
            href="https://purplehippo911.github.io/weatherApp/"
            className="hero__item weatherApp"
          >
            <img src="/../assets/screenshots/weatherApp.png" alt="weatherApp" />
          </a>
          <a
            href="https://purplehippo911.github.io/Grid/"
            className="hero__item Grid"
          >
            <img src="/../assets/screenshots/tacoSite.png" alt="Grid" />
          </a>
          <a
            href="https://purplehippo911.github.io/GridTestimonials/"
            className="hero__item gridTestimonials"
          >
            <img
              src="/../assets/screenshots/gridTestimonials.png"
              alt="A grid testimonials section"
            />
          </a>
          <a
            href="https://purplehippo911.github.io/adviceGenerator/"
            className="hero__item advice"
          >
            <img
              src="/../assets/screenshots/adviceGen.png"
              alt="an advice generator"
            />
          </a>
          <a
            href="https://purplehippo911.github.io/asyncButton/"
            className="hero__item async"
          >
            <img
              src="/../assets/screenshots/async.png"
              alt="a web game with buttons"
            />
          </a>
          <a
            href="https://purplehippo911.github.io/Dinosaur_game/"
            className="hero__item dinosaur"
          >
            <img src="/../assets/screenshots/dinosaur.png" alt="a dinosaur game" />
          </a>
          <a
            href="https://purplehippo911.github.io/Js30/"
            className="hero__item js30"
          >
            <img src="/../assets/screenshots/js30.png" alt="some js projects" />
          </a>
          <a
            href="https://purplehippo911.github.io/3-column-preview-card-component/"
            className="hero__item threeColumns"
          >
            <img
              src="/../assets/screenshots/three.png"
              alt="three column preview card component"
            />
          </a>
          <a
            href="https://purplehippo911.github.io/interactiveRating/"
            className="hero__item rating"
          >
            <img src="/../assets/screenshots/rating.png" alt="rating component" />
          </a>
          <a
            href="https://purplehippo911.github.io/sunnySide/"
            className="hero__item sunnySide"
          >
            <img
              src="/../assets/screenshots/sunnySide.png"
              alt="sunnySide agency landing page"
            />
          </a>
        </div>
      </div>
    </main>
     );
}
 
export default Portfolio;