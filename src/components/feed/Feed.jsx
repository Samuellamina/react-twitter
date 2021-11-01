import "./feed.css";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import TweetBox from "../tweetBox/TweetBox";
import Post from "../post/Post";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import db from "../../firebase";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* Tweetbox */}
      <TweetBox />

      <FlipMove>
        {/* Posts */}
        {posts.map((post) => (
          <Post
            //proper to use post.id
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
