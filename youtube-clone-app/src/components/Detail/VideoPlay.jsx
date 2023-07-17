import { useParams } from "react-router-dom";
import styled from "styled-components";



export default () => {
    const {id } = useParams();

    return (
        <IframeContainer>
            <Iframe 
            src={`https://www.youtube.com/embed/${id}?enablejsapi=1?autoplay=1`}
            style={{border: '0'}}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
            ></Iframe>
        </IframeContainer>
    );
}


const Iframe =  styled.iframe`
    display: inline-block;
    width: 100%;
    height: 100%;
    /* height: 100%; */
`
const IframeContainer = styled.div`
    display: inline-block;
    width: calc(80vw - 402px);
    height: calc((80vw - 402px)*1.2/2);
`