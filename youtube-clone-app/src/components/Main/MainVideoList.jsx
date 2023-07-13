import styles from "./MainVideoList.module.css";
import { useEffect, useState } from 'react'

export default () => {

    const [items, setItems] = useState([]);

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
        <section className={styles.mainWrapper}>
                {items.map((item, idx)=>(
                    <div className={styles.videoBox}>
                        <img src={item.snippet.thumbnails.medium.url}/>
                        <p className={styles.videoTitle}>{item.snippet.title}</p>
                        <p className={styles.videoDescription}>{item.snippet.description}</p>
                    </div>
                ))}
        </section>
    )
}