import React, {useState} from 'react'
import { Link } from "react-router-dom";
import profilePic from "../assets/images/charo.jpg";
import { FormControl, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import "./createPost.css";

const user = {
    picture: profilePic,
    alt: "black-hand",

}

const maxLength = 280;

const Post = () => {
  const [circle, setCircle] = useState(false);

  const [textInfo, setTextInfo] = useState({
    text: "",
    length: 0,
    percent: 0
  });

  const handleText = (e) => {
    const value = e.target.value;
    setTextInfo({
      text: value,
      length: value.length,
      percent: Math.floor(value.length / maxLength * 100) 
    });

    setCircle(value.length === 0 ? false : true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(textInfo.text);
  }

  return (
    <form className="post-wrapper" onSubmit={handleSubmit}>
      <div className="post-upper">
        <Link to = "" className = "profile-pic-link">
          <img src={user.picture} alt={user.alt} className ="profile-pic-for-post"/>
        </Link>
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
          {
            circle ? <CircularProgressbar
              value={textInfo.percent}
              text={`${maxLength - textInfo.length <= 30 ? maxLength - textInfo.length : ""}`} 
              strokeWidth="12"
              styles={buildStyles({ textSize: "2em",textWeight: "700",pathColor: `${maxLength - textInfo.length < 10 ? "#ff3d00" : (maxLength - textInfo.length < 30 ? "#ffff00" : "#3e98c7")}`})}
              /> : ""
          }
        </div>
        <Button type = "submit" variant="contained" size = "medium" endIcon={<SendIcon />}>Send</Button>
      </div>
    </form>
  )
}

export default Post