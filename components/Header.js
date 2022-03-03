import Image from "next/image";

const { default: Link } = require("next/link");

function Header() {
    return (
        <header className="bg-dark-blue flex items-center justify-between py-4 px-[60px] fixed top-0 left-0 w-full z-50" >
            <div className="max-w-[180px]" >
                <Link href="#">
                    <a>
                        <Image width={447} height={108} src="/img/logo.png" alt="Elysiland" />
                    </a>
                </Link>
            </div>

            <nav>
                <ul className="flex">
                    <li>
                        <Link href="#">
                            <a className="nav_link">
                                Home
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className="nav_link">
                                NFT
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className="nav_link">
                                Game
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className="nav_link">
                                Whitepaper
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className="nav_link">
                                Marketplace
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className="nav_link">
                                Team
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className="nav_link">
                                Roadmap
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className="nav_link">
                                Contact
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
