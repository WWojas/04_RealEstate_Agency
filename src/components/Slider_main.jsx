import React from 'react';
import slider_1 from '../images/Warstwa 98@1X.png';
import slider_2 from '../images/pexels-photo-262367.jpeg';
import slider_3 from '../images/pexels-photo-256150.jpeg';
import slider_4 from '../images/pexels-photo-417273.jpeg';
import slider_5 from '../images/pexels-photo-373965.jpeg';
import slider_1_desktop from '../images/slider_desktop_1.png';
import slider_2_desktop from '../images/slider_desktop_2.jpeg';
import slider_3_desktop from '../images/slider_desktop_3.jpeg';
import slider_4_desktop from '../images/slider_desktop_4.jpeg';
import slider_5_desktop from '../images/slider_desktop_5.jpeg';
import slider_6_desktop from '../images/slider_desktop_6.jpeg'
import arrow_next from '../images/arrow_next.png';
import arrow_prev from '../images/arrow_prev.png';


class Slider_main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image_main: slider_1,
            image_main_desktop: slider_1_desktop,
            image: [ slider_2, slider_3, slider_4, slider_5 ],
            image_desktop: [slider_2_desktop, slider_3_desktop, slider_4_desktop, slider_5_desktop, slider_6_desktop],
            index: 0
        }
    };



    intervalFn = () => {

            this.intervalId = setInterval(() => {

                this.setState({
                    image_main: this.state.image[this.state.index],
                    index: this.state.index >= this.state.image.length-1 ? 0 : this.state.index + 1
                });
            }, 2000);
    };


    intervalDesktop = () => {

        this.intervalId = setInterval(() => {

            this.setState({
                image_main_desktop: this.state.image_desktop[this.state.index],
                index: this.state.index >= this.state.image_desktop.length-1 ? 0 : this.state.index + 1
            });
        }, 2000);
    };

    componentDidMount() {
            this.intervalFn();
            this.intervalDesktop();
        }


    nextSlide = () => {

        clearInterval(this.intervalId);

        this.setState({
            image_main: this.state.image[this.state.index],
            index: this.state.index >= this.state.image.length-1 ? 1 : this.state.index + 1
        })
    };


    prevSlide = () => {

        clearInterval(this.intervalId);

        this.setState({
            image_main: this.state.image[this.state.index],
            index: this.state.index <= 0 ? 3 : this.state.index - 1
        })
    };

    nextSlideDesktop = () => {

        clearInterval(this.intervalId);

        this.setState({
            image_main_desktop: this.state.image_desktop[this.state.index],
            index: this.state.index >= this.state.image_desktop.length-1 ? 1 : this.state.index + 1
        })
    };


    prevSlideDesktop = () => {

        clearInterval(this.intervalId);

        this.setState({
            image_main_desktop: this.state.image_desktop[this.state.index],
            index: this.state.index <= 0 ? 3 : this.state.index - 1
        })
    };




    render() {

        return (


            <div className="row justify-content-center">
                <div className="col-12">

                    {/* Mobile view*/}
                <div className=' d-block d-md-none'>

                    <img className='slider_img img_fluid' src={this.state.image_main} />


                    <figcaption className="slider_desc flex pos_absolute">
                    <div onClick={this.prevSlide}> <img src= {arrow_prev} /> </div>
                        <div> ul. Florianska, Krakow </div>
                    <div onClick={this.nextSlide}> <img src= {arrow_next} /> </div>
                    </figcaption>

                </div>

                    {/* Desktop view*/}

                    <div className='d-none d-md-block'>

                        <img className='slider_img img_fluid' src={this.state.image_main_desktop} />


                        <figcaption className="slider_desc flex pos_absolute">
                            <div onClick={this.prevSlideDesktop}> <img src= {arrow_prev} /> </div>
                            <div> ul. Florianska, Krakow </div>
                            <div onClick={this.nextSlideDesktop}> <img src= {arrow_next} /> </div>
                        </figcaption>

                    </div>

                </div>
            </div>
        )

    }

}




export default Slider_main;
