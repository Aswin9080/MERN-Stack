import React, { useState } from 'react';
import dress1 from './dress1.webp';
import dress2 from './dress2.webp';
import dress3 from './dress3.webp';
import dress4 from './dress4.webp';
import dress5 from './dress5.webp';
import dress6 from './dress6.webp';
import dress7 from './dress7.webp';
import dress8 from './dress8.webp';
import dress9 from './dress9.webp';
import dress10 from './dress10.webp';
import dress11 from './dress11.webp';
import dress12 from './dress12.webp';
import Collection from '../collection';
import Navbar from '../../navbar';
import Menus from '../menus';

function Ladies(props) {
     
    const sc=props.sc
    const setsc=props.setsc
    const [product,setpro]=useState([
        {
            id:'1',
            image:dress1,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'25',
            style:'PAARKHI PINK JAAL PRINT COTTON PLEATED YOKE DRESS',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'2',
            image:dress2,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'33',
            style:'GOHAR GREEN HAND BLOCK PRINT COTTON GATHERED DRESS',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'3',
            image:dress3,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'35',
            style:'URWA OFF WHITE BUTI PRINT COTTON FLAREY DRESS',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'4',
            image:dress4,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'40',
            style:'BLUEBIRD FLORAL HANDBLOCK COTTON DRESS',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'5',
            image:dress5,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'55',
            style:'FRESH BREEZE LONG HANDBLOCK DRESS',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'6',
            image:dress6,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'16',
            style:'SANDHYA TIERED COTTON LONG GOWN',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'7',
            image:dress7,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'44',
            style:'AABHA LONG CHIFFON DUPATTA DRESS',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'8',
            image:dress8,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'66',
            style:'AADHIRA ORGANZA DUPATTA DRESS',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'9',
            image:dress9,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'58',
            style:'SNOWY BLUSH LONG ORGANZA DUPATTA DRESS',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'10',
            image:dress10,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'50',
            style:'SKY BLUE AND RED  HANDBLOCK SUMMER DRESS',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'11',
            image:dress11,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'44',
            style:'MOSAIC ORANGE ANARKALI ORGANZA DUPATTA DRESS',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'12',
            image:dress12,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'90',
            style:'TANUSHREE LONG TIERED ORGANZA ANARKALI DRESS',
            Delivery:'Free delivery',
            Rating:'3.7'
        }
    ])

    const tilename='Ladies Fashion World';


    return (
        <div>
            <Navbar className='mb-10'></Navbar>
            <Menus></Menus>
            <Collection products={product} setsc={setsc} sc={sc} tilename={tilename}></Collection>
        </div>
    );
}

export default Ladies;
