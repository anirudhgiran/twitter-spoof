import React from "react";

//Styles imports
import "../styles/centerPanelStyles/centerPanelStyle.css";

//Center Panel Component Imports
import Header from "./centerPanelComponents/Header";
import TweetBox from "./centerPanelComponents/TweetBox";
import Tweet from "./centerPanelComponents/Tweet";

import { useCollectionData } from 'react-firebase-hooks/firestore';

//React Router DOM Imports

const CenterPanel = ({ auth, firestore }) => {

  const tweetsRef = firestore.collection('tweets');
  const query = tweetsRef.orderBy("createdAt", "desc");

  const [tweets] = useCollectionData( query, {idField: "id"});

  return (
    <div className="centerPanel">
      <Header headerText="Home" />
      <TweetBox auth={auth} firestore={firestore}/>

      <div className="feed">
        {tweets && tweets.map((data)=>
          <Tweet
            auth={auth}
            key={data.id}
            name={data.name}
            username={data.username}
            verified={data.verified}
            tweetText={data.tweetText}
            imageUrl={data.imageUrl}
            avatarUrl={data.photoURL}
            uid={data.uid}
            tweetsRef={tweetsRef}
            docId={data.id}
          />
        )}
      </div>
    </div>
  );
};

export default CenterPanel;
