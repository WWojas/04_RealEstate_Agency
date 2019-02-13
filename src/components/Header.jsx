import React from 'react';
import arrow_header from '../images/Prostokąt 34@1X.png';


class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isMobileMenuVisible: false
        }
    }


    showMobileMenu = () => {
        if (this.state.isMobileMenuVisible === false ) {
            this.setState ({
                isMobileMenuVisible: true
            })
        } else if(this.state.isMobileMenuVisible === true ) {
            this.setState ({
                isMobileMenuVisible: false
            });
        }

    };


    render() {
        return (

            <div className='row'>
                <div className="col-12">

                    {/* Mobile menu*/}
                    <div className=" navbar_bg flex_menu d-md-none">
                        <button className=" mt-3 mb-3 mr-2 btn_bg" type="button"
                               onClick={this.showMobileMenu}>
                            <span> <img src={arrow_header} /></span></button>
                    </div>

                    {
                        this.state.isMobileMenuVisible &&

                            <div className="dropdown_menu text-center">
                        <ul>
                            <li><a href="#">INWESTYCJA </a></li>
                            <li><a href="#"> MIESZKANIA RZUTY</a></li>
                            <li><a href="#"> DOSTĘPNOŚĆ </a></li>
                            <li><a href="#"> KONTAKT </a></li>
                        </ul>
                            </div>

                    }


                    {/* Desktop menu */}

                    <nav className="navbar flex_menu d-none d-md-block navbar_bg p-2">
                        <div className='container_1200'>
                        <ul className="navbar-nav-desktop desktop_menu justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link" href="#"> INWESTYCJA <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> MIESZKANIA RZUTY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> DOSTĘPNOŚĆ </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> KONTAKT</a>
                            </li>
                        </ul>

                        </div>
                    </nav>



                </div>

            </div>
            );
         }
        }

export default Header;