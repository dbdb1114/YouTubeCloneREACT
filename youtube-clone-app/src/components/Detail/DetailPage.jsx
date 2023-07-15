
import { Section } from "../Common/Common"
import RelatedVideoList from "./RelatedVideoList"
import VideoPlay from "./VideoPlay"


export default () => {

    return(
        <Section>
            <VideoPlay/>
            <RelatedVideoList/>
        </Section>
    )
}