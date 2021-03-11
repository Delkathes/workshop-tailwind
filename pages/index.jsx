const Home = () => (
    <main>
        <h2>
            <strong>Objectif:</strong> Soigner les maux enfouis, psychologie à frais
            réduits
        </h2>
        <h2>
            <strong>Pourquoi:</strong> DX goes 📈 avec VS-Code et l'auto completion +
            suggestion des class
        </h2>
        <div>
            <h2>
                <strong>Points forts:</strong>
            </h2>
            <ul>
                <li>🔥 fast - c'est du css</li>
                <li>🕊️ lightweight - avec PurgeCSS (15~25ko pour tout le site)</li>
                <li>💪 straight learning curve - accessibilité et prise en main</li>
                <li>📐 stable & 'uniform' design - rigueur "imposée"</li>
                <li>👓 readability - non éparpillé, dans le html(jsx) ou theme</li>
                <li>🔧 flexibility - un fichier config + plugins</li>
                <li>✨ hype - communauté et maintenance</li>
            </ul>
        </div>
        <div>
            <h2>
                <strong>Points faibles:</strong>
            </h2>
            <ul>
                <li>👓 unreadability - si non organisé</li>
                <li>🧑‍🤝‍🧑 needs team building - Toute l'équipe doit connaître</li>
            </ul>
        </div>
        <div>
            <h2>
                <strong>TODO :</strong>
            </h2>
            <ul>
                <li>Un round avatar</li>
                <li>Un avatar-user link</li>
                <li>Une progress bar</li>
                <li>Une zone de text avec focus</li>
                <li>
                    Un outlined round-button avec hover (+ déclinaisons en primary
                    warning)
                </li>
                <li>Une ChannelCard</li>
                <li>Un hover qui change le background et le border-radius</li>
                <li>Un hover qui translate une inner div vers le haut</li>
            </ul>
        </div>

        <style jsx>{`
            main {
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 6rem 12rem 0rem;
            }
            h2 {
                padding-bottom: 12px;
                /* font-size: 24px; */
            }
            main div {
                padding-top: 12px;
            }
            ul {
                list-style: disc;
                list-style-position: inside;
            }
            li {
                padding-left: 10px;
            }
        `}</style>
    </main>
)

export default Home
