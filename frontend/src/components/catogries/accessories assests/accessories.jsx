import React, { useState } from 'react';

import acc1 from './acc1.webp';
import acc2 from './acc2.webp';
import acc3 from './acc3.webp';
import acc4 from './acc4.webp';
import acc5 from './acc5.webp';
import acc6 from './acc6.webp';
import acc7 from './acc7.webp';
import acc8 from './acc8.webp';
import acc9 from './acc9.webp';
import acc10 from './acc10.webp';
import acc11 from './acc11.webp';
import acc12 from './acc12.webp';
import acc13 from './acc13.webp';
import acc14 from './acc14.webp';
import acc15 from './acc15.webp';
import acc16 from './acc16.webp';


import Collection from '../collection';
import Navbar from '../../navbar';
import Menus from '../menus';

function Accessories(props) {
     
    const sc=props.sc
    const setsc=props.setsc
    const [product,setpro]=useState([
        {
            id:'1',
            image:acc1,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'25',
            style:'Womens Fantasy Jewlls',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'2',
            image:acc2,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'33',
            style:'Mangalsutra Under 50',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'3',
            image:acc3,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'35',
            style:'Electric Dynamic Watch ',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'4',
            image:acc4,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'40',
            style:'Trendy Alluring Women',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'5',
            image:acc5,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'55',
            style:'Elegant Versatile Women Bag',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'6',
            image:acc6,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'16',
            style:'Classic Stylish Womens Bag',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'7',
            image:acc7,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'44',
            style:'Trendy Hair Band Womens',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'8',
            image:acc8,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'66',
            style:'Trendy Sylish Hair Bands Womens',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'9',
            image:acc9,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'58',
            style:'Sun Glass for Womens New Trending',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'10',
            image:acc10,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'50',
            style:'Producted Sun Glass New Trending',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        { 
            id:'11',
            image:acc11,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'44',
            style:'White Glass New Trending Womens',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'12',
            image:acc12,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'90',
            style:'1 set of socks for Womens',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'13',
            image:acc13,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'90',
            style:'6 set of pair socks for Womens',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'14',
            image:acc14,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'90',
            style:'10 set of pair socks for Womens',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'15',
            image:acc15,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'90',
            style:'Allure Fancy Rings Womens',
            Delivery:'Free delivery',
            Rating:'3.7'
        },
        {
            id:'16',
            image:acc16,
            collection:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, odit? Doloribus, obcaecati.',
            quantity:'1',
            rupees:'90',
            style:'Fancy Womens Finger Rings',
            Delivery:'Free delivery',
            Rating:'3.7'
        }
    ])

    const tilename='Accessories Fashion World';


    return (
        <div>
            <Navbar className='mb-10'></Navbar>
            <Menus></Menus>
            <Collection products={product} setsc={setsc} sc={sc} tilename={tilename}></Collection>
        </div>
    );
}

export default Accessories;
