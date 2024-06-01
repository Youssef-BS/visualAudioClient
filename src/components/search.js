import React, { useState } from 'react';
import SideMenu from './SideMenu/SideMenu';
import { GoX } from "react-icons/go";
import { FiMenu } from "react-icons/fi";

import Cart from './Cart';
import { Link } from 'react-router-dom';
const MainHeader = () => {
    const [isInputEmpty, setIsInputEmpty] = useState(false);

    const handleInputChange = (event) => {
        setIsOpen(event.target.value != '');
        if(isOpen){
            event.target.value=""
        }
    };
    const [showCart, setShowCart] = useState(false);

    const toggleCart = () => {
        setShowCart(!showCart);
    };
    
        const [isMenuOpen, setIsMenuOpen] = useState(false);
      
        const toggleMenu = () => {
          setIsMenuOpen(prevState => !prevState);
        };
        const [isMenuOpen2, setIsMenuOpen2] = useState(false);
      
        const toggleMenu2 = () => {
          setIsMenuOpen2(prevState => !prevState);
        };
    const ddfullscreenmenu = {
        togglemenu: function() {
            // Add your togglemenu logic here
            console.log('Toggle menu function is executed');
        }
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = (event) => {
        setIsOpen(!isOpen);

    };
    return (
        <>
        
        <SideMenu isOpen={isMenuOpen} isopen2={isMenuOpen2}/>
        
        <div className="main-header">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col menu-col">
                        <div className="row menu-row">
                            <div className="col logo my-auto">
                                <Link to="/"><img className="header-logo" src="/images/logo1.svg" alt="Logo" /></Link>
                            </div>
                            <div className="col-auto button menu">
                                {isMenuOpen ?<a href="#" className="menu-open clicked"onClick={toggleMenu}>
                                <GoX className="las la-bars" style={{ fontSize: '25px', position: 'absolute', left: '10px', height: '25px', top: '50%', transform: 'translateY(-50%)' }} />
                                    <span >Products</span>
                                </a> :<a href="#" className="menu-open clicked"onClick={toggleMenu}>
                                <FiMenu className="las la-bars" style={{ fontSize: '25px', position: 'absolute', left: '10px', height: '25px', top: '50%', transform: 'translateY(-50%)' }} />
                                    <span >Products</span>
                                </a> }
                                
                            </div>
                            <div className="col-auto button menu mobile">
                                <div id="navtoggler" onClick={toggleMenu2}>
                                <FiMenu className="las la-bars" style={{ fontSize: '25px', position: 'absolute', left: '10px', height: '25px', top: '50%', transform: 'translateY(-50%)' }} />
                                </div>
                            </div>
                            {/* <div className="col-auto icon d-none">
                                <a href="#" className="search-toggle">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.377 11.6288H12.587L12.307 11.3588C13.507 9.9588 14.127 8.0488 13.787 6.0188C13.317 3.2388 10.997 1.0188 8.19697 0.678799C3.96697 0.158799 0.406968 3.7188 0.926968 7.9488C1.26697 10.7488 3.48697 13.0688 6.26697 13.5388C8.29697 13.8788 10.207 13.2588 11.607 12.0588L11.877 12.3388V13.1288L16.127 17.3788C16.537 17.7888 17.207 17.7888 17.617 17.3788C18.027 16.9688 18.027 16.2988 17.617 15.8888L13.377 11.6288ZM7.37697 11.6288C4.88697 11.6288 2.87697 9.6188 2.87697 7.1288C2.87697 4.6388 4.88697 2.6288 7.37697 2.6288C9.86697 2.6288 11.877 4.6388 11.877 7.1288C11.877 9.6188 9.86697 11.6288 7.37697 11.6288Z" fill="#454852" />
                                    </svg>
                                </a>
                            </div> */}
                        </div>
                    </div>
                    <div className="col search-header-col">
                        <div className="header-search">
                            {/* <div className="header-search__icon">
                                <img src="images/icons/search.svg" alt="Search" />
                            </div> */}
                            <div className="search-container inner txt-c clearfix search--open" id="search-container">
                                <div className="search search__form" id="search_bar">
                                    <form name="quick_find" id="quick_find" action="https://www.fos-lighting.eu/advanced_search_result.php" method="get">
                                        <input type="text" name="keywords" id="keywords" onChange={handleInputChange} className="selectform keywords" autoComplete="off" placeholder="I'm looking for..." />
                                        <svg  width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.377 11.6288H12.587L12.307 11.3588C13.507 9.9588 14.127 8.0488 13.787 6.0188C13.317 3.2388 10.997 1.0188 8.19697 0.678799C3.96697 0.158799 0.406968 3.7188 0.926968 7.9488C1.26697 10.7488 3.48697 13.0688 6.26697 13.5388C8.29697 13.8788 10.207 13.2588 11.607 12.0588L11.877 12.3388V13.1288L16.127 17.3788C16.537 17.7888 17.207 17.7888 17.617 17.3788C18.027 16.9688 18.027 16.2988 17.617 15.8888L13.377 11.6288ZM7.37697 11.6288C4.88697 11.6288 2.87697 9.6188 2.87697 7.1288C2.87697 4.6388 4.88697 2.6288 7.37697 2.6288C9.86697 2.6288 11.877 4.6388 11.877 7.1288C11.877 9.6188 9.86697 11.6288 7.37697 11.6288Z" fill="#454852"></path>
                                            </svg>                                        <div className="loader">
                                            <div className="loader-icon"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* Add other search-related elements here */}
                            <div className={`acresults ${isOpen ? 'search--open ' : ''}`} id="acresults" style={{ display: isOpen ? 'block' : 'none' }}> 
            <div className="search-title">
                <h3>Search Products</h3>
                <p>Search with product name or model</p>
            </div>
            <div className="search-container inner txt-c clearfix search--open" id="search-container">
        <div className="search search__form" id="search_bar">
          <form name="quick_find_mobile" id="quick_find_mobile" action="https://www.fos-lighting.eu/advanced_search_result.php" method="get">
            <input type="text" name="keywords" id="keywords_mobile" className="selectform keywords" autoComplete="off" placeholder="I'm looking for..." />
            <img src="/images/icons/search.svg" alt="Search" />
            <div className="loader" style={{ display: 'none' }}>
              <div className="loader-icon"></div>
            </div>
          </form>
        </div>
      </div>
            <div className="container">
              <GoX  onClick={toggleOpen} className="las la-times close-search search-toggle" size={32}/>
                <div className="bcont" id="bcont-content" style={{ marginTop: '30px' }}>
                    
                    
                <div className="show_ac_results_categories" id="show_ac_results_categories"><div className="ac_result_item"><a href="https://www.fos-lighting.eu/in-ear-headphones-c-173_90_146.html"><div className="description"><div className="title">In Ear Monitoring / In-Ear <b>Hea</b>dphones</div></div><div className="clear"></div></a></div><div className="ac_result_item"><a href="https://www.fos-lighting.eu/led-theater-lighting-c-172_17_165.html"><div className="description"><div className="title">Stage Lighting / Led T<b>hea</b>ter Lighting </div></div><div className="clear"></div></a></div><div style={{clear:'both'}}></div></div>
                    <div className="show_ac_results_title products" id="show_ac_results_title_products">
                        <h2 className="main-title" style={{ margin: '0' }}>Product Results:</h2>
                    </div>
                    <div className="show_ac_results_products" id="show_ac_results_products">
        <div className="ac_result_item">
          <a href="https://www.fos-lighting.eu/fos-12r-hybrid-pro-p-647.html">
            <div className="image">
              <img src="/images/product.jpg" className="mouseOver" alt="" border="0" />
            </div>
            <div className="description">
              <div className="title">FOS 12R Hybrid PRO</div>
              <div className="model">L005581</div>
              <div className="price"><span className="productPrice">836.72€</span></div>
            </div>
            <div className="clear"></div>
          </a>
        </div>
        <div className="ac_result_item">
          <a href="https://www.fos-lighting.eu/is706-speaker-wall-bracket-p-1052.html">
            <div className="image">
              <img src="/images/product.jpg" className="mouseOver" alt="" border="0" />
            </div>
            <div className="description">
              <div className="title">IS706- Speaker Wall bracket</div>
              <div className="model">L005650</div>
              <div className="price"><span className="productPrice">15.76€</span></div>
            </div>
            <div className="clear"></div>
          </a>
        </div>
        <div className="ac_result_item">
          <a href="https://www.fos-lighting.eu/fos-beam-7r-hybrid-plus-p-38.html">
            <div className="image">
              <img src="/images/product.jpg" className="mouseOver" alt="" border="0" />
            </div>
            <div className="description">
              <div className="title">FOS Beam 7R Hybrid Plus</div>
              <div className="model">L004937</div>
              <div className="price"><span className="productPrice">498.00€</span></div>
            </div>
            <div className="clear"></div>
          </a>
        </div>
        <div style={{ clear: 'both' }}></div>
      </div>
                    <div className="show_ac_results_products" id="show_ac_results_products"></div>
                    <div className="noresults">No result found with these criteria <i className="las la-frown"></i></div>
                    <div className="clear"></div>
                    <a className="view-all-search text-center mt-3 mb-3 d-block" href="#">Advanced search <i className="las la-cog"></i></a>
                </div>
            </div>
        </div>
                        </div>
                    </div>
                    <div className="col options my-auto ">
                        <div className="row justify-content-end">
                            <div className="col-auto icon-contain my-auto">
                                <div className="row">
                                    {/* <div className="col-auto icon d-none">
                                        <a href="https://www.fos-lighting.eu/"> GR </a> &nbsp;&nbsp;&nbsp; <a href="https://www.fos-lighting.eu/english/"> EN </a>
                                    </div> */}
                                    <div className="col-auto icon d-none">
                                        <div id="not-logged" className="login">
                                            <a href="#" id="login-popup-link" className="login-popup-link">
                                                <span>Login / Register</span>
                                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.877 2.62891C7.35695 2.62891 2.87695 7.10891 2.87695 12.6289C2.87695 18.1489 7.35695 22.6289 12.877 22.6289C18.397 22.6289 22.877 18.1489 22.877 12.6289C22.877 7.10891 18.397 2.62891 12.877 2.62891ZM12.877 5.62891C14.537 5.62891 15.877 6.96891 15.877 8.62891C15.877 10.2889 14.537 11.6289 12.877 11.6289C11.217 11.6289 9.87695 10.2889 9.87695 8.62891C9.87695 6.96891 11.217 5.62891 12.877 5.62891ZM12.877 19.8289C10.377 19.8289 8.16695 18.5489 6.87695 16.6089C6.90695 14.6189 10.877 13.5289 12.877 13.5289C14.867 13.5289 18.847 14.6189 18.877 16.6089C17.587 18.5489 15.377 19.8289 12.877 19.8289Z" fill="#454852"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-auto icon search">
                                        <a href="#" className="search-toggle"onClick={toggleOpen} >
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.377 11.6288H12.587L12.307 11.3588C13.507 9.9588 14.127 8.0488 13.787 6.0188C13.317 3.2388 10.997 1.0188 8.19697 0.678799C3.96697 0.158799 0.406968 3.7188 0.926968 7.9488C1.26697 10.7488 3.48697 13.0688 6.26697 13.5388C8.29697 13.8788 10.207 13.2588 11.607 12.0588L11.877 12.3388V13.1288L16.127 17.3788C16.537 17.7888 17.207 17.7888 17.617 17.3788C18.027 16.9688 18.027 16.2988 17.617 15.8888L13.377 11.6288ZM7.37697 11.6288C4.88697 11.6288 2.87697 9.6188 2.87697 7.1288C2.87697 4.6388 4.88697 2.6288 7.37697 2.6288C9.86697 2.6288 11.877 4.6388 11.877 7.1288C11.877 9.6188 9.86697 11.6288 7.37697 11.6288Z" fill="#454852"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    
                             
                                </div>
                            </div>
                            <div className="col-auto cart-contain ">
                                <div className="shoppingcart toggler">
                                    <div className="shoppingpopup dynamic_content" onClick={toggleCart}>
                                        <div id="mini-shopping-cart-details-dynamic" className="details">
                                            <svg viewBox="0 0 26 23">
                                                <g fill="none" fillRule="nonzero" stroke="#000">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1.606 1h4.503l2.195 11.848a2.678 2.678 0 002.634 2.192h9.305c1.22 0 2.286-.824 2.593-2.004l2.071-8.007a.73.73 0 00-.706-.913L10.938 4.11"></path>
                                                    <path fill="#000" d="M11.833 18.253a1.793 1.793 0 100 3.586 1.793 1.793 0 000-3.586zM19.909 18.253a1.793 1.793 0 10.003 3.586 1.793 1.793 0 00-.003-3.586z"></path>
                                                </g>
                                            </svg>
                                            <div className="shoppingcart_options_image responsive">
                                                <div className="cart_show_amount responsive">0</div>
                                            </div>
                                            <div className="caption">0.00€</div>
                                        </div>
                                        {showCart && (
                    <Cart/>
                )}
                                        <div className="clear"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default MainHeader;