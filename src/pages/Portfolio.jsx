import "../styles/pages/_portfolio.scss";
import Projects from "../utils/Projects"; 

const Portfolio = () => {
    let key = 0;
    return ( 
      <div className="container grid">
        <h1 className="portfolio__title">My projects</h1>
        <div className="gallery">

          { 
            Projects.map(({title, url, imgURL, imgAlt, githubRepo}) => {
              return (
                <section className="gallery__item" key={key++}>
                    <a href={url}>
                      <img src={imgURL} alt={imgAlt} />
                    </a>
                    <div className="gallery__item__overlay">
                        <div className="container row">
                            <a href={url}>
                              <h2>{title}</h2>
                              <p>{imgAlt}</p>
                            </a>
                            <a href={githubRepo} className="repo-link">Link to Source Code</a>
                        </div>
                    </div>
                </section>
            );
          })
          }
        </div>
    </div>
     );
}
 
export default Portfolio;