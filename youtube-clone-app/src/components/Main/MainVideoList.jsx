import { useNavigate } from "react-router-dom";
import styles from "./MainVideoList.module.css";
import { useEffect, useState } from 'react'
import { Section } from "../Common/Common";
import { Youtube } from '../../Youtube'

export default () => {

    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    const clickLink = (id, videoObj) => {
        navigate(`video/${id}`,{
            state:{
                videoObj :videoObj
            }
        });
    }
    
    useEffect(()=>{
        fetch('data/PopularVideo.json')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setItems(data.items);
        });
    },[]);
    /**
     * 여기서 반응형 걸어주면 좋을듯.
     * 썸네일 사진만 사이즈에 맞춰서 바꿔주면 될듯.
     */
    return (
        <Section className={styles.mainWrapper}>
        {/* // <section className={styles.mainWrapper}> */}
                {items.map((item, idx)=>{

                    const videoObj = new Youtube(item.snippet.channelId,item.snippet.title,item.snippet.description, );
                    return (
                    <div key={idx + "hotVideo"} className={styles.videoBox}>
                        <p onClick={()=>{clickLink(item.id,videoObj)}} to={`video/${item.id}`} className={styles.videoLink}>
                            <img className={styles.thumbnails} src={item.snippet.thumbnails.medium.url}/>
                            <p className={styles.videoTitle}>{videoObj.videoTitle}</p>
                        </p>
                        <div className={styles.videoDescription}>{item.snippet.description}</div>
                    </div>);
                })}
        {/* // </section> */}
        </Section>
    )
}