import React, { useRef } from 'react';
import pant1 from '../catogries/mens assests/pant1.jpg';
import pant10 from '../catogries/mens assests/pant10.jpeg';
import dress1 from '../catogries/ladies assests/dress1.webp';
import dress10 from '../catogries/ladies assests/dress10.webp';
import fur1 from '../catogries/furniture assests/fur1.jpg';
import fur12 from '../catogries/furniture assests/fur12.png';
import ele1 from '../catogries/electronics assests/ele1.webp';
import ele12 from '../catogries/electronics assests/ele12.png';
import acc1 from '../catogries/accessories assests/acc1.webp';
import acc4 from '../catogries/accessories assests/acc4.webp';
import acc7 from '../catogries/accessories assests/acc7.webp';
import acc9 from '../catogries/accessories assests/acc9.webp';
import acc11 from '../catogries/accessories assests/acc11.webp';
import acc14 from '../catogries/accessories assests/acc14.webp';
import './mostpopular.css';

import Popular from '../popular';
import { useState } from 'react';
function Mostpopular() {
     
    const [Mostp,setMostp]=useState([
        {
            id:'1',
            image:pant1,
            style:' Shirts',
            links:'Mens'
        },
        {
            id:'2',
            image:pant10,
            style:'T-Shirt',
            links:'Mens'
        },
        {
            id:'3',
            image:dress1,
            style:'Kurthi',
            links:'Ladies'

        },
        {
            id:'4',
            image:dress10,
            style:'Kurthi',
            links:'Ladies'
        },
        {
            id:'5',
            image:fur1,
            style:'Soffa',
            links:'Furniture'
        },
        {
            id:'6',
            image:fur12,
            style:'Furniture',
            links:'Furniture'
        },
        {
            id:'7',
            image:ele1,
            style:'Mobile',
            links:'Electronics'
        },
        {
            id:'8',
            image:ele12,
            style:'Washing Machine',
            links:'Electronics'
        },
        {
            id:'9',
            image:acc1,
            style:'Jewlls',
            links:'Accessories'
        },
        {
            id:'10',
            image:acc4,
            style:'Bag',
            links:'Accessories'
        },
        {
            id:'11',
            image:acc7,
            style:'Hair Band',
            links:'Accessories'
        },
        {
            id:'12',
            image:acc9,
            rupees:'90',
            style:'Glass',
            links:'Accessories'
        }
    ])


    return (
        <div>
            <Popular Mostp={Mostp} setMostp={setMostp}></Popular>
        </div>
    );
}

export default Mostpopular;
