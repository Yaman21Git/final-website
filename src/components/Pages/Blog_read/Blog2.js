import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../../App.css'
import './Blogs.css'


import imgBack from '../../../images2/hot-tea.jpg'
import imgGreen from '../../../images2/farmer-holds-rice-hand (1).jpg'
import imgGreen2 from '../../../images2/image 18.jpg'

export default function Blog2(){
    return (
        <>
          <div className="blogBack">
              <img src={imgBack} alt="blogs"/>{window.innerWidth>680&&<div className="centered" style={{color:"black",marginTop:"-2%",marginLeft:"-2%"}}>Blogs</div>}
              {window.innerWidth<=680&&<div className="centered">Blogs</div>}
              {window.innerWidth>680&&<div className="blackhead" style={{paddingTop:"1%"}}>Is a Healthy Lifestyle your Priority? Let us talk about Abubaba Organic</div>}
              {window.innerWidth<=680&&<div className="blackhead">Is a Healthy Lifestyle your Priority? Let us talk about Abubaba Organic</div>}
          </div>
          <div className="content">
              <p className="firstp">Life is a beautiful journey and as humans it is important for us that in order to live it to the fullest, we should make sure that we do it in the best of health.
As they say,' Your body is a temple' and so, we should make every effort to keep it pure and clean to have a healthy life. This can be done by making life choices that benefit our body both mentally and physically.
</p>

              <p className="firstp">If you are fortunate enough today to have health by your side, it is your duty to see to it that you provide all the essential nutrients to your body and make sure that your vital organs keep functioning well throughout your life. 
This is where Abubaba Organic steps in and strives to make sure that you feed your body with the best possible nourishing food to lead a disease-free healthy life.
</p>

<p className="firstp">With the absence of added chemicals and pesticides, Abubaba Organic promises to deliver pure and health-conscious organic food. By eliminating advanced Industrial production techniques and using the traditional handcrafted methods we achieve the finest quality organic food that offers utmost nutrition and brings long-term benefits towards a healthy and disease-free lifestyle.</p>
              

              <img src={imgGreen} alt="greenery" className="greenery"/>
              <p className="firstp">Our organic food contains higher nutritional value than any regular food along with elevated levels of antioxidants, minerals and Vitamins of all classes that helps develop strong immunity and resistance against numerous life-diseases. Be it cardiovascular complications, indigestion, Immunity development or day-to-day energy level, every product from Abubaba Organic packs a host of health benefits that are hard to find in regular food.</p>
              <p className="firstp">And aside from the nutritional values, the natural food prepared in an organic farm are more flavoursome all because the crops are provided with more time to develop and with no amount of chemicals. And the traditional technique used by our ancestors further leads to making of organic food that taste better than any conventionally produced food.</p>
              <p className="firstp">At Abubaba Organic, we believe that the mother nature has provided us with abundance of food that has natural properties of healing. But we can only reap their benefits if they are consumed in the most natural and traditional way like it was meant to. </p>
              <p className="firstp">It is the small decisions we take today and the choices we make about the kind of food we give to our body, that will help us move towards a life filled with positivity and healthy lifestyle.</p> 
              <p className="firstp">At Abubaba Organic, You Matter to Us.</p>  

                <p className="lastp"><b>TAGS:</b>nourishing food, chemicals and pesticides, nutritional value, antioxidants, properties of healing.</p>
                <h3 className="share">Share</h3>
                <span class="shopnow_dot1" style={{marginLeft:"10%",textAlign:"right"}}><Link to="/Blog_read/Blog1" style={{textDecoration:"none",color:"black"}}><p>←</p></Link></span>
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
                <span class="shopnow_dot1"><Link to="/Blog_read/Blog3" style={{textDecoration:"none",color:"black"}}><p>→</p></Link></span>
          </div>
          <div className="comment-Blog">
             <h2>Leave us a reply</h2>
             <p className="req">Your email address will not be published. Required fields are marked *</p>
             <form className="leaveus-reply">
             <p><input type="text" placeholder="Full Name*" name="name"></input></p>
             <p><input type="email" placeholder="E-mail address*" name="email"></input></p>
             <p><input className="comment" type="text" placeholder="Comment*" name="comment"></input></p>
             <button type="submit" className="post-comment"> <Link to="/Blog_read/Blog2" style={{textDecoration:"none",color:"white"}}>Post Comment</Link></button>
             </form>
          </div>
        </>
    );
}