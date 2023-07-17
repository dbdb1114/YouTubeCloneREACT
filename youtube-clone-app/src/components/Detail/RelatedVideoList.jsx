import { useEffect, useState } from "react"
import styled from "styled-components";
import styles from "./RelatedVideoList.module.css";

export default ()=>{

    const [items, setItems] = useState([]);
    /**
     * 요청 경로에 url 최상위 경로가 같이 입력되어서 ../를 해줌.
    */
    useEffect(()=>{
        fetch('../data/RelatedVideo.json')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setItems(data.items);
        });
        
    },[]);

    return(
        <div className={styles.relatedVideoBoxContainer} >
            {
                items.map((item, idx)=>(
                    <div className={styles.relatedVideoBox} key={idx + "relatedVideo"} >
                        <div className={styles.relatedVideoThumnail} style={{ backgroundImage:`url(${item.snippet.thumbnails.medium.url})`}}></div>
                        <div className={styles.relatedVideoTextBox}>
                            <p className={styles.relatedVideoTitle}>{item.snippet.title}</p>
                            <div>
                                <p className={styles.relatedVideoSubText}>{item.snippet.channelTitle}</p>
                                <p className={styles.relatedVideoSubText}>{item.snippet.publishTime}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )

}
