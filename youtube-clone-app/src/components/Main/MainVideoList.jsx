import { Link } from "react-router-dom";
import styles from "./MainVideoList.module.css";
import { useEffect, useState } from 'react'
import { Section } from "../Common/Common";

export default () => {

    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('data/PopularVideo.json')
        .then((res)=>{
            console.log(res)
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
                {items.map((item, idx)=>(
                    <div key={idx + "hotVideo"} className={styles.videoBox}>
                        <Link to={`video/${item.id}`} className={styles.videoLink}>
                            <img className={styles.thumbnails} src={item.snippet.thumbnails.medium.url}/>
                            <p className={styles.videoTitle}>{item.snippet.title}</p>
                        </Link>
                        <div className={styles.videoDescription}>{item.snippet.description}</div>
                    </div>
                ))}
        {/* // </section> */}
        </Section>
    )
}