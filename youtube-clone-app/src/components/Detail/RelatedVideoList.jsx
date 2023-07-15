import { useEffect, useState } from "react"
import styled from "styled-components";


export default ()=>{

    const [items, setItems] = useState([]);

    /**
     * 요청 경로에 url 최상위 경로가 같이 입력되어서 ../를 해줌.
    */
    useEffect(()=>{
        fetch('../data/RelatedVideo.json')
        .then((res)=>{
            console.log(res);
            return res.json();
        })
        .then((data)=>{
            setItems(data.items);
        });
    },[]);

    return(
        <div>
            {
                items.map((item, idx)=>(
                    <RelatedVideoBox key={idx + "relatedVideo"} >
                        <img src={item.snippet.thumbnails.medium.url}/>
                        <div>
                            <p>Ttile</p>
                            <p>Channel</p>
                            <p>date</p>
                        </div>
                    </RelatedVideoBox>
                ))
            }
        </div>
    )

}

const RelatedVideoBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 30%;

`