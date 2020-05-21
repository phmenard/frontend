import React from 'react';
import '../css/index.css';
import { Link } from 'react-router-dom';



const AuctionCard = props => {
  
  return (
    
      <div className="auctionCard" >
          <div className="imageContainer"><img src={props.auction.images[0]}/></div>
          <h1>{props.auction.title}</h1>
          <p>{props.auction.description}</p>
          <label>Current Bid: </label><p>${props.auction.currentBid}</p> 
          <label>Time Left: </label><p>1day 2h 32sec</p>

          <div className="buttonContainer"><div className="bid">Bid</div></div>
                          
       </div>
    
  );
}

export default AuctionCard;