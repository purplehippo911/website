import "../styles/pages/_main.scss";

const Card = ({ sectionTitle, mainContent }) => {
   
        return ( 
            <div className="content">
                <h1>{sectionTitle}</h1>
                <h1>{mainContent}</h1>
            </div>
         );  
}
 
export default Card;