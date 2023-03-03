const Gallery = () => {

    const swiper = new Swiper(".swiper", {
        // Optional parameters
        zoom: true,
        direction: "horizontal",
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
          enabled: true,
        },

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        // And if we need scrollbar
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });

    return ( 
        <div className="gallery">
            <section className="swiper-section">
                <div className="container row">
                {/* <!-- Slider main container --> */}
                  <div div className="swiper">
                    {/* <!-- Additional required wrapper --> */}
                    <div className="swiper-wrapper">
                        {/* <!-- Slides --> */}
                        <div className="swiper-slide">
                            <img src="/src/assets/images/balloon.jpg" alt="a pink balloon" />
                        </div>
                        <div className="swiper-slide">
                            <img src="/src/assets/images/building.jpg" alt="a tall building" />
                        </div>
                        <div className="swiper-slide">
                            <img src="/src/assets/images/greenleaves.jpg" alt="green leaves" />
                        </div>
                        <div className="swiper-slide">
                            <img src="/src/assets/images/forest.jpg" alt="a forest in the distant" />
                        </div>
                        <div className="swiper-slide">
                            <img src="/src/assets/images/leaves.jpg" alt="more green leaves" />
                        </div>
                        <div className="swiper-slide">
                            <img src="/src/assets/images/park.jpg" alt="a big park" />
                        </div>
                    </div>
                    {/* <!-- If we need pagination --> */}
                    <div className="swiper-pagination"></div>
                    {/* <!-- If we need navigation buttons --> */}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    {/* <!-- If we need scrollbar --> */}
                    <div className="swiper-scrollbar"></div>
                  </div>
                </div>
            </section>
            <section className="swiper-section">
                <div className="container row">
                    {/* <!-- Secondary Slider main container --> */}
                    <div className="swiper">
                    {/* <!-- Additional required wrapper --> */}
                        <div className="swiper-wrapper">
                            {/* <!-- Slides --> */}
                            <div className="swiper-slide">
                                <img src="/src/assets/images/tower.jpg" alt="more green leaves" />
                            </div>
                            <div className="swiper-slide">
                                <img src="/src/assets/images/tree.jpg" alt="a tree in winter" />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src="/src/assets/images/window.jpg"
                                    alt="zoomed in on some curtains"
                                />
                            </div>
                            <div className="swiper-slide">
                                <img src="/src/assets/images/clock.jpg" alt="a clock" />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src="/src/assets/images/classNameroom.jpg"
                                    alt="a classNamerom from a chair's hole perspective"
                                />
                            </div>
                        </div>
                        {/* <!-- If we need pagination --> */}
                        <div className="swiper-pagination"></div>
                        {/* <!-- If we need navigation buttons --> */}
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                        {/* <!-- If we need scrollbar --> */}
                        <div className="swiper-scrollbar"></div>
                    </div>
                </div>
                </section>
                <section className="swiper-section">
                <div className="container row">
                    {/* <!-- Secondary Slider main container --> */}
                    <div className="swiper">
                    {/* <!-- Additional required wrapper --> */}
                    <div className="swiper-wrapper">
                        {/* <!-- Slides --> */}
                        <div className="swiper-slide">
                            <img src="/src/assets/images/rainonwindow.jpg" alt="rain on window" />
                        </div>
                        <div className="swiper-slide">
                            <img src="/src/assets/images/drops.jpg" alt="rain drops" />
                        </div>
                        <div className="swiper-slide">
                            <img
                            src="/src/assets/images/road.jpg"
                            alt="a road with a soccer field⚽  in the bakground"
                        />
                        </div>
                        <div className="swiper-slide">
                            <img src="/src/assets/images/redbuilding.jpg" alt="a red building" />
                        </div>
                        <div className="swiper-slide">
                            <img src="/src/assets/images/torget.jpg" alt="Tøyen torg" />
                        </div>
                    </div>
                    {/* <!-- If we need pagination --> */}
                    <div className="swiper-pagination"></div>
                    {/* <!-- If we need navigation buttons --> */}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    {/* <!-- If we need scrollbar --> */}
                    <div className="swiper-scrollbar"></div>
                    </div>
                </div>
            </section>
            <div className="quote">
            <p>
                PS: I took all of the pictures here, except for the red building and the
                one of "Tøyen Torg". That was my little brother.
            </p>
            </div>
        </div>
     );
}
 
export default Gallery;