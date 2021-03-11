// Constants
import { external } from 'components/ExternalLink'

// TODO => ChannelCard
const ChannelCard = ({ url, channelImg, channelName, userName }) => (
    <a {...external} href={url} className="rounded-lg overflow-hidden bg-black">
        <img src={channelImg} className="h-50 w-96" />
        <div className="flex text-white justify-between p-3">
            <div className="font-bold">{channelName}</div>
            <div>Proposé par {userName}</div>
        </div>
    </a>
)

export default ChannelCard
