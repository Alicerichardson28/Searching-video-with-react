import React from 'react';
import VideoItem from "./videoItem";

const VideoList = ({videos}) => {
    const renderedList = videos.map((video, idx) => {
        return <VideoItem key={idx} video={video}/>
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default VideoList