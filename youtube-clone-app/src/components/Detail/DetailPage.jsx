import { Section } from "../Common/Common";
import RelatedVideoList from "./RelatedVideoList";
import VideoPlay from "./VideoPlay";
import ChannelInfo from "./VideolInfo";


export default () => {
    
    
    return(
        <Section>
            <div>
                    <VideoPlay/>
                    <ChannelInfo/>
            </div>
            <RelatedVideoList/>
        </Section>
    )
}