import React from 'react';
import VideoItem from "./videoItem";

const VideoList = ({videos}) => {
    const renderedList = videos.map((video, idx) => {
        return <VideoItem key={idx} video={video}/>
    });
    return <div>{renderedList}</div>;
}

export default VideoList