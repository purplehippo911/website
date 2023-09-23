import "../styles/pages/_main.scss";

const Card = ({ id, sectionTitle, mainContent }) => {
   
        return ( 
            <section className="card" id={id}>
                <div className="container row">
                    <div className="col">
                        <h2 className="card__title">{sectionTitle}</h2>
                        <p className="card__info">
                            { mainContent }
                        </p>
                    </div>
                </div>
            </section>
         );  
}
 
export default Card;