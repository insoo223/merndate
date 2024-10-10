//import './PostCard.css';
import React, { useState } from 'react';
import axios from './axios';

function PostCard() {
  const [cust, setCust] = useState("")
  const [pic, setPic] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/dating/cards', {
              name: cust,
              imgUrl: pic,
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
  }

  return (
  <div className="PostCard">
    <header className="PostCard-header"> 
    <div className="logIn-form">
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        	<input
          	className = "Name"
          	type="text"
          	placeholder="Name ..."
          	onChange={(e) => {setCust(e.target.value)}}
        	/>
        <p> ImgUrl</p>
        	<input 
        	  className = "ImgUrl"
        	  type="text"
        	  placeholder = "ImgUrl...."
        	  onChange={(e) => {setPic(e.target.value)}}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    </header>
  </div>
  );
}

export default PostCard;
