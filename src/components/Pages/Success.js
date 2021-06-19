import React, { Component } from 'react'
import '../../App.css'
import { withRouter, Redirect } from 'react-router-dom'
import CryptoJS from 'crypto-js';
const kftss = "AHDGHGUDIGUIEJBDYFVYSVFUyUGAIUGWUIGH27GBAHG87YW-SDIYW5E7TFIG8671892109UEY89QU2"


class Verify extends Component{
   constructor(){
      super()
      this.state = {
        txp: "",
        redirectToAccount: false,
        redirectToCart: false
      }
   }

    componentDidMount = () => {
        if(!this.props.location.state){
            this.setState({
                redirectToCart: true
            })
            return;
        }
        this.setState({
            txp: this.props.location.state.details
        })
    }

   render(){
      const { txp, redirectToCart, redirectToAccount } = this.state;

      var byd, details;
      if(txp){
        byd  = CryptoJS.AES.decrypt(txp, kftss);  
        details = JSON.parse(byd.toString(CryptoJS.enc.Utf8));
      }
      if(redirectToAccount)
         return <Redirect to='/services'></Redirect>

      if(redirectToCart)
         return <Redirect to='/cart'> </Redirect>

    console.log(details);
      return(
         <div className="verify-info">
            <h1>Payment Successful</h1>
            {details && <div className="details">
                  <br/>
                  <p>Name: {details.name}</p> <br/>
                  <p>Phone Number: {details.phone}</p> <br/>
                  <p>Email Address: {details.email}</p> <br/>
                  <p>Address: {details.address}</p> <br/>
                  <p>Products Purchased:</p>
                  { details.products.map((item, i) => (<p style={{fontWeight: "bold"}}>{item.name}: &nbsp; &nbsp; {item.quantity}</p>)) }<br/>
                  <p>Total Amount: ₹ {details.amount}.00</p>
                  <button onClick={() => this.setState({ redirectToAccount: true})}>Continue Shopping</button>
            </div>}
         </div>
      );
   }
}

export default withRouter(Verify);
