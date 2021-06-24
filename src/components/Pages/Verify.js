import React, { Component } from 'react'
import '../../App.css'
import { withRouter, Redirect } from 'react-router-dom'
import {userDetails, isAuthenticated} from './auth'
import {addOrder} from './product'
import {verifyPayment} from './paymentApi'
import Razorpay from 'razorpay'
import CryptoJS from 'crypto-js';
const kftss = "AHDGHGUDIGUIEJBDYFVYSVFUyUGAIUGWUIGH27GBAHG87YW-SDIYW5E7TFIG8671892109UEY89QU2"


class Verify extends Component{
   constructor(){
      super()
      this.state = {
         orderId: "",
         d: "",
         a:  "",
         c: "",
         version: 0,
         redirectToCart: false,
         redirectToAccount: false
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
         orderId: this.props.location.state.orderId,
         a: this.props.location.state.amount,
         c: this.props.location.state.cart,
         d: this.props.location.state.delivery, 
      })
   }

   componentWillUnmount = () => {
      window.location.reload();
   }
   
   confirmPayment = (response) => {
      const {a, c, d} = this.state;
      
      var byt = CryptoJS.AES.decrypt(a, kftss);
      var byc = CryptoJS.AES.decrypt(c, kftss);
      var byd = CryptoJS.AES.decrypt(d, kftss);

      var amount = parseInt(byt.toString(CryptoJS.enc.Utf8));
      var delivery = parseInt(byd.toString(CryptoJS.enc.Utf8));
      var cart = JSON.parse(byc.toString(CryptoJS.enc.Utf8));

      const deatils = {
         razorpay_payment_id: response.razorpay_payment_id,
         razorpay_order_id: response.razorpay_order_id,
         razorpay_signature: response.razorpay_signature
      }
      verifyPayment(deatils)
      .then(result => {
         if(result === "failure"){
            alert("Payment Unsuccessful!");
            this.setState({
               redirectToCart: true
            });
         }
         else{
            const order = {
               orderId: response.razorpay_order_id,
               paymentId: response.razorpay_payment_id,
               products: cart,
               delivery: delivery,
               amount: amount,
               name: userDetails().name,
               email: userDetails().email,
               phone: userDetails().phone,
               address: userDetails().address,
               zip: userDetails().pincode
            }

            addOrder(order)
            .then(result => {
               localStorage.setItem("cart", JSON.stringify([]));
               this.setState({
                  redirectToAccount: true
               })
            })
         }
      });
   }

   handlePayment = (e) => {

      var options = {
         "currency": "INR",
         "name": "Abubaba Organic",
         "description": "SBM ENTERPRISE",
         "image": "",
         "order_id": this.state.orderId, 
         "handler": (response) => this.confirmPayment(response),
         "theme": {
            "color": "#3399cc"
         }
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
   }

   render(){
      const { a, c, orderId, redirectToCart, redirectToAccount } = this.state;

      var byt, byc, amount, cart;
      if(c){
         byt = CryptoJS.AES.decrypt(a, kftss);
         byc  = CryptoJS.AES.decrypt(c, kftss);
         amount = parseInt(byt.toString(CryptoJS.enc.Utf8));
         cart = JSON.parse(byc.toString(CryptoJS.enc.Utf8));
      }

      const details = {
         orderId: orderId,
         products: cart,
         amount: amount,
         name: userDetails().name,
         email: userDetails().email,
         phone: userDetails().phone,
         address: userDetails().address
      }
         
      if(redirectToAccount)
         return <Redirect to={{
            pathname: "/success",
            state: { details: CryptoJS.AES.encrypt(JSON.stringify(details), kftss).toString() }
         }} />

      if(redirectToCart)
         return <Redirect to='/cart'> </Redirect>

      return(
         <div className="verify-info">
            <h1>Verify your details</h1>
            <div className="details">
                  <br/>
                  <p>Your Name: {userDetails().name}</p> <br/>
                  <p>Your Contact: {userDetails().phone}</p> <br/>
                  <p>Your Address: {userDetails().address}</p> <br/>
                  <p>Total Amount: ₹ {amount}.00</p>
                  
                  <button id="rzp-button1" onClick={ (event) => this.handlePayment(event) }>Proceed To Payment</button>
            </div>
         </div>
      );
   }
}

export default withRouter(Verify);
