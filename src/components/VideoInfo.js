import React from "react";

function VideoInfo({video}) {
    return (
        <div>
            <h1>{video.title}</h1>
            <h3>{video.views} Views | Uploaded {video.createdAt}</h3>
        </div>
    )
}

export default VideoInfo