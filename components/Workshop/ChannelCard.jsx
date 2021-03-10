// Constants
import { external } from 'components/ExternalLink'

// TODO => ChannelCard
const ChannelCard = ({ url, channelImg, channelName, userName }) => (
    <a {...external} href={url} className="overflow-hidden rounded-lg cursor-pointer">
        <img src={channelImg} className="object-cover object-center h-50 w-96" />
        <div className="flex items-center justify-between w-full px-3 py-2 text-white bg-black border-t border-gray-700">
            <div className="font-semibold">{channelName}</div>
            <div>Proposé par {userName}</div>
        </div>
    </a>
)

export default ChannelCard
