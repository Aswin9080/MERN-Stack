import React, { useRef } from 'react';
import pant4 from '../catogries/mens assests/pant4.jpg';
import pant6 from '../catogries/mens assests/pant6.jpeg';
import dress5 from '../catogries/ladies assests/dress1.webp';
import dress12 from '../catogries/ladies assests/dress10.webp';
import fur4 from '../catogries/furniture assests/fur1.jpg';
import fur8 from '../catogries/furniture assests/fur12.png';
import ele5 from '../catogries/electronics assests/ele1.webp';
import ele7 from '../catogries/electronics assests/ele12.png';
import acc3 from '../catogries/accessories assests/acc1.webp';
import acc6 from '../catogries/accessories assests/acc4.webp';
import acc8 from '../catogries/accessories assests/acc7.webp';
import acc10 from '../catogries/accessories assests/acc9.webp';
import acc14 from '../catogries/accessories assests/acc11.webp';
import acc16 from '../catogries/accessories assests/acc14.webp';
import { useState } from 'react';
import HDTT from './hdtt';
function HDTTData(){

    const [HDTTdata,setHDTTdata]=useState([
        {
            id:'1',
            image:pant4,
            style:' Shirts',
            links:'Mens'
        },
        {
            id:'2',
            image:pant6,
            style:'T-Shirt',
            links:'Mens'
        },
        {
            id:'3',
            image:fur4,
            style:'Kurthi',
            links:'Furniture'

        },
        {
            id:'4',
            image:dress5,
            style:'Kurthi',
            links:'Ladies'
        },
        {
            id:'5',
            image:dress12,
            style:'Soffa',
            links:'Ladies'
        },
        {
            id:'6',
            image:fur8,
            style:'Furniture',
            links:'Furniture'
        },
        {
            id:'7',
            image:ele5,
            style:'Mobile',
            links:'Electronics'
        },
        {
            id:'8',
            image:ele7,
            style:'Washing Machine',
            links:'Electronics'
        },
        {
            id:'9',
            image:acc3,
            style:'Jewlls',
            links:'Accessories'
        },
        {
            id:'10',
            image:acc6,
            style:'Bag',
            links:'Accessories'
        },
        {
            id:'11',
            image:acc8,
            style:'Hair Band',
            links:'Accessories'
        },
        {
            id:'12',
            image:acc10,
            rupees:'90',
            style:'Glass',
            links:'Accessories'
        }
    ])
    return(
        <div>
           <HDTT HDTTdata={HDTTdata} setHDTTdata={HDTTdata}></HDTT>
        </div>
    )
}

export default HDTTData