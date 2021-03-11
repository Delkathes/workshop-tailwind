import Link from 'next/link'

import Svg from 'components/svg'

const Header = () => (
    <header className="bg-white border-b border-gray-300">
        <div className="flex items-center justify-between px-3 py-2 lg:container">
            <div>
                <Link href="/">
                    <a className="flex items-center">
                        <Svg />
                        <div>Workshop</div>
                    </a>
                </Link>
            </div>
            <nav className="flex items-center">
                <Link href="/about">
                    <a className="mr-3">About</a>
                </Link>
                <Link href="/contact">
                    <a className="">Contact</a>
                </Link>
            </nav>
        </div>
    </header>
)

export default Header
