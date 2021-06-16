import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../../App.css'
import './Blogs.css'


import imgBack from '../../../images2/turmeric-powder.jpg'
import imgGreen from '../../../images2/tamarand-turmeric.jpg'
import imgGreen2 from '../../../images2/image 18.jpg'

export default function Blog3(){
    return (
        <>
          <div className="blogBack">
              <img src={imgBack} alt="blogs"/><div className="centered">Blogs</div>
              <div className="blackhead">Why our Lakadong Turmeric is the best Immunity booster for you?</div>
          </div>
          <div className="content">
              <p className="firstp">Touted as one of the healthiest medicinal spices of India, Turmeric is known for its numerous benefits to the human body since ancient times. And rightfully so, it does get all those credits because of its healing powers for a host of diseases and remedies.</p>
              <p className="firstp">Turmeric has been used in a dried powdered state for cooking, for protection against infections, and for beauty as a cosmetic measure in most Indian homes, and surely it has made its mark in the western culture as well. </p>
              <p className="otherhead">But why is that?</p>
              <p className="firstp">Derived from the best quality Turmeric Curcumin plant from the Lakadong Village in Meghalaya that is still unharmed by industrial practices, the Abubaba Lakadong Turmeric is the most authentic, flavourful, and aromatic turmeric in the market. </p>
              <p className="firstp">In addition to its use in cooking, the Lakadong Turmeric is rich in minerals from the curcumin plant that helps prevent various types of diseases ranging from cancer, cardiovascular functions, diabetes, and many more.  </p>
              <p className="firstp">The addition of Turmeric in daily life helps in keeping our health in check and improves our immunity. With over 5% of curcumin content, Turmeric powder possesses healing powers that have been scientifically tested and proven.</p>

              {window.innerWidth>680&&<img src={imgGreen} alt="greenery" className="greenery" style={{height:"60vw"}}/>}
              {window.innerWidth<=680&&<img src={imgGreen} alt="greenery" className="greenery" style={{height:"130vw"}}/>}

              <h1 className="otherhead">Health benefits of Lakadong Turmeric</h1>

                <ul>
                    <li>Helps relieve cough & Cold - Our Turmeric the body to naturally the respiratory tracts and fight against infections to eliminate any onset symptoms of common cold and due to its anti-inflammatory powers, helps soothes in case of a sore throat.</li>
                    <li>Helps to suppress Viral diseases -  The Lakadong Turmeric has antiviral properties that help diminish the replication of the virus. Curcumin present in the turmeric consequently results in the decrease of viral infections.</li>
                    <li>Lowers bad Cholesterol - The property of Turmeric helps in the reduction of LDL or Bad Cholesterol present in the body which in itself facilitates fewer chances of serious conditions like heart strokes. </li>
                </ul>

                <h1 className="otherhead">How is Abubaba Organic Lakadong Turmeric better?</h1>

                <p className="firstp">Traditionally made- All our spices go through the traditional method of Hand-grounded to achieve the highest concentration of nutritious value as opposed to machine-produced spices.</p>
                <p className="firstp">Chemical-free- Our Turmeric is sourced, processed, and packed without the use of any chemical fertilizer, additives, or toxic dyes that helps us to achieve the highest quality premium Turmeric. Our certifications with Javik Bharat and Ecocert prove our commitment towards healthy chemical-free production. </p>
                <p className="firstp">With the pandemic of Coronavirus, we are facing today, it is important for us to make healthy decisions regarding what we consume and try to build immunity with all the natural food we can.</p>
                <p className="firstp">And a healthy dose of Lakadong Turmeric does just that.</p>
                <p className="firstp">Take the step towards a healthy life.</p>

                <p className="lastp"><b>TAGS:</b>Lakadong Turmeric, Lakadong Turmeric as immunity booster, Health benefits of Lakadong Turmeric, traditional and chemical free</p>
                <h3 className="share">Share</h3>
                <span class="shopnow_dot1" style={{marginLeft:"10%",textAlign:"right"}}><Link to="/Blog_read/Blog2" style={{textDecoration:"none",color:"black"}}><p>←</p></Link></span>
                <span class="nextpage" style={{marginLeft:"0"}}>——— Previous</span>
                <span class="shopdot_first">
                    <Link to="/Blog_read/Blog1" style={{textDecoration:"none",color:"black"}}>
                    <i class="fab fa-facebook" style={{marginRight:"1.4%"}}></i>
                    <i class="fab fa-instagram" style={{marginRight:"1.4%"}}></i>
                    <i class="fab fa-twitter-square" style={{marginRight:"1.4%"}}></i>
                    <i class="fab fa-pinterest" style={{marginRight:"1.4%"}}></i>
                    <i class="fab fa-snapchat" style={{marginRight:"1.4%"}}></i>
                    </Link>
                </span>
                <span class="nextpage">Next ———</span>
                <span class="shopnow_dot1"><Link to="/Blog_read/Blog4" style={{textDecoration:"none",color:"black"}}><p>→</p></Link></span>
          </div>
          <div className="comment-Blog">
             <h2>Leave us a reply</h2>
             <p className="req">Your email address will not be published. Required fields are marked *</p>
             <form className="leaveus-reply">
             <p><input type="text" placeholder="Full Name*" name="name"></input></p>
             <p><input type="email" placeholder="E-mail address*" name="email"></input></p>
             <p><input className="comment" type="text" placeholder="Comment*" name="comment"></input></p>
             <button type="submit" className="post-comment"> <Link to="/Blog_read/Blog3" style={{textDecoration:"none",color:"white"}}>Post Comment</Link></button>
             </form>
          </div>
        </>
    );
}