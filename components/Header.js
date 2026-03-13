import Navlink from "./NavLink";

export default function MainHeader(){
    return <header id="main-header">
        <div id="logo">
            <Navlink href="/"children="K2 News" />
        </div>
        <nav>
            <ul>
                <li>
                    <Navlink href="/news" children="News"/>
                    <Navlink href="/archive" children="Archive"/>
                </li>
            </ul>
        </nav>
    </header>
}