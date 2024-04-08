import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Slider = () => {
    const Slides = [
        {
            id: 1,
            img: '/images/1.jpg'
        },
        {
            id: 2,
            img: '/images/2.jpg'
        },
        {
            id: 3,
            img: '/images/3.jpg'
        },
    ]
    const myData = Slides;
    const [activeSlide, setActiveSlide] = useState(1);

    const prevSliderHandler = (id) => {
        if (id === 1) {
            setActiveSlide(myData.length);
        } else if (id > 1) {
            setActiveSlide(activeSlide - 1);
        } else {
            setActiveSlide(myData.length - 1);
        }
    };

    const nextSliderHandler = (id) => {
        if (id === myData.length) {
            setActiveSlide(1);
        } else if (id < myData.length) {
            setActiveSlide(activeSlide + 1);
        } else {
            setActiveSlide(myData.length - 1);
        }
    };
    return (
        <>
            <div className='m-6 relative'>
                {myData.map((item) => {
                    const { id, img } = item;
                    return (
                        <div
                            key={id}
                            className={
                                activeSlide === id
                                    ? 'flex justify-between items-center'
                                    : 'hidden'
                            }
                        >
                            
                               <button
                                className='text-6xl hover:bg-white'
                                onClick={() => prevSliderHandler(id)}
                            >
                              <ArrowBackIosIcon />
                            </button>  
                            <div className='flex flex-col items-center'>                            
                                <img src={img} alt="" className='w-screen'/>  
                                                      
                            </div>
                            <button
                                className='text-6xl hover:bg-white '
                                onClick={() => nextSliderHandler(id)}
                            >
                            <ArrowForwardIosIcon />
                            </button>
                            
                        </div>
                    );
                })}
            </div>
        </>
    )
}
export default Slider