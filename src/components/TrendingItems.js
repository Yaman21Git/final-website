import React from 'react';
import '../App.css';
import { Link, Redirect } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function TrendingItem(props) {
  
  var flag=false;
  if(props.text==="Lakadong Turmeric Powder"||props.text==="Cold Pressed Groundnut Oil"||props.text==="Royal Saffron White Honey"){
    flag=true;
  }

  // var flag = (props.text === "Royal Saffron White Honey" ? true : false);

  const addToCart = (e) => {
    e.preventDefault();
    var id = props.path;
    var idx = 0;
    for(var i=0; i<id.length; i++)
      if(id[i] == '/')
        idx = i;
    const productId = id.substr(idx + 1);
    if (!(localStorage.getItem("cart"))){
        const details = {
            id: productId,
            name: props.text,
            quantity: 1,
            price: props.price
        }
        localStorage.setItem("cart", JSON.stringify([details]));
    }
    else{
        var flag = false;
        var array = JSON.parse(localStorage.getItem("cart"));
        
        console.log(array);
        for(var i=0; i<array.length; i++){
            if(productId === array[i].id){
                flag = true;
                array[i].quantity += 1;
            }
        }
        if(!flag){
            const details = {
                id: productId,
                name: props.text,
                quantity: 1,
                price: props.price
            }
            array.push(details);
        }
        localStorage.setItem("cart", JSON.stringify(array));
    }
    toast.success(<div style={{ position: 'relative' }}>
        <h6>Item added to cart</h6>
        </div>, {
        position: "top-center",
        autoClose: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
    });
    // window.location.reload();
  }

  return (
    <>
    <ToastContainer />
      <li className='trending_item'>
        <Link className='trending_item_link' to={props.path}>
          <figure className='trending_item_pic-wrap'>
            <img
              className='trending_item_img'
              alt='Trending Image'
              src={props.src}
            />
          </figure>
          <div className='trending_item_info'>
                { !flag ? 
                  (<h2> {props.text} </h2> ) : 
                  (<h2 className="just-three"> {props.text} </h2> ) 
                } 

              { !props.show && <h3> ₹ {props.price}.00 </h3> } 
              { !props.show && <Link onClick={event => addToCart(event)} style={{textDecoration:"none", cursor: "pointer"}} ><h5 className='trending_item_text'>Add to cart +</h5></Link>}
          </div>
        </Link>
      </li>
    </>
  );
}

export default TrendingItem;
