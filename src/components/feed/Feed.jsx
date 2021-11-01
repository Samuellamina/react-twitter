import "./feed.css";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import TweetBox from "../tweetBox/TweetBox";
import Post from "../post/Post";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import db from "../../firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // async function getPosts(db) {
    //   const postsCol = collection(db, "posts");
    //   const postsSnapshot = await getDocs(postsCol);
    //   const postsList = postsSnapshot.docs.map((doc) => doc.data());
    //   return postsList;
    // }

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

      {/* Posts */}
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
      <Post />
    </div>
  );
};

export default Feed;
