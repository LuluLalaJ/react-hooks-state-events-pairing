import React, { useState } from "react";
import video from "../data/video.js";
import VideoInfo from "./VideoInfo.js";
import Votes from "./Votes.js";
import CommentsContainer from "./CommentsContainer.js";

function App() {
  const [commentsHidden, setCommentsHidden] = useState(false)
  function toggleComments() {
    setCommentsHidden(commentsHidden => !commentsHidden)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoInfo />
      <Votes />
      <button onClick={toggleComments}>{commentsHidden ? "Show Comments" : "Hide Comments" }</button>
      {commentsHidden ?  null : <CommentsContainer />  }
      
    </div>
  );
}

export default App;
