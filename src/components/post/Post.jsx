import { Avatar, AvatarGroup } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import IosShareIcon from "@mui/icons-material/IosShare";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./post.css";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}
              <span className="post__headerSpecial">
                {" "}
                {verified && <VerifiedIcon className="post__badge" />}{" "}
                {username}· 3m
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <IosShareIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
