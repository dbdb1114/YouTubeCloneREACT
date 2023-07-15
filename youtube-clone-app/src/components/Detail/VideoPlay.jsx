import { useParams } from "react-router-dom";
import styled from "styled-components";



export default () => {
    const {id } = useParams();

    return (
        <div style={{width:'80vw', height:'80vh'}}>
            <Iframe 
            allow="autoplay;"
            src={`https://www.youtube.com/embed/${id}?enablejsapi=1?autoplay=1`}
            />
        </div>
    )
}


const Iframe =  styled.iframe`
    display: inline-block;
    width: 100%;
    height: 100%;
`