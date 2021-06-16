import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../../App.css'
import './Blogs.css'


import imgBack from '../../../images2/saffron-bg.jpg'
import imgGreen from '../../../images2/kesar-blog.jpg'
import imgGreen2 from '../../../images2/image 18.jpg'

export default function Blog4(){
    return (
        <>
          <div className="blogBack">
              <img src={imgBack} alt="blogs"/>{window.innerWidth>680&&<div className="centered" style={{marginTop:"-5%"}}>Blogs</div>}
              {window.innerWidth<=680&&<div className="centered">Blogs</div>}
              {window.innerWidth>680&&<div className="blackhead" style={{paddingTop:"1%"}}>What makes the Kashmiri Saffron an Exquisite yet Nutritional Spice? Glad you asked!</div>}
              {window.innerWidth<=680&&<div className="blackhead">What makes the Kashmiri Saffron an Exquisite yet Nutritional Spice? Glad you asked!</div>}
          </div>
          <div className="content">
              <p className="firstp">Known locally as ‘Zafran’, the Abubaba Organic Kashmiri Saffron is the one of the purest in its origin and grown in one of the handful of regions of the country by farmers in the high-altitude regions of the Himalayas.</p>
              <p className="firstp">Kashmiri Saffron has always had a reputation of being a pure and exquisite spice to serve as an ingredient for colouring dishes of various cultures. However, there is more to this wonder spice than visual and taste benefits. </p>
              <p className="firstp">From being added to Pulav for its unique flavour, boiled in tea for aroma, to being used as seasoning on kheer – it is one spice which the Kashmiri kitchen cannot do without!</p>
              <p className="firstp">But apart from its properties as this exquisite spice, Kashmiri Saffron hold a host of health benefits that we do not talk about. </p>

              {window.innerWidth>680&&<img src={imgGreen} alt="greenery" className="greenery" style={{height:"60vw"}}/>}
              
              <h1 className="otherhead">Below are a few of the benefits of Abubaba Organic Kashmiri Saffron:</h1>

                <ul>
                    <li><b>Prevents Alzheimer’s disease –</b> Acting as a fighting agent to age-related diseases by restricting the collection of a particular protein in the brain, Abubaba Organic Kashmiri Saffron can be useful in treating moderate cases of Alzheimer’s disease. </li>
                    <li><b>Aids in Weight loss –</b> Multiple studies support the idea that taking significant number of Saffron supplements in regular diet helps curb the natural appetite for snack cravings. This in turn helps reduce the Body mass, waist circumference and eventually lose the unwanted fat in our body.</li>
                    <li><b>Helps with sleeping disorders –</b> Consuming Kashmiri Saffron in a warm glass of milk before going to bed has been practiced long in Indian traditions. And sure enough it does serve well because consumption of Saffron in the right way can help not only to sleep better, but to sleep longer for people suffering from sleeping disorders like Insomnia. </li>
                        
                    <li><b>Helps relief pre-menstrual symptoms –</b> The Abubaba Organic Kashmiri Saffron helps in dealing with symptoms of PMS such as headaches, pains, irritability, and mood swings. Even the aroma of Saffron is known for being therapeutic and can lower stress level and induce better mood. </li>
                    <li><b>Protect against Cancer –</b> Saffron may help protect against cancer by killing cancer cell while increasing the amount of white blood cells that protect the body against different kinds of infection. </li>
                    <li><b>Is considered an aphrodisiac -</b>  With its valuable herbs affecting our body in different ways, Saffron is also considered an aphrodisiac which means when taken saffron in food or as supplement, it helps boost libido in both men and women. </li>
                    
                </ul>
                <br/><br/>
                <p className="firstp">With so many health benefits on the table, Abubaba Organic Kashmiri Saffron is a spice that brings in so much to our life and promotes a healthy way of living. </p>
                <p className="firstp">Long story short, it is a spice that is proven to be safe for most people and easy to incorporate in your diet. Give our Organic Kashmiri Saffron a try in your diet to prepare amazing dishes while taking the advantage of all the health benefits it holds.</p>
                
                <p className="lastp"><b>TAGS:</b>Organic Kashmiri Saffron, high-altitude regions of the Himalayas, Kashmiri kitchen, Health benefits of kashmiri saffron.</p>
                <h3 className="share">Share</h3>
                <span class="shopnow_dot1" style={{marginLeft:"10%",textAlign:"right"}}><Link to="/Blog_read/Blog3" style={{textDecoration:"none",color:"black"}}><p>←</p></Link></span>
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
                <span class="shopnow_dot1"><Link to="/Blog_read/Blog5" style={{textDecoration:"none",color:"black"}}><p>→</p></Link></span>
          </div>
          <div className="comment-Blog">
             <h2>Leave us a reply</h2>
             <p className="req">Your email address will not be published. Required fields are marked *</p>
             <form className="leaveus-reply">
             <p><input type="text" placeholder="Full Name*" name="name"></input></p>
             <p><input type="email" placeholder="E-mail address*" name="email"></input></p>
             <p><input className="comment" type="text" placeholder="Comment*" name="comment"></input></p>
             <button type="submit" className="post-comment"> <Link to="/Blog_read/Blog4" style={{textDecoration:"none",color:"white"}}>Post Comment</Link></button>
             </form>
          </div>
        </>
    );
}