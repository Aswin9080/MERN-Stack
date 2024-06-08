
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';


function Popular(props) {

    const Mostp = props.Mostp
    //console.log(Mostp)
    const setMostp = props.setMostp

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    return (
        <div className='mostpopular mt-20 lg:mt-32 '>
            <div className='mostpopular-h font-bold p-5 flex justify-between items-center'>
                <h1 className='lg:text-3xl text-2xl font-bold'>
                    Popular <span className='text-green-900'>Categories</span>
                </h1>
                <div className='flex justify-center lg:mr-10'>
                    <div onClick={scrollLeft} className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                            <path d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <div onClick={scrollRight} className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                            <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>
            <div ref={scrollRef} className='mostpopular-content flex  p-5 gap-10 overflow-x-auto no-scrollbar '>
                {
                    Mostp.map(function (item, index) {
                        return (
                            <Link key={index} to={`/${item.links}`}>
                            <div key={index} className='mostpopular--content__img'>

                                <div>
                                    <img src={item.image} className='mostpopular_1 max-h-[200px] min-w-[200px] m-2' alt="pant1"></img>
                                    <p className='m-2 font-bold'>{item.style} </p>
                                </div>
                            </div>
                            </Link>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default Popular
