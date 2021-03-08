import Icon from '@zeit-ui/react-icons/externalLink'
import ExternalLink from 'components/ExternalLink'

const Docs = () => (
    <main>
        <section>
            <h2>A Savoir</h2>
            <ul>
                <li>
                    Un fichier <code>index.css</code> pour centraliser ses customs
                    components et utilities
                </li>
                <li>
                    Un fichier <code>tailwind.config.js</code> pour extend le theme et
                    activer davantage de variants (hover, first) + plugins
                </li>
                <li>
                    <ul>
                        <li>border-radius => rounded</li>
                        <li>line-height => leading</li>
                        <li>letter-spacing => tracking</li>
                    </ul>
                </li>
            </ul>
        </section>
        <section>
            <h2>Docs</h2>
            <ul>
                <li>
                    <ExternalLink link="https://tailwindcss.com/docs">
                        <div>
                            <span>Tailwind Docs</span> <Icon size={20} />
                        </div>
                    </ExternalLink>
                </li>
            </ul>
        </section>
        <section>
            <h2>Downloads</h2>
            <ul>
                <li>
                    <ExternalLink link="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss">
                        <div>
                            <span>VS-C: IntelliSense Tailwind</span>
                            <Icon size={20} />
                        </div>
                    </ExternalLink>
                    <span>(recommandé pour débutants)</span>
                </li>
                <li>
                    <ExternalLink link="https://marketplace.visualstudio.com/items?itemName=heybourn.headwind">
                        <div>
                            <span>VS-C: Headwind</span> <Icon size={20} />
                        </div>
                    </ExternalLink>
                    <span>(opinionated formatter)</span>
                </li>
            </ul>
        </section>
        <section>
            <h2>Ressources</h2>
            <ul>
                <li>
                    <ExternalLink link="https://github.com/aniftyco/awesome-tailwindcss">
                        <div>
                            <span>Github: Awesome Tailwind (mass ressources)</span>
                            <Icon size={20} />
                        </div>
                    </ExternalLink>
                </li>
                <li>
                    <ExternalLink link="https://www.youtube.com/c/TailwindLabs/videos">
                        <div>
                            <span>Youtube: Tailwind Labs</span>
                            <Icon size={20} />
                        </div>
                    </ExternalLink>
                </li>
            </ul>
        </section>
        <section>
            <h2>Tools</h2>
            <ul>
                <li>
                    <ExternalLink link="https://play.tailwindcss.com">
                        <div>
                            <span>Playground</span> <Icon size={20} />
                        </div>
                    </ExternalLink>
                </li>
                <li>
                    <ExternalLink link="https://javisperez.github.io/tailwindcolorshades">
                        <div>
                            <span>Shades generator</span> <Icon size={20} />
                        </div>
                    </ExternalLink>
                </li>
            </ul>
        </section>
        <style jsx>{`
            main {
                padding: 8rem 12rem;
            }
            div {
                display: inline-flex;
                align-items: center;
            }
            span {
                margin-right: 8px;
            }
            section {
                margin-bottom: 12px;
            }
            h2 {
                font-weight: 700;
            }
            code {
                border-radius: 20px;
                background-color: #222;
                color: #eee;
                padding: 0 5px;
            }
        `}</style>
    </main>
)

export default Docs
