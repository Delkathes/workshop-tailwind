// Constants
import { external } from 'components/ExternalLink'

// TODO => ChannelCard
const ChannelCard = ({ url, channelImg, channelName, userName, userImg }) => (
    <a
        {...external}
        href={url}
        className="relative overflow-hidden rounded-lg cursor-pointer"
    >
        <img className="object-cover object-center h-60 w-80" src={channelImg} />
        <div className="absolute bottom-0 flex items-end w-full px-3 pb-2 text-white">
            <div className="flex-grow">
                <div className="text-3xl font-semibold">{channelName}</div>
                <div className="text-sm">Proposé par {userName}</div>
            </div>
            <div className="pl-10">
                <figure className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                    <img
                        className="object-cover object-center rounded-full w-9 h-9"
                        src={userImg}
                    />
                </figure>
            </div>
        </div>
    </a>
)

export default ChannelCard
