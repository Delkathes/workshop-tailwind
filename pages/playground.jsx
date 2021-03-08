import Button from 'components/Workshop/Button'
import ChannelCard from 'components/Workshop/ChannelCard'
import UserLink from 'components/Workshop/UserLink'
import Avatar from 'components/Workshop/Avatar'

import { user } from 'config'

const Playground = ({ randomChannel }) => (
    <main>
        <section>
            <div>
                <Avatar src={`https://avatars.githubusercontent.com/${user}`} />
            </div>
        </section>
        <section>
            <div>
                <UserLink />
            </div>
        </section>
        <section id="button">
            <div>
                <Button primary />
                <Button warning />
            </div>
        </section>
        <section id="channel-card">
            <ChannelCard
                url={randomChannel.absolute_url}
                channelImg={randomChannel.cta_background?.full}
                channelName={randomChannel.name?.fr || randomChannel.name?.en}
                userName={randomChannel.user.name}
                userImg={randomChannel.user.avatar.full}
            />
        </section>
        <style jsx>{`
            main {
                height: 100vh;
                width: 100vw;
                display: grid;
                grid-template-rows: 50% 50%;
                grid-template-columns: 50% 50%;
            }
            section {
                border: 1px solid black;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            #button div {
                display: flex;
                flex-direction: column;
                height: 50%;
                justify-content: space-around;
            }
        `}</style>
    </main>
)

export const getStaticProps = async () => {
    const query = await fetch('https://api.ulule.com/v1/channels', {
        method: 'GET'
    })
    const { channels } = await query.json()

    return {
        props: {
            randomChannel: channels[Math.floor(Math.random() * channels.length)]
        },
        revalidate: 1
    }
}

export default Playground
