import { Avatar, Button } from "@mui/material";
import "./tweetBox.css";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import GifIcon from "@mui/icons-material/Gif";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import { useState } from "react";
import db from "../../firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState();
  const [tweetImage, setTweetImage] = useState();

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Lamina Samuel",
      username: "laminaton",
      verified: true,
      text: tweetMessage,
      avatar:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      image: tweetImage,
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://media.istockphoto.com/photos/female-portrait-icon-as-avatar-or-profile-picture-picture-id477333976?b=1&k=20&m=477333976&s=170667a&w=0&h=0MKAqzspB2Tcx7Yf42nYI0Pda9qK1oZap25Mru21K40=" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
        />
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
