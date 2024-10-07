import React, { useState } from 'react';
import DatingCard from 'react-tinder-card';
import './DatingCards.css'

const DatingCards = () => {
	const [people, setPeople] = useState ([
			{ name: "Random Girl", imgUrl: "https://images.unsplash.com/photo-1599842057874-37393e9342df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=634&q=80" },
      { name: "Another Girl", imgUrl: "https://images.unsplash.com/photo-1602693130555-a1a37fda607b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=634&q=80" },
      { name: "Random Guy", imgUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" },
      { name: "Another Guy", imgUrl: "https://images.unsplash.com/photo-1601576084861-5de423553c0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=634&q=80" },
		]);
	const swiped = (direction, nameToDelete) => {
        console.log("receiving " + nameToDelete)
  }
  const outOfFrame = (name) => {
    console.log(name + " left the screen!!")
  }
  return (
        <div className="datingCards">
        	<div className="datingCards_container">
        		{people.map((person) => (
           		 <DatingCard
		           	className="swipe"
   		         	key={person.name}
     		       	preventSwipe={['up', 'down']}
       		     	onSwipe={(dir) => swiped(dir, person.name)}
         		   	onCardLeftScreen={() => outOfFrame(person.name)} >
           		 	<div style={{ backgroundImage: `url(${person.imgUrl})`}} className="card">
                	<h3>{person.name}</h3>  
             		</div>
              </DatingCard>
            ))}
        	</div>
        </div>
  ); //return
} //DatingCards

export default DatingCards;

