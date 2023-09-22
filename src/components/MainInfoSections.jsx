import Welcome from "./Welcome";
import "../styles/pages/_main.scss";

const MainInfoSections = ({ place, sectionTitle, mainContent }) => {
    
    // this is for the rest of the content
   
        return ( 
            <section className={`${place}-section`}>
                <div className="container row">
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
 
export default MainInfoSections;