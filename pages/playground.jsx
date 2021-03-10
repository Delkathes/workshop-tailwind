import { user } from 'config'

import Button from 'components/Workshop/Button'
import ChannelCard from 'components/Workshop/ChannelCard'
import UserLink from 'components/Workshop/UserLink'
import Avatar from 'components/Workshop/Avatar'
import Progress from 'components/Workshop/Progress'
import TextArea from 'components/Workshop/TextArea'
import Hover from 'components/Workshop/Hover'
import Reveal from 'components/Workshop/Reveal'

const Playground = ({ randomChannel }) => (
    <main>
        <section className="big-section">
            <section className="play-section">
                <div>
                    <Avatar src={`https://avatars.githubusercontent.com/${user}`} />
                </div>
            </section>
            <section className="play-section">
                <div>
                    <UserLink />
                </div>
            </section>
            <section className="play-section">
                <div id="progress">
                    <Progress />
                </div>
            </section>
            <section className="play-section">
                <TextArea />
            </section>
        </section>
        <section className="big-section">
            <section id="button" className="play-section">
                <div>
                    <Button />
                    <Button primary />
                    <Button warning />
                </div>
            </section>
            <section id="channel-card" className="play-section">
                <ChannelCard
                    url={randomChannel.absolute_url}
                    channelImg={randomChannel.cta_background?.full}
                    channelName={randomChannel.name?.fr || randomChannel.name?.en}
                    userName={randomChannel.user.name}
                    userImg={randomChannel.user.avatar.full}
                />
            </section>
            <section className="play-section">
                <Hover />
            </section>
            <section className="play-section">
                <Reveal />
            </section>
        </section>
        <style jsx>{`
            main {
                display: flex;
                flex-direction: column;
                width: 100%;
            }
            main .big-section {
                height: 100vh;
                width: 100%;
                display: grid;
                grid-template-rows: 50% 50%;
                grid-template-columns: 50% 50%;
            }
            main section .play-section {
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
            #progress {
                width: 300px;
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
