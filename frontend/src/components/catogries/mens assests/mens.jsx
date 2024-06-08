import React, { useState } from 'react';
import pant1 from './pant1.jpg';
import pant2 from './pant2.jpg';
import pant3 from './pant3.jpg';
import pant4 from './pant4.jpg';
import pant5 from './pant5.jpg';
import pant6 from './pant6.jpeg';
import pant7 from './pant7.jpeg';
import pant8 from './pant8.jpeg';
import pant9 from './pant9.jpeg';
import pant10 from './pant10.jpeg';
import pant11 from './pant11.jpeg';
import pant12 from './pant12.jpeg';
import Collection from '../collection';
import Navbar from '../../navbar';
import Menus from '../menus';
function Mens(props) {
     
    const sc=props.sc
    const setsc=props.setsc
    const [product,setpro]=useState([
        {
            id:'1',
            image:pant1,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'25',
            style:' Trending Popular Colorfull Shirts',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'2',
            image:pant2,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'33',
            style:'Popular Colorfull Shirts Trending',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'3',
            image:pant3,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'35',
            style:'Voilet Design Colorfull Shirts ',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'4',
            image:pant4,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'40',
            style:'Double Side Shirts Trending',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'5',
            image:pant5,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'55',
            style:'White Blue Design Colorfull Shirts ',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'6',
            image:pant6,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'16',
            style:'Stylish Mens joker pants Mens',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'7',
            image:pant7,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'44',
            style:'Pattern Colorfull Shirts Trending ',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'8',
            image:pant8,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'66',
            style:'African Stylish Dress Mens',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'9',
            image:pant9,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'58',
            style:'Pattern Colorfull Stylish Shirts',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'10',
            image:pant10,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'50',
            style:'Cartoon T-shirts Mens Trending',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'11',
            image:pant11,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'44',
            style:'Mock Up T-shirts Mens Trending',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'12',
            image:pant12,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'90',
            style:'Trending New Shirts Mens',
            Delivery:'Free delivery',
            Rating:'3.7'
        }
    ])
    const tilename='Mens Fashion World';
    //console.log('tilename')

    return (
        <div>
            <Navbar className='mb-10'></Navbar>
            <Menus></Menus>
            <Collection products={product} setsc={setsc} sc={sc} tilename={tilename}></Collection>
        </div>
    );
}

export default Mens;
