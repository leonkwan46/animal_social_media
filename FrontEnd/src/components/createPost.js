import React, {useState} from 'react'

import profilePic from "../assets/images/charo.jpg";
import { FormControl, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import "./createPost.css";

const user = {
    picture: profilePic,
    alt: "black-hand",

}

const maxLength = 300;
const a = 90;

const Post = () => {
  const [circle, setCircle] = useState(false);

  const [textInfo, setTextInfo] = useState({
    text: "",
    length: 0
  });

  const handleText = (e) => {
    
    setTextInfo({
      text: e.target.value,
      length: Math.floor(e.target.value.length / maxLength * 100) 
    });
    console.log(textInfo.length);
  }

  return (
    <div className="post-wrapper">
      <div className="post-upper">
        <img src={user.picture} alt={user.alt} className ="profile-pic-for-post"/>
        <TextField value={textInfo.text}
          onChange={handleText}
          label="What's new with you?"
          className="post"
          fullWidth
          multiline="true"
          inputProps={{ maxLength: maxLength }}
        />
      </div>
      <div className="post-lower">
        <div className="circular-container">
          <CircularProgressbar value={textInfo.length} text={`${textInfo.length > 90 ? maxLength - textInfo.text.length: "" }`} />
        </div>
        <Button variant="contained" size = "medium" endIcon={<SendIcon />}>Send</Button>
      </div>
    </div>
  )
}

export default Post