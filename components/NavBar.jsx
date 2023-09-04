import Link from "next/link"
import Image from "next/image"
import image from '../public/logonaruto.jpg'


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <Image src={image} width={100} height={70} alt="logo" className="rounded-circle" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/clanuchiha">Uchiha Clan</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/clanuzumaki">Uzumaki Clan</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar
