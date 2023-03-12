// import styling
import "../styles/pages/_gallery";
import GalleryComponent from "../components/GalleryComponent";

const Gallery = () => {

    return ( 
        <article className="gallery_article">

        <div className="gallery">

            <section className="swiper-section">
                <div className="container row">
                {/* <!-- Slider main container --> */}
                    <GalleryComponent
                        img1="balloon.jpg"
                        img2={'building.jpg'}
                        img3={'greenleaves.jpg'}
                        img4={'forest.jpg'}
                        img5={'leaves.jpg'}
                    />
                </div>
            </section>

            <section className="swiper-section">
                <div className="container row">
                    <GalleryComponent
                        img1={'tower.jpg'}
                        img2={'tree.jpg'}
                        img3={'window.jpg'}
                        img4={'clock.jpg'}
                        img5={'classroom.jpg'}
                    />
                </div>
                </section>

                <section className="swiper-section">
                    <div className="container row">
                        <GalleryComponent
                            img1={'rainonwindow.jpg'}
                            img2={'drops.jpg'}
                            img3={'park.jpg'}
                            img4={'torget.jpg'}
                            img5={'road.jpg'}
                        />
                </div>
            </section>

        </div>
            <div className="quote">
            <p>
                PS: I took most of the pictures here.
            </p>
            </div>
        </article>
     );
}
 
export default Gallery;