import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TrendingItem from '../../TrendingItems'
import '../../Trending.css'

import img0 from '../../../images2/148-Red-Kidney-Beans-.jpg'
import img1 from '../../../images2/154-White-Rice-Basmati.jpg'
import img2 from '../../../images2/150-Wheat-Flour.jpg'

const index0=[0];

const imgSrc=[img0];
const text=['Pulses'];
const path=['/category/pulses'];
const show=[true];

export default function Pickles(){
     return(
         <>
           <div className='trends'>
           <h1 style={{marginBottom:"5%"}}>Ancient Living</h1>
            <div className='trends_container'>
                <div className='trends_wrapper'>
                <ul className='trends_items'>
                {index0.map(i => {
                    return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} show={show[i]}/>
                    })}
                </ul>
                </div>
            </div>
           </div> 
         </>
     );
}
