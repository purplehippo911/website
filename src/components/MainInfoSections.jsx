import Welcome from "./Welcome";
import "../styles/pages/_main.scss";

const MainInfoSections = ({ isHeroContent,place, sectionTitle, mainContent }) => {
    
    // this is for the rest of the content
    if(isHeroContent != true) {
        return ( 
            <section className={`${place}-section`}>
                <div className="container container--main row">
                    <div className="col">
                        <h2 className={`${place}__title`}>{sectionTitle}</h2>
                        <p className={`${place}__info`}>
                        { mainContent }
                        </p>
                    </div>
                </div>
            </section>
         );
    }

    // this is for the hero content
    if(isHeroContent === true) {
        return ( 
            <section className={`${place}-section`}>
                <div className="container container--main row">
                    <div className="col">
                        <Welcome/>
                        <h2 className={`${place}__title`}>{sectionTitle}</h2>
                        <p className={`${place}__info`}>
                        { mainContent }
                        </p>
                    </div>
                    <figure className="main__picture">
                        <img src="../assets/images/shyguy.jpg" alt="my profile picture" />
                    </figure>
                    
                </div>
            </section>
         );
    }
}
 
export default MainInfoSections;