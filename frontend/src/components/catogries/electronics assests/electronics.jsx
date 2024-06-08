import React, { useState } from 'react';

import ele1 from './ele1.webp';
import ele2 from './ele2.webp';
import ele3 from './ele3.webp';
import ele4 from './ele4.webp';
import ele5 from './ele5.webp';
import ele6 from './ele6.webp';
import ele7 from './ele7.webp';
import ele8 from './ele8.webp';
import ele9 from './ele9.webp';
import ele10 from './ele10.webp';
import ele11 from './ele11.webp';
import ele12 from './ele12.png';


import Collection from '../collection';
import Navbar from '../../navbar';
import Menus from '../menus';

function Electronics(props) {
     
    const sc=props.sc
    const setsc=props.setsc
    const [product,setpro]=useState([
        {
            id:'1',
            image:ele1,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'25',
            style:'New one+ Mobile',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'2',
            image:ele2,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'33',
            style:'32 inch Display Tcl Brand',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'3',
            image:ele3,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'35',
            style:'Electric Dynamic Watch ',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'4',
            image:ele4,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'40',
            style:'Asus 32 inch Laptop',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'5',
            image:ele5,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'55',
            style:'Blue Star Wall Mounted Ac',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'6',
            image:ele6,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'16',
            style:'Samsung Side by Side Refrigirator',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'7',
            image:ele7,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'44',
            style:'IFB Clorh Dryer 5.5 Kg Turbo D',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'8',
            image:ele8,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'66',
            style:'Viewsonic Projector PX728-4k',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'9',
            image:ele9,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'58',
            style:'Apple Wireless Ear Phone AirPods ',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'10',
            image:ele10,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'50',
            style:'LG Semi Automatic Washing Machine 8.0 Kg',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'11',
            image:ele11,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'44',
            style:'Asus 32 inch Laptop 1TB Full Touch Control',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'12',
            image:ele12,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'90',
            style:'LG Semi Automatic Washing Machine 12.0 Kg',
            Delivery:'Free delivery',
            Rating:'3.7'
        }
    ])

    const tilename='Electronics Fashion World';


    return (
        <div>
            <Navbar className='mb-10'></Navbar>
            <Menus></Menus>
            <Collection products={product} setsc={setsc} sc={sc} tilename={tilename}></Collection>
        </div>
    );
}

export default Electronics;
