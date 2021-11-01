import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Widget from "../../components/widget/Widget";

const Home = () => {
  return (
    <div className="home">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widget */}
      <Widget />
    </div>
  );
};

export default Home;
