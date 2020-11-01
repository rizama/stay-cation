import React from 'react'
import Fade from 'react-reveal/Fade';

// images
import ImageHero from 'assets/images/img-hero.jpg';
import ImageHeroFrame from 'assets/images/img-hero-frame.jpg';
import IconCities from 'assets/icons/icon-cities.svg';
import IconTraveler from 'assets/icons/icon-traveler.svg';
import IconTreasure from 'assets/icons/icon-treasure.svg';

import Button from 'elements/Button';

import numberFormat from "utilities/FormatNumber";

function Hero(props) {

    const showMostPicked = () => {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }

    return (
        <Fade bottom>
            <section className="container pt-4">
                <div className="row align-items-center">
                    <div className="col-auto pr-5" style={{ width: 530 }}>
                        <h1 className="font-weight-bold line-height-1 mb-3">
                            Forget Busy Work, <br />
                        Start Next Vacation
                    </h1>
                        <p className="mb-3 font-weight-light text-gray-500 w-75" style={{ lineHeight: "170%" }}>
                            We provide what you need to enjoy your holiday with family. Time to make another  memorable moments.
                    </p>
                        <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked} style={{ padding: 10 }}>Show Me</Button>

                        <div className="row" style={{ marginTop: "80px" }}>
                            <div className="col-auto" style={{ marginRight: 35 }}>
                                <img src={IconTraveler} alt={`${props.data.travelers} Travelers`} width="36" height="36" />
                                <h6 className="mt-3">
                                    {numberFormat(props.data.travelers)} <span className="text-gray-500 font-weight-light">Travelers</span>
                                </h6>
                            </div>

                            <div className="col-auto" style={{ marginRight: 35 }}>
                                <img src={IconTreasure} alt={`${props.data.treasures} Treasures`} width="36" height="36" />
                                <h6 className="mt-3">
                                    {numberFormat(props.data.treasures)} <span className="text-gray-500 font-weight-light">Treasures</span>
                                </h6>
                            </div>

                            <div className="col-auto">
                                <img src={IconCities} alt={`${props.data.cities} Cities`} width="36" height="36" />
                                <h6 className="mt-3">
                                    {numberFormat(props.data.cities)} <span className="text-gray-500 font-weight-light">Cities</span>
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 pl-5">
                        <div style={{ width: 520, height: 410 }}>
                            <img src={ImageHero} alt="Room with couches" className="img-fluid position-absolute" style={{ margin: '-30px 0 0 -30px', zIndex: 1 }} />
                            <img src={ImageHeroFrame} alt="Room with couches frame" className="img-fluid position-absolute" style={{ margin: '0 -15px -15px 0' }} />
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    )
}

export default Hero

