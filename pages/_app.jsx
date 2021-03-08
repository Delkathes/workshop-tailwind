import Link from 'next/link'
import { useRouter } from 'next/router'

import Home from '@zeit-ui/react-icons/home'
import BookOpen from '@zeit-ui/react-icons/bookOpen'

import Svg from 'components/svg.jsx'

import 'styles/index.css'

const ActiveLink = ({ path, name, isActive }) => {
    return (
        <button>
            <Link href={path}>
                <a>{name}</a>
            </Link>
            <style jsx>{`
                button {
                    margin: 0 20px;
                    padding: 8px 12px;
                    border: 1px solid black;
                    border-radius: 8px;
                    background-color: ${isActive ? 'black' : 'transparent'};
                    color: ${isActive ? 'white' : 'black'};
                }
                button:hover {
                    background-color: black;
                    color: white;
                }
            `}</style>
        </button>
    )
}

const Header = () => {
    const { asPath } = useRouter()
    const isPlayground = asPath === '/playground'

    return (
        <>
            <header>
                <div id="home-link">
                    <Link href="/">
                        <a>
                            <Svg />
                            Workshop tailwind
                        </a>
                    </Link>
                </div>
                <nav>
                    <ActiveLink name="Docs" path="/docs" isActive={asPath === '/docs'} />
                    <ActiveLink
                        name="Playground"
                        path="/playground"
                        isActive={asPath === '/playground'}
                    />
                </nav>
            </header>
            <aside>
                <div>
                    <Link href="/">
                        <a>
                            <span>
                                <Home size={20} />
                            </span>
                        </a>
                    </Link>
                    <Link href="/docs">
                        <a>
                            <span>
                                <BookOpen size={20} />
                            </span>
                        </a>
                    </Link>
                </div>
            </aside>
            <style jsx>{`
                header {
                    position: absolute;
                    z-index: 10;
                    top: 0;
                    left: 0;
                    right: 0;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid black;
                    margin: 0 auto;
                    padding: 0 50px;
                    transition-duration: 300ms;
                    transform: translateY(${isPlayground ? '-100' : '0'}%);
                }
                #home-link {
                    width: 50%;
                    font-size: 30px;
                    font-weight: 700;
                    padding: 20px 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                #home-link a {
                    display: flex;
                    align-items: center;
                }
                nav {
                    width: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                aside {
                    z-index: 5;
                    position: absolute;
                    right: 0;
                    top: 25px;
                    overflow: hidden;
                    /* width: 60px; */
                }
                aside div {
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                    transition-duration: 300ms;
                    width: 100px;
                    transform: translateX(${isPlayground ? '0' : '100'}%);
                }
                span {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid black;
                    border-radius: 50%;
                    height: 34px;
                    width: 34px;
                }
            `}</style>
        </>
    )
}
const MyApp = ({ Component, pageProps }) => (
    <>
        <Header />
        <Component {...pageProps} />
    </>
)

export default MyApp
