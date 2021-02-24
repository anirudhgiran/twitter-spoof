import React from 'react';

//Material UI Icons Imports
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteTweetBtn = ({docId, tweetsRef}) =>{

    const deleteTweet = () =>{
        tweetsRef.doc(docId).delete();
    }

    return(
        <div className="deleteBtn" onClick={deleteTweet}>
            <DeleteIcon/>
        </div>
    )
}

export default DeleteTweetBtn;