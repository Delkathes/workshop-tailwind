import Link from 'next/link'

import Svg from 'components/svg'

const Header = () => (
    <header>
        <div>
            <div>
                <Link href="/">
                    <a>
                        <Svg />
                        <div>Workshop</div>
                    </a>
                </Link>
            </div>
            <nav>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </nav>
        </div>
    </header>
)

export default Header
