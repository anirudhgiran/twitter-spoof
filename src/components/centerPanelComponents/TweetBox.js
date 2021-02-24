import React, { useState } from 'react';

//React Textarea Autosize Import
import TextareaAutosize from "react-textarea-autosize";

import firebase from 'firebase/app';

const TweetBox = ({auth, firestore}) =>{

    const [tweetText, setTweetText] = useState('');

    const tweet =  async(e) =>{
        e.preventDefault();

        const {uid, photoURL} = auth.currentUser;

        await firestore.collection('tweets').add({
            tweetText: tweetText,
            imageUrl:'https://media.giphy.com/media/4HdD4yN4aZkQQLCkBV/giphy.gif',
            name: "Anirudh Giran",
            username: "anirudhgiran",
            verified: true,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            photoURL,
            uid,
        });

        setTweetText('');
    }

    return(
        <div className="tweetBox">
            <img src={auth.currentUser.photoURL}/>
            <form className="tweetInput" onSubmit={tweet}>
                <TextareaAutosize value={tweetText} onChange={(e)=>setTweetText(e.target.value)} placeholder="What's happening?"/>
                <button className='tweetBtn'>Tweet</button>
            </form>
        </div>
    )
}

export default TweetBox;