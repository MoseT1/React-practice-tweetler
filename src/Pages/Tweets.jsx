// TODO : useState를 react로 부터 import 합니다.
import React, { useState } from "react";
import Footer from "../Footer";
import Tweet from "../Components/Tweet";
import "./Tweets.css";
import dummyTweets from "../static/dummyData";

const Tweets = (props) => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
  //인풋 태그를 통해 이름값을 받아오는 상태
  //텍스트 태그를 통해 트윗 내용을 받아오는 상태

  const [content, setContent] = useState('');
  const [tweets, setTweets] = useState(dummyTweets);
  const [user, setUser] = useState('');

  const [currentUser, setCurrentUser] = useState("default");
  // 전체 트윗목록에서 작성자 이름만 뽑아서 새로운 배열을 만든다.
  // 해당 배열을 map을 이용해서 option 태그로 감싼다.
  const nameArr = tweets.map((tweet) => tweet.username).filter((name, idx, self) => idx === self.indexOf(name));


  const handleButtonClick = (event) => {

    if (content !== '' && user !== '') {
      const tweet = {
        id: dummyTweets.length,
        username: user,
        picture: `https://randomuser.me/api/portraits/men/98.jpg`,
        content,
        createdAt: new Date(),
        updatedAt: new Date()

      }

      setTweets([tweet, ...tweets]);
      setContent('')
    } else {
      alert("입력 부탁");
    }
    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    // 트윗 전송이 가능하게 작성해야 합니다.


  };

  const handleChangeUser = (event) => {
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.


    setUser(event.target.value)

  };


  const handleChangeMsg = (event) => {
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.


    setContent(event.target.value)

  };

  const handleSelect = (event) => {

    setCurrentUser(event.target.value);

  };


  // 삭제 기능
  // 삭제 버튼에 대한 이벤트 핸들러 함수 만들기
  // 함수 내부에 들어가는 코드 -> 전체 트윗 배열을 업데이트하는 코드
  // 특정 트윗만 없어지도록 배열을 필터링
  // 트윗을 특정할 수 있는 정보 : id

  const handleDelete = (id) => {
    
    // tweets 배열에서 id와 일치하는 요소만 필터링한 새로운 배열 만들기
    setTweets(tweets.filter((tweet)=> tweet.id !== id));
    
  }
  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  value={user}
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                  onChange={handleChangeUser}
                ></input>
                <input type="textarea" value={content} className="tweetForm__input--message" placeholder="message..." onChange={handleChangeMsg}></input>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  {"total: "} : {tweets.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              <button onClick={handleButtonClick} className="tweetForm__submitButton">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser">
        {
          //select 태그 사이에 선택값이 바뀔 때마다 선택한 유저가 쓴 트윗 목록만 표시한다. option 태그에 하는게 아닌 select 태그에 onChange 속성 줘야 한다.
          // onChange 이벤트가 발생할 때마다 사용자가 선택한 값을 기록할 공간이 필요하다. 그리고 이 선택값은 컴포넌트 내부에서 변화하는 값이다 -> 상태로 만들자!
        }
        <select onChange={handleSelect} value={currentUser}>
          <option value="default">사용자를 선택해주세요.</option>
          {nameArr.map((name) => <option value={name}>{name}</option>)}
        </select>
      </div>
      <ul className="tweets">
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
        {
          (currentUser !== 'default') ? tweets.filter((tweet) => tweet.username === currentUser).map((item) => <Tweet key={item.id} tweet={item} handleDelete={handleDelete}/>) :
            tweets.map((item) =>
              <Tweet key={item.id} tweet={item} handleDelete={handleDelete}/>
            )
        }
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
