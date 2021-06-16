import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../../App.css'
import './Blogs.css'


import imgBack from '../../../images2/view-spices-frame-with-copy-space (1).jpg'
import imgGreen from '../../../images2/ginger-tea.jpg'
import imgGreen2 from '../../../images2/image 18.jpg'

export default function Blog5(){
    return (
        <>
          <div className="blogBack">
              <img src={imgBack} alt="blogs"/>{window.innerWidth>680&&<div className="centered" style={{marginTop:"10%"}}>Blogs</div>}
              {window.innerWidth<=680&&<div className="centered">Blogs</div>}
              <div className="blackhead">Why to choose Abubaba Organic spices over Regular spices?</div>
          </div>
          <div className="content">
              <p className="firstp">As consumers are becoming more aware of what they eat in their daily routine, it has become our goal to provide healthy alternatives to their basic cooking essentials that not only are much better in taste and Color but are even more nutritious with every spoon. </p>
              <p className="firstp">Our focus today is to bring out the key reasons why Abubaba Organic Spices are better than regular spices in maintaining a healthy lifestyle filled with natural goodness. </p>
              <img src={imgGreen} alt="greenery" className="greenery"/>
              

              <p className="firstp"><b>- No Harmful additives:</b><br/><br/>
Abubaba Organic Spices are prepared with natural and healthy soil that is devoid of any harmful chemicals. Because of the highly regulated organic food certifications, we as a brand ensure that our spices are produced in pesticide-free farms and with natural soil conditions. 
</p>

              <p className="firstp"><b>- Improved health of Soil:</b><br/><br/>
Soil plays an important role in the maintaining and producing the best resulting produce. And this fact is further important because the health of solid is directly related to the retention of most nutrition content in the spices. 
At Abubaba Organic, we use traditional farming methods with limited quantities so that we are able to achieve most prominent spices from a healthier soil. 
</p>

              <p className="firstp"><b>- No Adulteration:</b><br/><br/> 
There has and is always a huge demand of spices in India and around the world. To keep up with this demand, producers are known to add unwanted fillers to the spices to increase the final production output along with additional flavours. 
We at Abubaba Organic, make our organic products exclusively without any adulteration of any kind so that we are able to provide the most premium quality every time. 
</p>

              <p className="firstp"><b>- Using steam to sterilization:</b><br/><br/>
During the packaging process, appropriate approaches should be taken to ensure the products remain safe for consumption at any given time after purchase. We at Abubaba Organic, use safe sterilization methods like steaming or heating to ensure that no harmful toxic chemical ever touch our customers. 
</p>
              
              <p className="firstp">Looking for a healthy alternative to food?</p>
              <p className="firstp">Determined to make your kitchen essentials free from any chemicals or harmful substances? </p>
              <p className="firstp">Abubaba Organic is here at your disposal to provide certified organic spices for a healthy and disease-free life.</p>

                <p className="lastp"><b>TAGS: </b> natural goodness, organic food certifications, Using steam to sterilization, No Adulteration</p>
                <h3 className="share">Share</h3>
                <span class="shopnow_dot1" style={{marginLeft:"10%",textAlign:"right"}}><Link to="/Blog_read/Blog4" style={{textDecoration:"none",color:"black"}}><p>←</p></Link></span>
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
                <span class="shopnow_dot1"><Link to="/Blog_read/Blog1" style={{textDecoration:"none",color:"black"}}><p>→</p></Link></span>
          </div>
          <div className="comment-Blog">
             <h2>Leave us a reply</h2>
             <p className="req">Your email address will not be published. Required fields are marked *</p>
             <form className="leaveus-reply">
             <p><input type="text" placeholder="Full Name*" name="name"></input></p>
             <p><input type="email" placeholder="E-mail address*" name="email"></input></p>
             <p><input className="comment" type="text" placeholder="Comment*" name="comment"></input></p>
             <button type="submit" className="post-comment"> <Link to="/Blog_read/Blog5" style={{textDecoration:"none",color:"white"}}>Post Comment</Link></button>
             </form>
          </div>
        </>
    );
}