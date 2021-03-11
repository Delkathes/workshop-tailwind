// Constants
import { external } from 'components/ExternalLink'

// TODO => ChannelCard
const ChannelCard = ({ url, channelImg, channelName, userName }) => (
    <a {...external} href={url}>
        <img /* src={channelImg} */ />
        <div>
            <div>{channelName}</div>
            <div>Proposé par {userName}</div>
        </div>
    </a>
)

export default ChannelCard
