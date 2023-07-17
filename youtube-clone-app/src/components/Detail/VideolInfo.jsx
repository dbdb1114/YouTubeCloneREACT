import { useEffect, useState } from 'react';
import styles from './ChannelInfo.module.css';
import { useLocation } from 'react-router-dom';

export default () => {

    const [videoInfo,setVideoInfo ] = useState({});
    const videoObj = useLocation().state.videoObj;
    
    useEffect(()=>{
        fetch('../data/ChannelDetail.json')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setVideoInfo({...videoObj,data});
        })
    },[]);
    
    return (
        <div className={styles.channelInfo}>
            <p>{videoInfo.videoTitle}</p>
            { !!videoInfo.data && <img src={videoInfo.data.items[0].snippet.thumbnails.default.url} />}
            <p>{videoInfo.videoDescription}</p>
        </div>
    )
}
