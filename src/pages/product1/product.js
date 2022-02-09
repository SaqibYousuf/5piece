import React from 'react'
import './style2.scss'
import productImage from './productImage.png'
import belt from './belt.png'
import glasses from './glasses.png'
import wallet from './wallet.png'
import Watch from './watch.png'
import keychain from './keychain.png'
import poster from './posterImage.jpeg'
import "video-react/dist/video-react.css";
import { Player } from 'video-react'
import video from './videoProduct.mp4'
import moreImage1 from './moreImag1.jpeg'
import moreImage2 from './moreImage2.jpeg'



function Product1() {
    return (
        <div className='Page1'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">


                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navLinks">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#order">Order Now</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#Detail">Detail</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Images">More Images</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Reviews">Top Reviews</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <div>
                <div id='order' className="container bannerContainer">
                    <div className="imageBanner">
                        <img src={productImage} />
                    </div>
                    <div className="formDiv">
                        <div>
                            <h2>Book Your Order Now</h2>
                            <p>Rs 1299/- + 200 Delivery Charges</p>
                            <div className="formFields">

                                <label>
                                    <h6>Your Name</h6>
                                    <input className="form-control" />
                                </label>
                                <label>
                                    <h6>Your Mobile Number</h6>
                                    <input className="form-control" />
                                </label>

                                <label>
                                    <h6>Your City</h6>
                                    <input className="form-control" />
                                </label>

                                <label>
                                    <h6>Your Address</h6>
                                    <input className="form-control" />
                                </label>
                                <button>Order Now</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div id='Detail' className='details'>
                        <h3>Product Detail</h3>
                        <h4>Five Piece Mens Gift Set</h4>
                        <p className='acces'>Branded Luxury Leather Watch , Leather Wallet , Leather Belt , Long Lasting Perfume , Sunglasses</p>
                    </div>
                    <div className='details information'>
                        {/* <h3>Product Detail</h3> */}
                        <h4>Product Information</h4>
                        <ul>
                            <li>
                                Best leather Quality Products
                            </li>
                            <li>
                                Perfume long lasting 10 - 15 Hours
                            </li>
                            <li>
                                Best Packaging  Delivery All Over Pakistan
                            </li>
                            <li>
                                7 Days Easy Refundable Warranty
                            </li>
                            <li>
                                For any query Contact us : 0300-0000000
                            </li>
                        </ul>
                        <div className='video'>
                            {/* <video autoPlay={true}  controls>
                                <source src={video} type="video/mp4"/>
                            </video> */}

                            <Player
                                className="videoPlayer"
                                playsInline
                                autoPlay={true}
                                poster={poster}
                                src={video}
                            />
                        </div>
                        <div className='imagesDetail'>
                            <div className='imageText'>
                                <div>
                                    <img src={belt} />
                                </div>
                                <div>
                                    <h4>Leather Belt</h4>
                                    <p>These have a double role to play as far as apparel is concerned. Not only are they functional in keeping a pair of trousers in place, but also add a nice touch to the overall appearance. As a belt is worn around the waist, it produces a visual balance by distributing the appeal of the outfit to the entire body.</p>
                                </div>
                            </div>

                            <div className='imageText'>
                                <div>
                                    <img src={glasses} />
                                </div>
                                <div>
                                    <h4>Sun Glasses</h4>
                                    <p>The most important benefit of wearing sunglasses is that they protect your eyes from ultraviolet (UV) light. UV light can have harmful effects on the eyelid, cornea, lens and retina.</p>
                                </div>
                            </div>

                            <div className='imageText'>
                                <div>
                                    <img src={wallet} />
                                </div>
                                <div>
                                    <h4>Wallet</h4>
                                    <p>It's important to have a wallet for several reasons. A wallet is important to keep all your personal belongings, travel documents, money and cards protected from theft, damage or weather exposure. It is also a great accessory that can help to define your style and be part of your image.</p>
                                </div>
                            </div>

                            <div className='imageText'>
                                <div>
                                    <img src={Watch} className="watch" />
                                </div>
                                <div>
                                    <h4>Watch</h4>
                                    <p>As shown above, watches are portable timepieces, used to measure time and intervals; and at the same time, have different advantages. Wearing a watch is as important as food when you relate it to fashion accessories. As a matter of fact, wrist watches are one of the best devices for daily human usage.</p>
                                </div>
                            </div>

                            <div className='imageText'>
                                <div>
                                    <img src={keychain} className="keychain" />
                                </div>
                                <div>
                                    <h4>Keychain</h4>
                                    <p>A decent keyring will keep your keys gathered together and secure, they also provide ease of access to your keys when reaching into your bag for them. You are more likely to easily locate your keys when an attractive key chain or fob of some sort has been attached to them.</p>
                                </div>
                            </div>
                        </div>
                        {/* <p className='acces'>Branded Luxury Leather Watch , Leather Wallet , Leather Belt , Long Lasting Perfume , Sunglasses</p> */}
                    </div>
                    <div id='Images' className='details'>
                        {/* <h3>Product Detail</h3> */}
                        <h4>More Images</h4>
                        <div className='imagesDiv'>
                            <div className='imageMore' style={{ backgroundImage: `url('${moreImage1}')` }}></div>
                            <div className='imageMore' style={{ backgroundImage: `url('${moreImage2}')` }}></div>
                        </div>
                    </div>

                    <div id='Reviews' className='details'>
                        {/* <h3>Product Detail</h3> */}
                        <h4>Reviews</h4>
                        <div className='reviewBox'>
                            <div className='reviewDiv'>
                                <div>
                                    Best Quality hay Jo cheez Dhikayi Same wohi cheez mili hay
                                </div>
                                <div class="starDiv">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-half" viewBox="0 0 16 16">
                                    <path
                                        d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                                </svg>
                            </div>
                            <div>
                                ~Ali Sheeraz
                            </div>
                            </div>
                            <div  className='reviewDiv'>
                                <div>
                                    Best Quality hay Jo cheez Dhikayi Same wohi cheez mili hay
                                </div>
                                <div class="starDiv">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-half" viewBox="0 0 16 16">
                                    <path
                                        d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                                </svg>
                            </div>
                            <div>
                                ~Saqib Yousuf
                            </div>
                            </div>
                            <div  className='reviewDiv'>
                                <div>
                                    Best Quality hay Jo cheez Dhikayi Same wohi cheez mili hay
                                </div>
                                <div class="starDiv">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-half" viewBox="0 0 16 16">
                                    <path
                                        d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                                </svg>
                            </div>
                            <div>
                                ~Huzaifa Aijaz
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product1