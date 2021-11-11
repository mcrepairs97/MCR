import React from 'react';

import batt1 from '../assets/images/batt1.png';
import batt2 from '../assets/images/batt2.png';
import batt3 from '../assets/images/batt3.png';
import batt4 from '../assets/images/batt4.png';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Slider() {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false} dynamicHeight={false} >
            <div>
                <img src={batt1} alt="Laptop Battery" />
            </div>
            <div>
                <img src={batt2} alt="Laptop Battery" />
            </div>
            <div>
                <img src={batt3} alt="Laptop Battery" />
            </div>
            <div>
                <img src={batt4} alt="Laptop Battery" />
            </div>
        </Carousel>
    );
}

export default Slider;