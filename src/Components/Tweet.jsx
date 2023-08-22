import React from "react";
import "./Tweet.css";

const Tweet = ({ tweet, handleDelete}) => {
  const parsedDate = new Date(tweet.createdAt).toLocaleDateString("ko-kr");

  return (
    <li className="tweet" id={tweet.id}>
      <div className="tweet__profile">
        <img src={tweet.picture} />
      </div>
      <div className="tweet__content">
        <div className="tweet__userInfo">
          <div className="tweet__userInfo--wrapper">
            {tweet.username}  
            
            {parsedDate}
           
          </div>
           <div className="tweet__userInfo--buttonWrapper">
              <button className="tweet__deleteButton" onClick={() => handleDelete(tweet.id)}>
                <i className="far fa-trash-alt"></i>
              </button>
            </div>
        </div>
        <div className="tweet__message">
          {tweet.content}
        </div>
      </div>
    </li>
  );
};

export default Tweet;
