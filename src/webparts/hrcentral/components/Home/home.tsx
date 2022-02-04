import * as React from 'react';
import styles from './home.module.scss';
import { IHomeProps } from './IHomeProps';
require('../Styles/customCSS.css');

export default function Home() {
    // var slideIndex = 1;

    // showSlides(slideIndex);

    // function plusSlides(n: any) {
    //     showSlides(slideIndex += n);
    // }

    // // Thumbnail image controls
    // function currentSlide(n: any) {
    //     showSlides(slideIndex = n);
    // }

    // function showSlides(n: any) {
    //     var i;
    //     var slides = document.getElementsByClassName("mySlides");
    //     var dots = document.getElementsByClassName("dot");
    //     if (n > slides.length) { slideIndex = 1 }
    //     if (n < 1) { slideIndex = slides.length }
        // for (i = 0; i < slides.length; i++) {
        //     // slides[i].style.display = "none";
        //     return <div style={{ display: slides[i] ? "block" : "none" }}></div>
        // }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        // // slides[slideIndex-1].style.display = "block";
        // <div style={{ display: slides[slideIndex - 1] ? "block" : "block" }}></div>
        // dots[slideIndex - 1].className += " active";
    //}

    return (

        <div>
            <div className="navbar navbar-expand-sm ml-5 col-sm-12 mr-5">
                <div className="container-fluid col-sm-11">
                    <a className="navbar-brand" href="#">
                        <img className="img-responsive" src={require('../../assets/logo1.png')} alt="Avatar Logo" style={{ width: '7em' }} />
                    </a>
                </div>
                <div className="dropdown rounded-pill col-sm-1" style={{ width: '230px' }} >
                    <div
                        className="row g-0 container-fluid dropbtn rounded-pill shadow-lg col-sm-12"
                    >
                        <div className="col-sm-4">
                            <div style={{ width: '50%' }}>
                                <img
                                    src={require('../../assets/Ellipse_1.png')}
                                    className="img-fluid rounded-pill"
                                    alt="..."
                                    style={{ width: '100%' }}
                                />
                            </div>
                        </div>
                        <div className="col-sm-8 align-items-start">
                            <div>
                                <h6 className="card-title text-start">Shubham Srivastwa</h6>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown-content" style={{ borderRadius: '10%' }}>
                        <a className="text-center" href="#">Profile</a>
                        <a className="text-center" href="#">Logoff</a>
                        <a className="text-center" href="#">Help</a>
                    </div>
                </div>
            </div>

            <div className="container col-sm-12 container-fluid">
                <div className="row align-items-start">
                    <div className="col-sm-8 mt-5">
                        <div>
                            <div className="container">
                                <div className="row">
                                    <div className="col align-self-centre">
                                        <h1 className="text-centre mt-5" style={{ color: 'goldenrod' }}> HR Central </h1>
                                        <h3 className="text-centre mt-2" style={{ color: 'navy' }}>Welcom to Incy Solution</h3>
                                        <p className="justify-content-end ml-5 pl-5" style={{ width: '100 %', color: 'navy' }}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Ut provident adipisci expedita atque aliquid nobis quaemagni laudantium, perferendis excepturi debitis porro exenim, nesciunt iusto incidunt qui cupiditate quis?</p>
                                    </div>
                                </div>
                                <p className="justify-content-end ml-5 pl-5" style={{ width: 'auto', color: 'navy' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Ut
                                    provident adipisci expedita atque aliquid nobis quae magni
                                    laudantium, perferendis excepturi debitis porro ex enim,
                                    nesciunt iusto incidunt qui cupiditate quis?
                                </p>
                            </div>
                        </div>
                    </div >
                    <div className="align-self-end col-sm-4">
                        <div className="slideshow-container" style={{ marginLeft: '80px' }}>
                            <div className="">
                                <div className="col-6 mt-3">
                                    <div className="mDIV card card-size default shadow-lg p-3 mb-3 mt-3" >
                                        <div className="card-body">Resource request</div>
                                    </div>
                                    <div className="card card-size default shadow-lg p-3 mb-3">
                                        <div className="card-body">Onboarding</div>
                                    </div>
                                    <div className="card card-size default shadow-lg p-3 mb-3">
                                        <div className="card-body">Your Profile</div>
                                    </div>
                                    <div className="card card-size default shadow-lg p-3 mb-sm-3">
                                        <div className="card-body">Attandance</div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="col-6 mt-3">
                                    <div className="card card-size default shadow-lg p-3 mb-3 mt-3">
                                        <div className="card-body">Leave Request</div>
                                    </div>
                                    <div className="card card-size default shadow-lg p-3 mb-3">
                                        <div className="card-body">IDP</div>
                                    </div>
                                    <div className="card card-size default shadow-lg p-3 mb-3">
                                        <div className="card-body">Recognisation</div>
                                    </div>
                                    <div className="card card-size default shadow-lg p-3 mb-sm-3">
                                        <div className="card-body">Exit Process</div>
                                    </div>
                                </div>
                            </div>
                            {/* <div>
                                <a className="prev" onClick={() => this.plusSlides(-1)} >&#10094;</a>
                                <a className="next" onClick={() => this.plusSlides(1)} >&#10095;</a>
                            </div> */}
                        </div>
                        <br />


                        {/* <div style={{ textAlign: 'center' }}>
                            <span className="dot" onClick={() => this.currentSlide(1)} ></span >
                            <span className="dot" onClick={() => this.currentSlide(2)}></span>
                        </div > */}
                    </div >
                </div >
            </div >
        </div >
    )
}