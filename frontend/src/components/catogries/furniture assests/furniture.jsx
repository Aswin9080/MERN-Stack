import React, { useState } from 'react';
import fur1 from './fur1.jpg'

import fur2 from './fur2.jpg'
import fur3 from './fur3.jpg'
import fur4 from './fur4.jpg'
import fur5 from './fur5.jpg'
import fur6 from './fur6.jpg'
import fur7 from './fur7.jpg'

import fur8 from './fur8.jpg'
import fur9 from './fur9.png'
import fur10 from './fur10.png'
import fur11 from './fur11.jpg'
import fur12 from './fur12.png'

import Collection from '../collection';
import Navbar from '../../navbar';
import Menus from '../menus';

function Furniture(props) {
     
    const sc=props.sc
    const setsc=props.setsc
    const [product,setpro]=useState([
        {
            id:'1',
            image:fur1,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'25',
            style:'Boston Solid Wood Queen Size Box Storage Bed',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'2',
            image:fur2,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'33',
            style:'Red Boston Solid Wood Queen Size Box Storage Bed',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'3',
            image:fur3,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'35',
            style:'4 Seater Dinning Tablet  Sets Comfortable family Table ',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'4',
            image:fur4,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'40',
            style:'6 Seater Dinning Wood Tablet  Sets Comfortable family Table',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'5',
            image:fur5,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'55',
            style:'4 Seater Dinning Wood Tablet  Sets Comfortable family Table',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'6',
            image:fur6,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'16',
            style:'Megan Engineered Wood Bookshelf In Classic Walnut Finish',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'7',
            image:fur7,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'44',
            style:'Megan Engineered Wood Bookshelf In Classic Walnut wood ',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'8',
            image:fur8,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'66',
            style:'Elegant lighting solutions, versatile designs, enhance ambiance style.',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'9',
            image:fur9,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'58',
            style:'Boston Solid wood Queen Size Box Storage Bed',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'10',
            image:fur10,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'50',
            style:'Green Boston Solid Wood Queen Size Box Single Bed',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'11',
            image:fur11,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'44',
            style:'Iwaki Engineering Free standing  Wood Swivel tV Unit',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'12',
            image:fur12,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'90',
            style:'Iwaki Engineering Free standing Wood Swivel tV Unit',
            Delivery:'Free delivery',
            Rating:'3.7'
        }
    ])

    const tilename='Furniture Fashion World';


    return (
        <div>
            <Navbar className='mb-10'></Navbar>
            <Menus></Menus>
            <Collection products={product} setsc={setsc} sc={sc} tilename={tilename}></Collection>
        </div>
    );
}

export default Furniture;
